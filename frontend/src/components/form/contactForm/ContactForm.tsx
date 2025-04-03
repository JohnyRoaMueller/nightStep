import { useState } from 'react'
import { CallToMessage, FormContainer, Line, SubmitButton, TextfieldLong } from './ContactForm.Styled'
import { TypoH1 } from '../../../styled-components/styledTypographie'




function ContactForm() {

    type FormDataType = {
        company: string,
        name: string,
        email: string,
        subject: string,
        message: string
    }
    const [formData, setFormData] = useState<FormDataType>({
        company: "",
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
            resetData[key as keyof FormDataType] = ""
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
