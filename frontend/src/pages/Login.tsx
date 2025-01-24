import { Box, Button, TextField, ThemeProvider, Typography } from "@mui/material"
import Appbar from "../components/base/appbar/Appbar"
import theme from "../theme/theme"
import Footer from "../components/base/footer/Footer"
import LoginForm from "../components/form/loginForm/LoginForm"
import { Link } from "react-router-dom"
import Base from "../components/base/base"


export default function Login() {
    return (
      <Base children={
        <>
            {/* ↓↓↓ My Content ↓↓↓ */}
            <Box>
                My Content Login
            </Box>
            <LoginForm></LoginForm>
            {/* ↑↑↑ My Content ↑↑↑ */}
            </>
            }>
            </Base>
    )
}