import { Box, ThemeProvider } from "@mui/material"
import background from "../assets/pics/pageNotFound.jpg"
import Appbar from "../components/base/appbar/Appbar"
import Footer from "../components/base/footer/Footer"
import theme from "../theme/theme"
import Base from "../components/base/base"


export default function NoMatch() {
    return (
      <Base children={
        <>
            {/* ↓↓↓ My Content ↓↓↓ */}
            <Box>
                My Content NoMatch
            </Box>
            {/* ↑↑↑ My Content ↑↑↑ */}
            </>
            }>
            </Base>
           )
}