import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import zIndex from '@mui/material/styles/zIndex'
import { ContactFormButton, ContactFormButtonTypography, ContactFormContainer, ContactFormHeader, ContactFormHeaderBox, ContactFormHeaderTypo, FormGridContainer } from './ContactFormStyles'
import { useState } from 'react'
import { CallToMessage, DividingLine, FormContainer, Line, SubmitButton, TextfieldLong, TextfieldMedium, TextfieldShort } from './ContactForm.Styled'
import { TypoBody2, TypoH1, TypoH2 } from '../../../styled-components/styledTypographie'




function ContactForm() {

    const [formData, setFormData] = useState({
        company: "",
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    
    const handleSubmit = () => {
        alert(JSON.stringify(formData, null, 4))

        const resetData = { ...formData }
        Object.keys(resetData).forEach(key => {
            resetData[key] = ""
        })

        setFormData(resetData)
        console.log("reset")
    }
        

    return (
        <>
            <CallToMessage><TypoH1>Just leave a message</TypoH1></CallToMessage>
            <FormContainer>
                <form typeof='submit'>
                    <Line>
                        <TextfieldLong name='company' helperText='company' variant='standard' value={formData.company} onChange={handleChange}></TextfieldLong>
                    </Line>
                    <Line>
                        <TextfieldLong name='name' helperText='name' variant='standard' value={formData.name} onChange={handleChange}></TextfieldLong>
                    </Line>
                    <Line>
                        <TextfieldLong name='email' helperText='email' variant='standard' value={formData.email} onChange={handleChange}></TextfieldLong>
                    </Line>
                    <br></br>
                    <Line>
                        <TextfieldLong name='subject' helperText='subject' variant='filled' value={formData.subject} onChange={handleChange}></TextfieldLong>
                    </Line>
                    <Line>
                        <TextfieldLong name='message' helperText='message' variant='filled' value={formData.message} onChange={handleChange} multiline minRows={4}></TextfieldLong>
                    </Line>
                    <SubmitButton onClick={handleSubmit}>send message</SubmitButton>
                    
                </form>
            </FormContainer>
        </>
    )
}


export default ContactForm
