

export const VerticalCentered = {

    width: '90%',        // Feste Breite beibehalten

    bgcolor: 'grey.300',
    
    display: 'flex',      // Flexbox aktivieren
    flexDirection: 'column',
    justifyContent: 'center', /* Horizontal zentrieren */
    alignItems: 'center', /* Vertikal zentrieren */

    boxSizing: 'borderbox',

    paddingTop: '2em',


    // theme styling
    background: (theme) => theme.palette.background.default


}