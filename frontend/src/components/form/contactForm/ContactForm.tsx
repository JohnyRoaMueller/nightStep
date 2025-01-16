import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import zIndex from '@mui/material/styles/zIndex'
import { ContactFormButton, ContactFormButtonTypography, ContactFormContainer, ContactFormHeader, ContactFormHeaderBox, ContactFormHeaderTypo, FormGridContainer } from './ContactFormStyles'
import { useState } from 'react'




function ContactForm() {

    const [formData, setFormData] = useState({
        firma: "",
        anrede: "",
        titel: "",
        vorname: "",
        nachname: "",
        email: "",
        rufnummer: "",
        betreff: "",
        nachricht: "",
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
        console.log(formData.firma)
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
        <Box id="Contact-FormContainer" sx={ContactFormContainer}>
            <Box sx={ContactFormHeaderBox}>
            <Typography sx={ContactFormHeaderTypo}>Got a question or just want to say hi?</Typography>
            <Typography sx={ContactFormHeaderTypo}>Drop us a message, and we’ll get back to you soon!</Typography>
            </Box>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <TextField label="Firma" name="firma" variant="standard" onChange={handleChange} fullWidth></TextField>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <TextField label="Anrede" name="anrede" variant="standard" onChange={handleChange} fullWidth></TextField>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <TextField label="Titel" name="titel" variant="standard" onChange={handleChange} fullWidth></TextField>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <TextField label="Vorname" name="vorname" variant="standard" onChange={handleChange} fullWidth></TextField>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <TextField label="Nachname" name="nachname" variant="standard" onChange={handleChange} fullWidth></TextField>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <TextField label="E-Mail" name="email" variant="standard" onChange={handleChange} fullWidth></TextField>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <TextField label="Rufnummer" name="rufnummer" variant="standard" onChange={handleChange} fullWidth></TextField>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField label="Betreff" name="betreff" variant="standard" onChange={handleChange} fullWidth></TextField>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField label="Nachricht" name="nachricht" variant="outlined" onChange={handleChange} fullWidth multiline rows={8}></TextField>
                        </Grid>
                        <Grid item xs={12} sm={12}
                            sx={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                                <Button sx={ContactFormButton} type="submit">
                                    <Typography sx={ContactFormButtonTypography}>submit</Typography>
                                </Button>
                        </Grid>
                    </Grid>
                </form>
        </Box>
    )
}


export default ContactForm
