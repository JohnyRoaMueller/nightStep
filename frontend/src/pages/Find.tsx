import { Box, ThemeProvider } from "@mui/material"
import Appbar from "../components/ui/appbar/Appbar"
import { VerticalCentered } from "../styles/containerStyles/VerticalCenteredBox"
import { FullscreenFlexBox } from "../styles/containerStyles/FullscreenFlexBox"
import theme from "../theme/theme"
import Footer from "../components/ui/footer/Footer"
import ContactForm from "../components/form/contactForm/ContactForm"


export default function Find() {
    return (
        <ThemeProvider theme={theme}>
        <Box id="Find-FullscreenFlexBox" sx={FullscreenFlexBox}>
          <Appbar/>
          <Box id="Find-VerticalCentered" sx={VerticalCentered}>
            {/* ↓↓↓ My Content ↓↓↓ */}
            <Box>
                My Content Find
            </Box>
            {/* ↑↑↑ My Content ↑↑↑ */}
          </Box>
          <Footer/>
        </Box>
      </ThemeProvider>
    )
}


