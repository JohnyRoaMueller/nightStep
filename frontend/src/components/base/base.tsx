import { ThemeProvider } from "@emotion/react";
import theme from "../../theme/theme";
import { Box } from "@mui/material";
import { FullscreenFlexBox, VerticalCentered } from "./baseStyles";
import Footer from "./footer/Footer";
import { Appbar } from "./appbar/Appbar";




interface BaseProps {
    children: React.ReactNode;
}


function Base({children}: BaseProps) {
    return (
        <>
        <ThemeProvider theme={theme}>
            <Box id="FullscreenFlexBox" sx={FullscreenFlexBox}>
                <Appbar/>
                <Box id="VerticalCentered" sx={VerticalCentered}>
                    {children}
                </Box>
                <Footer/>
            </Box>
        </ThemeProvider>
        </>
    )
}


export default Base