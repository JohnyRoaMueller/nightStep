import { Box, Button, Fade, TextField, Typography } from "@mui/material";
import { FormWrapper, LoginBox, LoginButton, LoginButtonWrapper, LoginFailedPopUp, LoginTextField, SignInBox, SignInButton } from "./LoginForm.Styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createContext, useContext, useState } from "react";
import { Token } from "@mui/icons-material";
import { TypoBody1, TypoBody2, TypoError, TypoH1, TypoH2, TypoWarning } from "../../../styled-components/styledTypographie";
import { CleanLink } from "../../../styled-components/styledLink";

interface loginDataType {
    email: string,
    password: string
}

function LoginForm() {

    const location = useLocation()
    const navigateTo = useNavigate();


    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
    })

    const [popUpFlag, setPopUpFlag] = useState(false)


    const handleFailedLogin = () => {
        setPopUpFlag(true)

        setTimeout(() => {
            setPopUpFlag(false)
        }, 1500)
    }

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

        fetch(//"http://192.168.178.28:8080/api/login", {
                 "http://10.0.2.24:8080/api/login", { 
            method: "POST",
            body: JSON.stringify(loginData),
            headers: {
                "Content-type": "application/json",
                "Accept": "*",
                    },
            credentials: "include"
        })
        .then(response => {
            if (response.ok) navigateTo("/home"); else handleFailedLogin()
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
                        <LoginTextField label="Username" variant="standard" name="username" value={loginData.username} onChange={handleChange}></LoginTextField>
                        <LoginTextField label="Password" variant="standard" name="password" value={loginData.password} onChange={handleChange}></LoginTextField>
                        <LoginButtonWrapper>
                            <LoginButton type="submit"><TypoBody1>Login</TypoBody1></LoginButton>
                            <Fade in={popUpFlag} timeout={{enter: 300, exit: 300}}>
                                <LoginFailedPopUp>
                                    <TypoError>LOGIN FAILED</TypoError>
                                </LoginFailedPopUp>
                            </Fade>
                        </LoginButtonWrapper>
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