import { Box, Button, TextField, Typography } from "@mui/material";
import { FormWrapper, LoginBox, LoginButton, LoginContainer, LoginFormContainer, loginFormContainer, loginFormTextField, LoginFormTypoBox, LoginTextField, SignInBox, SignInButton } from "./LoginForm.Styles";
import { Link, useLocation } from "react-router-dom";
import { createContext, useContext, useState } from "react";
import { Token } from "@mui/icons-material";
import { TypoBody1, TypoBody2, TypoH1, TypoH2 } from "../../../styled-components/styledTypographie";
import { CleanLink } from "../../../styled-components/styledLink";

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

        fetch(//"http://192.168.178.28:8080/api/login"
                "http://10.0.2.24:8080/api/login", { 
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

            <form onSubmit={handleSubmit}>
                <FormWrapper>
                    <LoginBox>
                        <LoginTextField label="Benutzername" variant="standard" name="username" value={loginData.username} onChange={handleChange}></LoginTextField>
                        <LoginTextField label="Password" variant="standard" name="password" value={loginData.password} onChange={handleChange}></LoginTextField>
                        <LoginButton type="submit"><TypoBody1>Login</TypoBody1></LoginButton>
                    </LoginBox>
                    <hr></hr>
                    <SignInBox>
                        <TypoH2>No account yet?</TypoH2>
                        <CleanLink to={"/register"}>
                            <SignInButton>sign in</SignInButton>
                        </CleanLink>
                    </SignInBox>
                </FormWrapper>
            </form>

)}

export default LoginForm



{/*  <Link to={location.pathname === "/register" ? "#" : "/register"} onClick={() => {if (location.pathname === "/register") document.getElementById("login-register-transition-appbar-clear-icon")?.click()}}> </Link> */}