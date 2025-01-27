import { Box, Button, TextField, Typography } from "@mui/material";
import { loginFormContainer, loginFormTextField, LoginFormTypoBox } from "./loginFormStyles";
import { Link } from "react-router-dom";
import { useState } from "react";

interface loginDataType {
    email: string,
    password: string
}

function LoginForm() {

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("http://192.168.178.28:8080/api/login", {
            method: "POST",
            body: JSON.stringify(loginData)
        })
        console.log(JSON.stringify(loginData))
    }




    return (
        <Box id={"LoginFormContainer"} sx={loginFormContainer}>
            <form onSubmit={handleSubmit}>
                <Box id={"LoginFormTypoBox"} sx={LoginFormTypoBox}>
                    <TextField onChange={handleChange} label="Benutzername" variant="standard"></TextField>
                    <TextField label="Password" variant="standard"></TextField>
                </Box>
                <Box sx={{paddingTop: '10%'}}>

                        <Button type="submit">
                            <Typography>
                                login
                            </Typography>
                        </Button>

                </Box>
                <Box>
                    <Link to="/register">
                        <Button sx={{marginTop: '15%'}}>
                            <Typography>
                                sign up here
                            </Typography>
                        </Button>
                    </Link>
                </Box>

            </form>
        </Box>
)}

export default LoginForm