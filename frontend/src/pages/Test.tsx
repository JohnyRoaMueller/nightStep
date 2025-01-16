import { ThemeProvider } from "@emotion/react";
import theme from "../theme/theme";
import { Box } from "@mui/material";
import { FullscreenFlexBox } from "../styles/containerStyles/FullscreenFlexBox";
import Appbar from "../components/ui/appbar/Appbar";
import { VerticalCentered } from "../styles/containerStyles/VerticalCenteredBox";
import Footer from "../components/ui/footer/Footer";
import { useState } from "react";

export default function Test() {



    return (
        <ThemeProvider theme={theme}>
        <Box id="Test-FullscreenFlexBox" sx={FullscreenFlexBox}>
          <Appbar/>
          <Box id="Test-VerticalCentered" sx={VerticalCentered}>
            {/* ↓↓↓ My Content ↓↓↓ */}
            <Box>
                my test content
            </Box>
            {/* ↑↑↑ My Content ↑↑↑ */}
          </Box>
          <Footer/>
        </Box>
      </ThemeProvider>
    )
}