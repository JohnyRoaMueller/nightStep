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

export const VerticalCentered = {

    width: '90%',        // Feste Breite beibehalten

    bgcolor: 'grey.300',
    
    display: 'flex',      // Flexbox aktivieren
    flexDirection: 'column',
    justifyContent: 'center', /* Horizontal zentrieren */
    alignItems: 'center', /* Vertikal zentrieren */

    boxSizing: 'borderbox',
    paddingTop: '2em',

    minHeight: '100vh',  // Nimmt die volle Höhe des Bildschirms ein
    flexGrow: 1,         // Der Footer bleibt am unteren Ende

    positio: 'relative',


    // theme styling
    background: (theme) => theme.palette.background.default


}