import { useRef, useState } from 'react'
import Roles from '../../../../enums/Roles'
import { CategoryHeader, CostumDatePicker, FormContainer, Line, RegisterButton, TermsWrapper, TextfieldLong } from './registerGuestForm.Styles'
import { Checkbox } from '@mui/material'
import { TypoBody2, TypoH2 } from '../../../styled-components/styledTypographie'
import { boxShadowAnimation } from './registerGuestForm.Styles'
import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { preventNonAlphabeticInput, validateGuestForm } from '../../../functions/validation/guestFormValidation'


function RegisterGuestForm() {

    type CheckType = boolean
    const [check, setCheck] = useState<CheckType>(false)



    type FormData = {
        firstname: string;
        lastname: string;
        email: string;
        gender: string;
        birthday: string | null;
        username: string;
        password: string;
        passwordConfirm: string;
        role: Roles;
    };
    const [formData, setFormData] = useState<FormData>({
        firstname: "",
        lastname: "",
        email: "",
        gender: "",
        birthday: null,
        username: "",
        password: "",
        passwordConfirm: "",
        role: Roles.GUEST
    })

    const inputRefs = useRef<(HTMLInputElement | HTMLButtonElement | HTMLDivElement | HTMLOptionElement)[]>([])

    type EmptyValueEffectType = {
        animation: string;
    }
    const [emptyValueEffect, setEmptyValueEffect] = useState<EmptyValueEffectType[]>(
        Array(8).fill({ animation: "" }) // 8 positions to set the effect independent from each other
    )

    type InputEvent = React.ChangeEvent<HTMLInputElement>
    const handleChange = (event: InputEvent) => {

        const name = event.target.name
        const value = event.target.value

        setFormData((prevData) => ({
            ...prevData,
            [name]: preventNonAlphabeticInput(name, value),
        }));
    }

    const handleCheckboxChange = () => setCheck(prevCheck => !prevCheck)


    const [date, setDate] = useState<Dayjs>()
    const handleDateChange = (newDate: Dayjs) => {
        setFormData((prevData) => ({
            ...prevData,
            birthday: newDate.format('YYYY-MM-DD')
        }));
    }


    type ButtonEvent = React.MouseEvent<HTMLButtonElement>

    const handleSubmit = (event: ButtonEvent) => {
        event.preventDefault();

        if (!validateGuestForm(formData, setEmptyValueEffect, boxShadowAnimation, inputRefs, check)) return

            const apiUrl =import.meta.env.VITE_APP_API_URL
            fetch(`${apiUrl}/register/guest`,
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify(formData)
                }
            )

            setFormData({
                firstname: "",
                lastname: "",
                email: "",
                gender: "",
                birthday: null,
                username: "",
                password: "",
                passwordConfirm: "",
                role: Roles.GUEST
            })
            setCheck(false)
    }


    const genderList = [
        "male",
        "female",
        "divers"
    ]

    console.log(Date.now())
    console.log(Date.now() - 31556926)



    return (
        <>
            <FormContainer>
                <form typeof='submit' onSubmit={handleSubmit}>
                    <Line>
                        <CategoryHeader><TypoH2>BASE</TypoH2></CategoryHeader>
                    </Line>
                    <Line>
                        <TextfieldLong inputRef={domElement => inputRefs.current.push(domElement as HTMLInputElement)} name='firstname'helperText='firstname*' variant='standard' value={formData.firstname} onChange={handleChange} sx={{'& .MuiInputBase-input': emptyValueEffect[0]}} key='textfield-firstname'/> {/** using inputRef instead of ref fixed the problem (wrapped htmlElement inside StyledElement cannot be detected) */}
                    </Line>
                    <Line>
                        <TextfieldLong inputRef={domElement => inputRefs.current.push(domElement as HTMLInputElement)} name='lastname' helperText='lastname*' variant='standard' value={formData.lastname} onChange={handleChange} sx={{'& .MuiInputBase-input': emptyValueEffect[1]}} key='textfield-lastname'/>
                    </Line>
                    <Line>
                        <TextfieldLong inputRef={domElement => inputRefs.current.push(domElement as HTMLInputElement)} name='email' helperText='email*' variant='standard' value={formData.email} onChange={handleChange} sx={{'& .MuiInputBase-input': emptyValueEffect[2]}} key='textfield-email'/>
                    </Line>
                    <Line>
                        <CategoryHeader><TypoH2>EVENT RELATED</TypoH2></CategoryHeader>
                    </Line>
                    <Line>
                        <TextfieldLong inputRef={domElement => inputRefs.current.push(domElement as HTMLOptionElement)} name='gender' helperText='gender' variant='standard' select slotProps={{select: {native: true}}} value={formData.gender} onChange={handleChange} sx={{'& .MuiInputBase-input': emptyValueEffect[3]}} key='textfield-gender'> {/*select (non-native) prop sorgt für overlay und stören der Layouts*/} {/* Lösung von https://stackblitz.com/run?file=Demo.tsx Zeile 47 - 64)*/}
                                <option value='' disabled></option>
                                {genderList.map((gender) => <option value={gender} key={gender}>{gender}</option>)}
                        </TextfieldLong>  
                    </Line>
                    <Line>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <CostumDatePicker inputRef={domElement => inputRefs.current.push(domElement as HTMLInputElement)} onChange={(newDate) => handleDateChange(newDate)} name='birthday' slotProps={{textField: {helperText: "birthday", variant: "standard", fullWidth: true}}} sx={{'& .MuiInputBase-input': emptyValueEffect[4]}} key={"CostumDatePicker"} maxDate={dayjs(Date.now() - 31556926 * 18 * 1000)} minDate={dayjs("1950-01-01T00:00:00.000") }
                            // maxDate={dayjs.unix(Date.now() - 31556926)}
                            />
                        </LocalizationProvider> 
                    </Line>
                    <Line>
                        <TextfieldLong inputRef={domElement => inputRefs.current.push(domElement as HTMLInputElement)} name='username' helperText='username*' value={formData.username} onChange={handleChange} sx={{'& .MuiInputBase-input': emptyValueEffect[5]}} key='textfield-username'/>
                    </Line>
                    <Line>
                    <TextfieldLong inputRef={domElement => inputRefs.current.push(domElement as HTMLInputElement)} name= 'password' helperText ='password*' value={formData.password} onChange={handleChange} sx={{'& .MuiInputBase-input': emptyValueEffect[6]}} key='textfield-password'/>
                    </Line>
                    <Line>
                    <TextfieldLong inputRef={domElement => inputRefs.current.push(domElement as HTMLInputElement)} name='passwordConfirm' helperText='confirm password*' value={formData.passwordConfirm} onChange={handleChange} sx={{'& .MuiInputBase-input': emptyValueEffect[7]}} key='textfield-username'/>
                    </Line>
                    <Line>
                        <RegisterButton type='submit' key='Button-register'>
                            Create Account
                        </RegisterButton>
                        <TermsWrapper>
                            <Checkbox inputRef={domElement => inputRefs.current.push(domElement as HTMLInputElement)} checked={check} onChange={handleCheckboxChange} sx={emptyValueEffect[8]} />
                            <TypoBody2>I have read and agree to the Terms of Use</TypoBody2>
                        </TermsWrapper>
                    </Line>
                </form>
            </FormContainer>

        </>
    )
}


export default RegisterGuestForm
