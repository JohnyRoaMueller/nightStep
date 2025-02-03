import { Palette } from "@mui/icons-material"
import theme from "../../../theme/theme"
import { ThemeOptions } from "@mui/material"



export const wrapper = {
    height: '80vh',
    width: '100%',

    display: 'flex',
    flexDirection: 'row',
    border: '1px solid green'
}
//---------------------------------------------------

export const guest = {
    height: '50%',
    width: '100%',

    alignSelf: 'center',

    border: '1px solid red'
}

export const guestButton = {
    variant: "contained",

    height: '100%',
    width: '100%',

    fontFamaly: theme.typography.button.fontFamily,
    fontWeight: theme.typography.button.fontWeight, 
    fontSize: theme.typography.button.fontSize,
    textTransform: theme.typography.button.textTransform,
    color: theme.typography.button.color,
    backgroundColor: theme.typography.button.backgroundColor,
    '$:hover': {
        backgroundColor: theme.typography.button.backgroundColor
    },
}
//---------------------------------------------------

export const host = {
    height: '50%',
    width: '100%',

    alignSelf: 'center',

    border: '1px solid red'
}

export const hostButton = {
    variant: "contained",

    height: '100%',
    width: '100%',

    fontFamaly: theme.typography.button.fontFamily,
    fontWeight: theme.typography.button.fontWeight, 
    fontSize: theme.typography.button.fontSize,
    textTransform: theme.typography.button.textTransform,
    color: theme.typography.button.color,
    backgroundColor: theme.typography.button.backgroundColor,
    '$:hover': {
        backgroundColor: theme.typography.button.backgroundColor
    },
}
//---------------------------------------------------