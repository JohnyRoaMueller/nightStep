import { ThemeProvider } from "@emotion/react";
import theme from "../../theme/theme";
import { Box, BoxProps } from "@mui/material";
import { FullscreenFlexBox, VerticalCentered } from "./baseStyles";
import Footer from "./footer/Footer";
import { Appbar } from "./appbar/Appbar";




interface BaseProps extends BoxProps {
  children: React.ReactNode;
}


function Base({children, ...boxProps}: BaseProps) {
    return (
        <>
        <ThemeProvider theme={theme}>
            <FullscreenFlexBox {...boxProps} id="FullscreenFlexBox">
                <Appbar/>
                <VerticalCentered {...boxProps} id="VerticalCentered">
                    {children}
                </VerticalCentered >
                <Footer/>
            </FullscreenFlexBox>
        </ThemeProvider>
        </>
    )
}


export default Base