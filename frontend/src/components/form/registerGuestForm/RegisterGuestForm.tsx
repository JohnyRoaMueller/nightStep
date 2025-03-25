import { useEffect, useRef, useState } from 'react'
import Roles from '../../../../enums/Roles'
import { CategoryHeader, CostumDatePicker, EmptyValueOverlay, ErrorOverlay, FormContainer, Line, RegisterButton, TermsWrapper, TextfieldLong, TextfieldMedium, TextfieldShort } from './registerGuestForm.Styles'
import { Checkbox, inputAdornmentClasses, TextField } from '@mui/material'
import { TypoBody1, TypoBody2, TypoH2 } from '../../../styled-components/styledTypographie'
import { FormatLineSpacing, Label, Preview } from '@mui/icons-material'
import { boxShadowAnimation } from './registerGuestForm.Styles'
import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import customParseFormat from "dayjs/plugin/customParseFormat";
import { format } from 'path'





function RegisterGuestForm() {

    type CheckType = boolean
    const [check, setCheck] = useState<CheckType>(false)

    type InputEvent = React.ChangeEvent<HTMLInputElement>

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
    const [emptyValueEffect, setEmptyValueEffect] = useState<EmptyValueEffectType[]>([
        {animation: ""}, // input 1
        {animation: ""}, // input 2
        {animation: ""}, // input 3
        {animation: ""}, // input 4
        {animation: ""}, // input 5
        {animation: ""}, // input 6
        {animation: ""}, // input 7
        {animation: ""}  // input 8
    ])


    const handleChange = (event: InputEvent) => {

        console.log(event.target)

        const name = event.target.name
        let value = event.target.value

        if (name === 'firstname' || name === 'lastname') 
        {
            /** replacing everything that is not alphabetic
             * the ^ (caret) works here as a negation of the listing
             * -> everything that is not a-z or A-Z
             */
            value = value.replace(/[^a-zA-Z]/g, "")
        }

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }


    const onCheckboxChange = () => {
        if (!check) {
            setCheck(true)
        } else {
            setCheck(false)
        }
    }

    const [date, setDate] = useState<Dayjs>()
    const handleDateChange = (newDate: Dayjs) => {
        setDate(newDate)
        console.log(newDate.format('YYYY-MM-DD'))
        setFormData((prevData) => ({
            ...prevData,
            birthday: newDate.format('YYYY-MM-DD')
        }));
    }


    type ButtonEvent = React.MouseEvent<HTMLButtonElement>

    const handleSubmit = (event: ButtonEvent) => {
        event.preventDefault();

        /** checking if required fields got a value */
        for (let i = 0; i <= Object.values(formData).length - 1; i++) 
        {
            /** checking if required fields value is empty */
            if (Object.values(formData)[i] == "" && Object.keys(formData)[i] != "gender" && Object.keys(formData)[i] != "birthday") 
            {
                console.log("Object.keys(formData)[i]: ", Object.keys(formData)[i])
                setEmptyValueEffect((Prevdata) => {
                    const updateData = [...Prevdata]
                    updateData[i] =  {animation: `${boxShadowAnimation} 0.5s ease-out`}
                    console.log("updateData: ", updateData)
                    return updateData;
                })  
                setTimeout(() => {
                    setEmptyValueEffect((Prevdata) => {
                        const updateData = [...Prevdata]
                        updateData[i] =  {animation: ""}
                        return updateData;
                    })  
                }, 500)
                inputRefs.current[i].focus()
                console.log("inputRefs.current[i]: ", inputRefs.current[i])
                return;
            }
        }
        /** checking if checkbox is checked */        
        if (check == false)
        {
            setEmptyValueEffect((Prevdata) => {
                const updateData = [...Prevdata]
                updateData[8] =  {animation: `${boxShadowAnimation} 0.5s ease-out`}
                console.log("updateData: ", updateData)
                return updateData;
            })
            setTimeout(() => {
                setEmptyValueEffect((Prevdata) => {
                    const updateData = [...Prevdata]
                    updateData[8] =  {animation: ""}
                    return updateData;
                })  
            }, 500)
            inputRefs.current[8].focus()
            return;
        }




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
                            <Checkbox inputRef={domElement => inputRefs.current.push(domElement as HTMLInputElement)} checked={check} onChange={onCheckboxChange} sx={emptyValueEffect[8]} />
                            <TypoBody2>I have read and agree to the Terms of Use</TypoBody2>
                        </TermsWrapper>
                    </Line>
                </form>
            </FormContainer>

        </>
    )
}


export default RegisterGuestForm
