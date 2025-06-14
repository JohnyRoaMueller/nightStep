import { useRef, useState } from 'react'
import Roles from '../../../../enums/Roles'
import { HeaderWrapper, TermsWrapper, WarningBox } from './registerGuestForm.Styles'
import { Checkbox, Fade } from '@mui/material'
import { TypoBody2, TypoH1, TypoWarning } from '../../../styled-components/styledTypographie'
import { boxShadowAnimation } from './registerGuestForm.Styles'
import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { EmptyValueEffectType, GuestFormData, preventWrongInputType, validateGuestForm } from '../../../functions/validation/guestFormValidation'
import { useNavigate } from 'react-router-dom'
import BaseForm from '../../../common/form/baseForm/BaseForm'
import FormTextField from '../../../common/form/formTextField/FormTextField'
import LocalizedDatePicker from '../../../common/form/datePicker/DatePicker'
import FormHeader from '../../../common/form/formHeader/FormHeader'
import PrimaryButton from '../../../common/button/primaryButton/PrimaryButton'
function RegisterGuestForm() {

    const navigateTo = useNavigate()

    const [check, setCheck] = useState<boolean>(false)

    const [popUpFlag, setPopUpFlag] = useState<boolean>(false)

    const [warningMessage, setWarningMessage] = useState<string>("")

    const [guestFormData, setFormData] = useState<GuestFormData>({
        firstname: "",
        lastname: "",
        email: "",
        gender: "",
        birthday: "",
        username: "",
        password: "",
        confirmPassword: "",
        role: Roles.GUEST
    })

    const inputRefs = useRef<(HTMLInputElement | HTMLButtonElement | HTMLDivElement | HTMLOptionElement)[]>([])

    const [emptyValueEffect, setEmptyValueEffect] = useState<EmptyValueEffectType[]>(
        Array(25).fill({ animation: "" }) // 8 positions to set the effect independent from each other
    )

 
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const name = event.target.name
        const value = event.target.value

        setFormData((prevData) => ({
            ...prevData,
            [name]: preventWrongInputType(name, value),
        }));
    }


    const handleCheckboxChange = () => setCheck(prevCheck => !prevCheck)

    const handleDateChange = (date: Dayjs | null) => {
        setFormData((prevData) => ({
            ...prevData,
            birthday: date?.format('YYYY-MM-DD') || null
        }));
    }

    console.log(emptyValueEffect)
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const isValid = await validateGuestForm({formData: guestFormData, setEmptyValueEffect, setPopUpFlag, setWarningMessage, boxShadowAnimation, inputRefs, check})
        if (!isValid) return

            const apiUrl =import.meta.env.VITE_APP_API_URL
            fetch(`${apiUrl}/register/guest`,
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify(guestFormData)
                }
            )



            setFormData({
                firstname: "",
                lastname: "",
                email: "",
                gender: "",
                birthday: "",
                username: "",
                password: "",
                confirmPassword: "",
                role: Roles.GUEST
            })
            setCheck(false)

            navigateTo("/login")

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
        <HeaderWrapper>
            <TypoH1>REGISTRATION</TypoH1>
        </HeaderWrapper>
        
        <BaseForm onSubmit={handleSubmit}>

            <FormHeader>BASE</FormHeader>

            <FormTextField inputRef={domElement => inputRefs.current.push(domElement as HTMLInputElement)} name='firstname'helperText='firstname*' value={guestFormData.firstname} onChange={handleChange} sx={{'& .MuiInputBase-input': emptyValueEffect[0]}} key='textfield-firstname'/> {/** using inputRef instead of ref fixed the problem (wrapped htmlElement inside StyledElement cannot be detected) */}

            <FormTextField inputRef={domElement => inputRefs.current.push(domElement as HTMLInputElement)} name='lastname' helperText='lastname*' value={guestFormData.lastname} onChange={handleChange} sx={{'& .MuiInputBase-input': emptyValueEffect[1]}} key='textfield-lastname'/>
          
            <FormTextField inputRef={domElement => inputRefs.current.push(domElement as HTMLInputElement)} name='email' helperText='email*' value={guestFormData.email} onChange={handleChange} sx={{'& .MuiInputBase-input': emptyValueEffect[2]}} key='textfield-email'/>
          
            <FormHeader>EVENT RELATED</FormHeader>
         
            <FormTextField inputRef={domElement => inputRefs.current.push(domElement as HTMLOptionElement)} name='gender' helperText='gender' select slotProps={{select: {native: true}}} value={guestFormData.gender} onChange={handleChange} sx={{'& .MuiInputBase-input': emptyValueEffect[3]}} key='textfield-gender'> {/*select (non-native) prop sorgt für overlay und stören der Layouts*/} {/* Lösung von https://stackblitz.com/run?file=Demo.tsx Zeile 47 - 64)*/}
                <option value='' disabled></option>
                {genderList.map((gender) => <option value={gender} key={gender}>{gender}</option>)}
            </FormTextField>  
         
            <LocalizedDatePicker inputRef={domElement => inputRefs.current.push(domElement as HTMLInputElement)} onChange={handleDateChange} name='birthday' helperText='birthday' format='YYYY-MM-DD' sx={{'& .MuiInputBase-input': emptyValueEffect[4]}} key={"CostumDatePicker"} maxDate={dayjs(Date.now() - 31556926 * 18 * 1000)} minDate={dayjs("1950-01-01T00:00:00.000") }></LocalizedDatePicker> {/** maxDate={dayjs.unix(Date.now() - 31556926)} */}
         
            <FormTextField inputRef={domElement => inputRefs.current.push(domElement as HTMLInputElement)} name='username' helperText='username*' value={guestFormData.username} onChange={handleChange} sx={{'& .MuiInputBase-input': emptyValueEffect[5]}} key='textfield-username'/>
          
            <FormTextField inputRef={domElement => inputRefs.current.push(domElement as HTMLInputElement)} name= 'password' type='password' helperText ='password*' value={guestFormData.password} onChange={handleChange} sx={{'& .MuiInputBase-input': emptyValueEffect[6]}} key='textfield-password'/>
         
            <FormTextField inputRef={domElement => inputRefs.current.push(domElement as HTMLInputElement)} name='confirmPassword' type='password' helperText='confirm password*' value={guestFormData.confirmPassword} onChange={handleChange} sx={{'& .MuiInputBase-input': emptyValueEffect[7]}} key='textfield-username'/>
                    
            <TermsWrapper>
                <Checkbox inputRef={domElement => inputRefs.current.push(domElement as HTMLInputElement)} checked={check} onChange={handleCheckboxChange} sx={emptyValueEffect[20]} /> {/** should be index 8,  */}
                <TypoBody2>I have read and agree to the Terms of Use</TypoBody2>
            </TermsWrapper>                     
                    
            <PrimaryButton onClick={handleSubmit} type='submit' key='Button-register'>
                Create Account
                <Fade in={popUpFlag} timeout={{enter: 300, exit: 300}}>
                    <WarningBox>
                        <TypoWarning>{warningMessage}</TypoWarning>
                    </WarningBox>
                </Fade>
            </PrimaryButton>             
        </BaseForm>
        </>
    )
}


export default RegisterGuestForm
