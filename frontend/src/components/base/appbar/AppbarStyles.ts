import { Visibility } from "@mui/icons-material"
import zIndex from "@mui/material/styles/zIndex"
import { borderBottom, height, positions, width } from "@mui/system"


export const AppbarFrameBoxStyle = {
    height: '7vh',
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
    position : 'relative',

    width: '75%',
    height: '100%',

    right: '50%', // moves to 50% of the width of parent container
    transform: 'translateX(50%)', // moves on x axis 50% of width of current element
                                // positive value moves right- and  negative to left side

    display: 'flex',
    flexDirection: 'row',
    
}


export const appbarLinkBoxLeft = {
    position: 'relative',

    left: '0%',

    height: '100%',
    

    display: 'flex',
    alignItems: 'center',
    gap: 12,
}

export const appbarLinkBoxRight = {
    position: 'absolute',

    right: '0%',

    height: '100%',
    
    
    display: 'flex',
    alignItems: 'center',

    gap: 13
}

export const appbarMenuBox = {
    position: 'absolute',

    height: '100%',

    right: '50%',
    transform: 'translateX(50%)',
    display: 'flex',        // Flexbox-Container
    alignItems: 'center',   // Zentriert die Items innerhalb des Containers
}

export const accountLinkBox = {
    display: 'flex',
    flexDirection: 'row',
    gap: 1,
}


export const appbarLinkColor = {
    color: 'black',
    
    '&:hover': {
        color: 'inherit'
    }
}

