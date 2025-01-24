import { ThemeProvider } from "@emotion/react";
import theme from "../theme/theme";
import { Box, Button} from "@mui/material";

import Appbar from "../components/base/appbar/Appbar";
import Footer from "../components/base/footer/Footer";
import { Link } from "react-router-dom";
import RegisterHostForm from "../components/form/registerHostForm/RegisterHostForm";
import Base from "../components/base/base";



export default function Test() {


    return (
      <Base children={
        <>
            {/* ↓↓↓ My Content ↓↓↓ */}
            <Box>
                my RegistrationHost content
            </Box>
            <RegisterHostForm/>
            {/* ↑↑↑ My Content ↑↑↑ */}
            </>
            }>
            </Base>
    )
}