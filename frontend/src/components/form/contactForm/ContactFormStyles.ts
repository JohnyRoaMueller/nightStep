import { colors } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import theme from "../../../theme/theme";




export const ContactFormContainer = {
    width: '40%',
    height: '80%',

    padding: '2%',

    zIndex: '1',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    flexDirection: 'column',

    border: '0.2em solid',
    borderRadius: '10%',
    
    // theme styling
    backgroundColor: (theme) => theme.palette.background.paper
}  

export const ContactFormButton = {
    backgroundColor : (theme) => theme.palette.primary.main,
}

export const ContactFormButtonTypography = {
    color: 'black'
}

export const ContactFormHeaderBox = {
    width: '90%',
    height: '10%',

    marginBottom: '5%',

    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
    textAlign: 'center',

    border: '0.2em solid',
    borderRadius: '2em',
    
    backgroundColor: (theme) => theme.palette.background.default
}

export const ContactFormHeaderTypo = {
    color: 'black'
}

