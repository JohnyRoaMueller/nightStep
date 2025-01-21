import { ThemeProvider } from "@emotion/react";
import theme from "../theme/theme";
import { Box, Button} from "@mui/material";

import { FullscreenFlexBox } from "../styles/containerStyles/FullscreenFlexBox";
import Appbar from "../components/ui/appbar/Appbar";
import { VerticalCentered } from "../styles/containerStyles/VerticalCenteredBox";
import Footer from "../components/ui/footer/Footer";
import { Link } from "react-router-dom";
import RegisterGuestForm from "../components/form/registerGuestForm/RegisterGuestForm";



export default function Test() {


    return (
        <ThemeProvider theme={theme}>
        <Box id="Registration-FullscreenFlexBox" sx={FullscreenFlexBox}>
          <Appbar/>
          <Box id="Registration-VerticalCentered" sx={VerticalCentered}>
            {/* ↓↓↓ My Content ↓↓↓ */}
            <Box>
                my RegistrationGuest content
            </Box>
            <RegisterGuestForm/>
            {/* ↑↑↑ My Content ↑↑↑ */}
          </Box>
          <Footer/>
        </Box>
      </ThemeProvider>
    )
}