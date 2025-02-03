import theme from "../../../theme/theme";


export const loginFormContainer = {
    /*
    width: '20%',
    height: '40%',
    */

    width: '100%',
    height: '100%',


    zIndex: '1',


    alignItems: 'center',

    border: '0.2em solid',
    borderRadius: '20%',

    display: 'flex', // Flexbox aktivieren
    flexDirection: 'column', // Elemente in eine Spalte anordnen
    justifyContent: 'center', // Vertikale Zentrierung

    '@media (max-width: 600px)': {
        width: '100%',         /* Formular nimmt 100% der Breite des Containers ein */
        height: 'auto',        /* Höhe passt sich dem Inhalt an */
        padding: '10%',        /* Padding für etwas Abstand */
        margin: '0',           /* Kein zusätzlicher Abstand */
        borderRadius: '8px',   /* Ecken abrunden */
      },

    // theme styling
    backgroundColor: theme.palette.background.paper
}

export const LoginFormTypoBox = {

    display: 'flex',
    flexDirection: 'column',

    paddingnBottom: '1100px',

    textAlign: 'center',
}