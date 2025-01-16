import { height, minHeight, minWidth, width } from "@mui/system"
import theme from "../../theme/theme"
import zIndex from "@mui/material/styles/zIndex"


export const FullscreenFlexBox = {

    height: '100vh',
    width: '100vw',

    display: 'flex',               // Aktiviert Flexbox

    flexDirection: 'column',

    boxSizing: 'borderbox',

    alignItems: 'center',

    overflow: 'auto',

    // theme styling 
    backgroundColor: 'black'
}