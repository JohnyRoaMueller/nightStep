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
        event.preventDefault()

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
    }
        

    const genderList = [
        "male",
        "female",
        "divers"
    ]


    return (
        <>
            <FormContainer>
                <Line>
                    <CategoryHeader><TypoH2>BASE</TypoH2></CategoryHeader>
                </Line>
               <Line>
               </Line>
               <Line>
                    <TextfieldLong helperText='firstname' variant='standard'/>
               </Line>
               <Line>
                    <TextfieldLong helperText='lastname' variant='standard'/>
               </Line>
               <Line>
                    <TextfieldLong helperText='email' variant='standard'/>
               </Line>
               <Line>
                    <TextfieldLong helperText='confirm email' variant='standard'/>
               </Line>
               <Line>
                    <CategoryHeader><TypoH2>EVENT RELATED</TypoH2></CategoryHeader>
                </Line>
                <Line>
                    <TextfieldShort helperText='gender' variant='standard' select slotProps={{select: {native: true}}}> {/*select (non-native) prop sorgt für overlay und stören der Layouts*/} {/* Lösung von https://stackblitz.com/run?file=Demo.tsx Zeile 47 - 64)*/}
                            {genderList.map((gender) => <option value={gender}>{gender}</option>)}
                    </TextfieldShort>
                </Line>
               <Line>
                    <TextfieldShort helperText='day'/><TextfieldShort helperText='month'/><TextfieldShort helperText='year'/>
               </Line>
               <Line>
                    <TextfieldMedium helperText='username'/>
                    <RegisterButton>
                        Create Account
                    </RegisterButton>
               </Line>
            </FormContainer>
        </>
    )
}


export default RegisterGuestForm
