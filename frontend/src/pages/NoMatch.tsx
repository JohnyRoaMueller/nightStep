import { Box, ThemeProvider } from "@mui/material"
import background from "../assets/pics/pageNotFound.jpg"
import { FullscreenFlexBox } from "../styles/containerStyles/FullscreenFlexBox"
import { VerticalCentered } from "../styles/containerStyles/VerticalCenteredBox"
import Appbar from "../components/ui/appbar/Appbar"
import Footer from "../components/ui/footer/Footer"
import theme from "../theme/theme"


export default function NoMatch() {
    return (
        <ThemeProvider theme={theme}>
        <Box id="NoMatch-FullscreenFlexBox" sx={FullscreenFlexBox}>
          <Appbar/>
          <Box id="NoMatch-VerticalCentered" sx={VerticalCentered}>
            {/* ↓↓↓ My Content ↓↓↓ */}
            <Box>
                My Content NoMatch
            </Box>
            {/* ↑↑↑ My Content ↑↑↑ */}
          </Box>
          <Footer/>
        </Box>
      </ThemeProvider>
           )
}