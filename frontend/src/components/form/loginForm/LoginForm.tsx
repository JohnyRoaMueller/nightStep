import { Fade } from "@mui/material";
import { FormWrapper, LoginBox, LoginButton, LoginButtonWrapper, LoginFailedPopUp, LoginTextField, SignInBox, SignInButton } from "./LoginForm.Styles";
import { useLocation, useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import { TypoBody1, TypoError, TypoH2 } from "../../../styled-components/styledTypographie";
import { CleanLink } from "../../../styled-components/styledLink";

interface loginDataType {
    email: string,
    password: string
}

function LoginForm() {

    const location = useLocation()
    const navigateTo = useNavigate();

    type LoginDataType = {username: string, password: string}
    const [loginData, setLoginData] = useState<LoginDataType>({
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

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = event.target
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
        console.log(loginData)
    }


    const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

        console.log("loginData JSON: ", loginData)
        console.log("loginData String:", JSON.stringify(loginData))
        
        const apiUrl =import.meta.env.VITE_APP_API_URL

        const response = await fetch(`${apiUrl}/login`, {
            method: "POST",
            body: JSON.stringify(loginData),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Accept": "*",
                    },
            credentials: "include"
        })
        if (response.ok) 
        {
            const responseJSON = await response.json();
            if (responseJSON.role === "GUEST") 
            {
                navigateTo("/home")
                window.location.reload();
            }
            if (responseJSON.role === "HOST") 
            {
                navigateTo("/myvenue")
                window.location.reload();
            }

        }
        if (!response.ok) 
        {
            setPopUpFlag(true)
            setTimeout(() => {
                setPopUpFlag(false)
            }, 1000);

            const resetData= { ...loginData }
            Object.keys(loginData).forEach(key => {
                resetData[key as keyof LoginDataType] = "";
            });
            setLoginData(resetData)
        }
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
                        <CleanLink to={location.pathname === "/register" ? "#" : "/register"} onClick={() => {if (location.pathname === "/register") document.getElementById("login-register-transition-appbar-clear-icon")?.click()}}>
                            <SignInButton>sign in</SignInButton>
                        </CleanLink>
                    </SignInBox>
                </FormWrapper>
            </form>

)}

export default LoginForm



{/*  <Link to={location.pathname === "/register" ? "#" : "/register"} onClick={() => {if (location.pathname === "/register") document.getElementById("login-register-transition-appbar-clear-icon")?.click()}}> </Link> */}