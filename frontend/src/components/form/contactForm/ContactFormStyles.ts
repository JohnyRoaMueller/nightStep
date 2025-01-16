import { colors } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import theme from "../../../theme/theme";




export const ContactFormContainer = {
    width: '40%',

    zIndex: '1',

    padding: '50px',

    alignItems: 'center',

    borderTop: '0.2em solid',
    borderLeft: '0.2em solid',
    borderRight: '0.2em solid',
    borderRadius: '30px 30px 0px 0px',
    
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

