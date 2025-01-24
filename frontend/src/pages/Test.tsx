import { ThemeProvider } from "@emotion/react";
import theme from "../theme/theme";
import { Box } from "@mui/material";
import Appbar from "../components/base/appbar/Appbar";
import Footer from "../components/base/footer/Footer";
import { useState } from "react";
import Base from "../components/base/base";



export default function Test() {


    return (
      <Base children={
        <>
                {/* ↓↓↓ My Content ↓↓↓ */}
                <Box>
                    my test content
                </Box>
                {/* ↑↑↑ My Content ↑↑↑ */}
                </>
        }>
        </Base>
    )
}