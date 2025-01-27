import theme from "../../../theme/theme";


export const loginFormContainer = {
    width: '40%',
    height: '80%',

    zIndex: '1',

    padding: '50px',

    alignItems: 'center',

    border: '0.2em solid',
    borderRadius: '10%',

    display: 'flex', // Flexbox aktivieren
    flexDirection: 'column', // Elemente in eine Spalte anordnen
    justifyContent: 'center', // Vertikale Zentrierung
    height: '100%', // Vollständige Höhe einnehmen


    // theme styling
    backgroundColor: (theme) => theme.palette.background.paper
}

export const LoginFormTypoBox = {

    display: 'flex',
    flexDirection: 'column',

    paddingnBottom: '1100px',

    textAlign: 'center',
}