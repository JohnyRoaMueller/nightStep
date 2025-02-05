import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { registerGuestFormButton, registerGuestFormButtonTypography, registerGuestFormContainer, registerGuestFormHeaderBox, registerGuestFormHeaderTypo } from './registerGuestFormStyle'
import Roles from '../../../../enums/Roles'



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
        

    return (
        <Box id="RegisterGuest-FormContainer" sx={registerGuestFormContainer}>
            <Box sx={registerGuestFormHeaderBox}>
            <Typography sx={registerGuestFormHeaderTypo}>Stay up-to-date with the Berlin club scene and get informed about upcoming events.</Typography>
            <Typography sx={registerGuestFormHeaderTypo}>Register as a guest!</Typography>
            </Box>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <TextField label="Anrede" name="salutation" variant="standard" value={formData.salutation} onChange={handleChange} fullWidth></TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            { /* leeres grid */ }
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField label="Vorname" name="firstname" variant="standard" value={formData.firstname} onChange={handleChange} fullWidth></TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField label="Nachname" name="lastname" variant="standard" value={formData.lastname} onChange={handleChange} fullWidth></TextField>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <TextField label="Straße" name="street" variant="standard" value={formData.street} onChange={handleChange} fullWidth></TextField>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField label="Hausnummer" name="housenumber" variant="standard" value={formData.housenumber} onChange={handleChange} fullWidth></TextField>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField label="Rufnummer" name="phonenumber" variant="standard" value={formData.phonenumber} onChange={handleChange} fullWidth></TextField>
                        </Grid>

                        <hr style={{ border: "5px solid", width: "90%", marginTop: "20px" }}></hr>

                        <Grid item xs={12} sm={3}>
                            {/* leeres grid */ }
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField label="E-Mail" name="email" variant="standard" value={formData.email} onChange={handleChange} fullWidth></TextField>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            {/* leeres grid */ }
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            {/* leeres grid */ }
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField label="Password" name="password" variant="standard" value={formData.password} onChange={handleChange} fullWidth></TextField>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            {/* leeres grid */ }
                        </Grid>
                        <Grid item xs={12} sm={12}
                            sx={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                                <Button sx={registerGuestFormButton} type="submit">
                                    <Typography sx={registerGuestFormButtonTypography}>register</Typography>
                                </Button>
                        </Grid>
                    </Grid>
                </form>
        </Box>
    )
}


export default RegisterGuestForm
