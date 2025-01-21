import { colors } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import theme from "../../../theme/theme";




export const registerGuestFormContainer = {
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

export const registerGuestFormButton = {
    backgroundColor : (theme) => theme.palette.primary.main,
}

export const registerGuestFormButtonTypography = {
    color: 'black'
}

export const registerGuestFormHeaderBox = {
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
    textAlign: 'center',

    border: '0.2em solid',
    borderRadius: '2em',
    
    backgroundColor: (theme) => theme.palette.background.default
}

export const registerGuestFormHeaderTypo = {
    color: 'black'
}

