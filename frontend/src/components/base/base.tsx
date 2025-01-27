import { ThemeProvider } from "@emotion/react";
import theme from "../../theme/theme";
import { Box } from "@mui/material";
import { FullscreenFlexBox, VerticalCentered } from "./baseStyles";

import Appbar from "./appbar/Appbar";
import Footer from "./footer/Footer";



interface BaseProps {
    children: React.ReactNode;
}


function Base({children}: BaseProps) {
    return (
        <>
        <ThemeProvider theme={theme}>
            <Box id="FullscreenFlexBox" sx={FullscreenFlexBox}>
                    <Box id="VerticalCentered" sx={VerticalCentered}>
                        <Appbar/>
                        {children}
                    </Box>
                    <Footer/>
            </Box>
        </ThemeProvider>
        </>
    )
}


export default Base