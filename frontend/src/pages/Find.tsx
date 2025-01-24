import { Box, ThemeProvider } from "@mui/material"
import Appbar from "../components/base/appbar/Appbar"
import theme from "../theme/theme"
import Footer from "../components/base/footer/Footer"
import ContactForm from "../components/form/contactForm/ContactForm"
import Base from "../components/base/base"


export default function Find() {
    return (
      <Base children={
        <>
            {/* ↓↓↓ My Content ↓↓↓ */}
            <Box>
                My Content Find
            </Box>
            {/* ↑↑↑ My Content ↑↑↑ */}
        </>
        }>
        </Base>
    )
}


