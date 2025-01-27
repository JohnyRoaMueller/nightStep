import { height } from "@mui/system"

export const FullscreenFlexBox = {

    height: '100vh',
    width: '100vw',

    display: 'flex',               // Aktiviert Flexbox

    flexDirection: 'column',

    boxSizing: 'border-box',

    alignItems: 'center',

    overflow: 'auto',

    // theme styling 
    backgroundColor: 'black'
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
    flexGrow: 1,         // Der Footer bleibt am unteren Ende

    position: 'relative',

    paddingBottom: '2em',

    // theme styling
    background: (theme) => theme.palette.background.default,

    '@media (min-width: 600px)': {
        width: '75%'
    },
}