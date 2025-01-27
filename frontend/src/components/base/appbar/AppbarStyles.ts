import { Visibility } from "@mui/icons-material"
import zIndex from "@mui/material/styles/zIndex"
import { borderBottom, width } from "@mui/system"


export const AppbarFrameBoxStyle = {
    height: '5vh',
    width: '100%',
    flexShrink: '0',


    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',

    zIndex: '100',

    borderBottom: '0.2em solid',

    marginBottom: '2em',


    '.AppbarTypo': {
        display: 'none',
    },

    'AppbarIcon': {
        display: 'flex',
    },


    // theme styling
    backgroundColor: (theme) => theme.palette.primary.main,

    '@media (min-width: 600px)': {

        '.AppbarIcon': {display: 'none'},
        '.AppbarTypo': {display: 'flex'},

    },
}

export const AppbarContentBoxStyle = {
    display: 'flex',
    gap: '1.5rem',
    justifyContent: 'center',
    paddingRight: '5%'
}

export const appbarLinkColor = {
    color: 'black',
    
    '&:hover': {
        color: 'inherit'
    }
}

