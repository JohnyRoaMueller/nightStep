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

    backgroundColor: theme.palette.primary.default
}

export const guestButtonTypo = {

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

    backgroundColor: theme.palette.primary.main
}

export const hostButtonTypo = {

}
//---------------------------------------------------