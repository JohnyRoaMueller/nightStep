import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { registerHostFormButton, registerHostFormButtonTypography, registerHostFormContainer, registerHostFormHeaderBox, registerHostFormHeaderTypo } from './registerHostFormStyles'




function RegisterHostForm() {

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
        userrole: "HOST"
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

        fetch('http://localhost:8080/register',
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
        

    return (
        <Box id="RegisterGuest-FormContainer" sx={registerHostFormContainer}>
            <Box sx={registerHostFormHeaderBox}>
            <Typography sx={registerHostFormHeaderTypo}>Show Berlin your club and reach the community with your events.</Typography>
            <Typography sx={registerHostFormHeaderTypo}>Register as a host!</Typography>
            </Box>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <TextField label="Anrede" name="anrede" variant="standard" onChange={handleChange} fullWidth></TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            { /* leeres grid */ }
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField label="Vorname" name="vorname" variant="standard" onChange={handleChange} fullWidth></TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField label="Nachname" name="nachname" variant="standard" onChange={handleChange} fullWidth></TextField>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <TextField label="Straße" name="Straße" variant="standard" onChange={handleChange} fullWidth></TextField>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField label="Hausnummer" name="Hausnummer" variant="standard" onChange={handleChange} fullWidth></TextField>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField label="Rufnummer" name="rufnummer" variant="standard" onChange={handleChange} fullWidth></TextField>
                        </Grid>

                        <hr style={{ border: "5px solid", width: "90%", marginTop: "20px" }}></hr>

                        <Grid item xs={12} sm={3}>
                            {/* leeres grid */ }
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField label="E-Mail" name="rufnummer" variant="standard" onChange={handleChange} fullWidth></TextField>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            {/* leeres grid */ }
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            {/* leeres grid */ }
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField label="Password" name="rufnummer" variant="standard" onChange={handleChange} fullWidth></TextField>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            {/* leeres grid */ }
                        </Grid>
                        <Grid item xs={12} sm={12}
                            sx={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                                <Button sx={registerHostFormButton} type="submit">
                                    <Typography sx={registerHostFormButtonTypography}>register</Typography>
                                </Button>
                        </Grid>
                    </Grid>
                </form>
        </Box>
    )
}


export default RegisterHostForm
