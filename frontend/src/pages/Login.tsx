import { Box, Button, TextField, ThemeProvider, Typography } from "@mui/material"
import Appbar from "../components/ui/appbar/Appbar"
import { FullscreenFlexBox } from "../styles/containerStyles/FullscreenFlexBox"
import { VerticalCentered } from "../styles/containerStyles/VerticalCenteredBox"
import theme from "../theme/theme"
import Footer from "../components/ui/footer/Footer"
import LoginForm from "../components/form/loginForm/LoginForm"
import { Link } from "react-router-dom"


export default function Login() {
    return (
        <ThemeProvider theme={theme}>
        <Box id="Login-FullscreenFlexBox" sx={FullscreenFlexBox}>
          <Appbar/>
          <Box id="Login-VerticalCentered" sx={VerticalCentered}>
            {/* ↓↓↓ My Content ↓↓↓ */}
            <Box>
                My Content Login
            </Box>
            <LoginForm></LoginForm>
            {/* ↑↑↑ My Content ↑↑↑ */}
          </Box>
          <Footer/>
        </Box>
      </ThemeProvider>
    )
}