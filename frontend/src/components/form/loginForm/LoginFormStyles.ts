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

    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 

    '@media (max-width: 600px)': {
        width: '100%',         
        height: 'auto',        
        padding: '10%',        
        margin: '0',           
        borderRadius: '8px',   
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