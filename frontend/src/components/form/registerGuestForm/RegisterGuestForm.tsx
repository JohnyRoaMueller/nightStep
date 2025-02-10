import { useState } from 'react'
import Roles from '../../../../enums/Roles'
import { CategoryHeader, FormContainer, FormTextfield, Line, RegisterButton, TextfieldLong, TextfieldMedium, TextfieldShort } from './registerGuestForm.Styles'
import { Menu, MenuItem, NativeSelect, Select, TextField } from '@mui/material'
import { TypoH1, TypoH2 } from '../../../styled-components/styledTypographie'






function RegisterGuestForm() {

    const [formData, setFormData] = useState({
        salutation: "",
        firstname: "",
        lastname: "",
        street: "",
        housenumber: "",
        phonenumber: "",

        email: "",
        password: "",

        role: Roles.GUEST
    })


    const handleChange = (event) => {
        
        console.log(event)
        console.log(event.target)
        const {name, value} = event.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log("value changed")
        console.log(formData)
    }

    
    const handleSubmit = (event) => {

        console.log("submit!!")


        console.log(formData)

        fetch('http://10.0.2.24:8080/api/register',
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(formData)
            }
        )


        const resetData = { ...formData }
        Object.keys(resetData).forEach(key => {
            resetData[key] = ""
        })
        setFormData(resetData)

        event.preventDefault()
    }
        

    const genderList = [
        "male",
        "female",
        "divers"
    ]


    return (
        <>
            <FormContainer>
                <form typeof='submit'>
                    <Line>
                        <CategoryHeader><TypoH2>BASE</TypoH2></CategoryHeader>
                    </Line>
                    <Line>
                        <TextfieldLong name='firstname' helperText='firstname' variant='standard' key='textfield-firstname'/>
                    </Line>
                    <Line>
                        <TextfieldLong name='lastname' helperText='lastname' variant='standard' key='textfield-lastname'/>
                    </Line>
                    <Line>
                        <TextfieldLong name='email' helperText='email' variant='standard' key='textfield-email'/>
                    </Line>
                    <Line>
                        <TextfieldLong name='emailConfirm' helperText='confirm email' variant='standard' key='textfield-confirmEmail' />
                    </Line>
                    <Line>
                        <CategoryHeader><TypoH2>EVENT RELATED</TypoH2></CategoryHeader>
                    </Line>
                    <Line>
                        <TextfieldMedium name='gender' helperText='gender' variant='standard' select slotProps={{select: {native: true}}} key='textfield-gender'> {/*select (non-native) prop sorgt für overlay und stören der Layouts*/} {/* Lösung von https://stackblitz.com/run?file=Demo.tsx Zeile 47 - 64)*/}
                                {genderList.map((gender) => <option value={gender}>{gender}</option>)}
                        </TextfieldMedium>
                        <TextfieldShort name='day' helperText='day' key='textfield-day'/>
                        <TextfieldShort name='month' helperText='month' key='textfield-month'/>
                        <TextfieldShort name='year' helperText='year' key='textfield-year'/>
                    </Line>
                    <Line>
                        <TextfieldMedium name='username' helperText='username' key='textfield-username'/>
                    </Line>
                    <Line>
                        <TextfieldMedium name= 'password' helperText ='password' key='textfield-password'></TextfieldMedium>
                        <RegisterButton type='submit' onSubmit={handleSubmit} key='Button-register'>
                            Create Account
                        </RegisterButton>
                    </Line>
                </form>
            </FormContainer>
        </>
    )
}


export default RegisterGuestForm
