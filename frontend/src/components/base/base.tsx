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
            <FullscreenFlexBox id="FullscreenFlexBox">
                <Appbar/>
                <VerticalCentered id="VerticalCentered">
                    {children}
                </VerticalCentered>
                <Footer/>
            </FullscreenFlexBox>
        </ThemeProvider>
        </>
    )
}


export default Base