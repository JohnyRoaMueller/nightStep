import { Box, Button, TextField, Typography } from "@mui/material";
import { loginFormContainer, loginFormTextField, LoginFormTypoBox } from "./loginFormStyles";
import { Link, useLocation } from "react-router-dom";
import { createContext, useContext, useState } from "react";
import { Token } from "@mui/icons-material";

interface loginDataType {
    email: string,
    password: string
}

function LoginForm() {

    const location = useLocation()

    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
    })

    const UserContext = createContext(loginData)

    const [userdata, setUserdata] = useState("")

    const handleChange = (event) => {
        const { name, value } = event.target
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
        console.log(loginData)
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("loginData JSON: ", loginData)
        console.log("loginData String:", JSON.stringify(loginData))

        fetch("http://192.168.178.28:8080/api/login", { 
            method: "POST",
            body: JSON.stringify(loginData),
            headers: {
                "Content-type": "application/json",
                "Accept": "*",
                    },
        })
        .then((response) => {
            if (response.ok) {
                console.log("response:", response)
                return response.text();
            }
        })
        .then((jwtToken) => {
            console.log("jwtToken", jwtToken)
            localStorage.setItem("jwtToken", jwtToken)
        })
        .then(data => {
            const jwtToken = localStorage.getItem('jwtToken');

            console.log("zweiter fetch")
        
            return fetch('http://192.168.178.28:8080/api/userdata', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Authorization': 'Bearer ' + jwtToken // Include the jwtToken in the Authorization header
                }
            })
        })
        .then(async (userdata) => {
            const userdataString = await userdata.text()
            setUserdata(userdataString)
        })

        const resetData = { ...loginData }
        Object.keys(loginData).forEach(key => {
            resetData[key] = "";
        });
        setLoginData(resetData)
    }




    return (
        <Box id={"LoginFormContainer"} sx={loginFormContainer}>
            <form onSubmit={handleSubmit}>
                <Box id={"LoginFormTypoBox"} sx={LoginFormTypoBox}>
                    <TextField label="Benutzername" variant="standard" name="username" value={loginData.username} onChange={handleChange}></TextField>
                    <TextField label="Password" variant="standard" name="password" value={loginData.password} onChange={handleChange}></TextField>
                </Box>
                <Box sx={{paddingTop: '10%'}}>

                        <Button type="submit">
                            <Typography>
                                login
                            </Typography>
                        </Button>

                </Box>
                <Box>
                    <Link to={location.pathname === "/register" ? "#" : "/register"} 
                          onClick={() => {if (location.pathname === "/register") document.getElementById("login-register-transition-appbar-clear-icon")?.click()}}>
                        <Button sx={{marginTop: '15%'}}>
                            <Typography>
                                sign up here
                            </Typography>
                            <Typography>
                                {userdata}
                            </Typography>
                        </Button>
                    </Link>
                </Box>

            </form>
        </Box>
)}

export default LoginForm

