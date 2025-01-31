import { height } from "@mui/system"
import theme from "../../theme/theme"

export const FullscreenFlexBox = {

    height: '100%',
    width: '100%',

    display: 'flex',               // Aktiviert Flexbox

    flexDirection: 'column',

    boxSizing: 'border-box',

    alignItems: 'center',

    flexGrow: 1,


    // theme styling 
    backgroundColor: (theme) => theme.palette.background.default,
}

export const VerticalCentered = {

    width: '100%',        // Feste Breite beibehalten

    bgcolor: 'grey.300',
    
    display: 'flex',      // Flexbox aktivieren
    flexDirection: 'column',
    alignItems: 'center', /* Vertikal zentrieren */

    boxSizing: 'border-box',
    
    height: 'auto',
     // Nimmt die volle Höhe des Bildschirms ein

    position: 'relative',

    paddingBottom: '2em',

    // theme styling
    background: (theme) => theme.palette.background.default,

    '@media (min-width: 600px)': {
        width: '75%'
    },
}