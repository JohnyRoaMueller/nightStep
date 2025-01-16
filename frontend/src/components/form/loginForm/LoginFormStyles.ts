import theme from "../../../theme/theme";


export const loginFormContainer = {

    display: 'flex',
    flexDirection: 'column',

    zIndex: '1',

    paddingTop: '15%',
    paddingRight: '15%',
    paddingLeft: '15%',

    alignItems: 'center',

    borderTop: '0.2em solid',
    borderLeft: '0.2em solid',
    borderRight: '0.2em solid',
    borderRadius: '30px 30px 0px 0px',


    // theme styling
    backgroundColor: (theme) => theme.palette.background.paper
}

export const LoginFormTypoBox = {

    display: 'flex',
    flexDirection: 'column',

    paddingnBottom: '1100px',

    textAlign: 'center',
}