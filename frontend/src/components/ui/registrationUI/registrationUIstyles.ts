import { Height, Opacity, Palette } from "@mui/icons-material"
import theme from "../../../theme/theme"
import { ThemeOptions } from "@mui/material"

const imageUrls = {
    guest: './public/uploads/clubstep/registerGuest.jpeg',
    host: './public/uploads/clubstep/registerHost.jpeg'
}


export const wrapper = {
    height: '80vh',
    width: '100%',

    display: 'flex',
    flexDirection: 'row',
    gap: 40,

    justifyContent: 'center'

}
//---------------------------------------------------

export const guest = {
    height: '100%',
    width: '50%',

    alignSelf: 'center',

    '@media(min-height: 600px)': {
        height: '50%',
        width: '25%',
    }
}

export const guestButton = {
    variant: "contained",

    height: '100%',
    width: '100%',

    justifyText: 'center',

    focusRipple: 'true',

    position: 'relative',

    '&:hover, &.Mui-focusVisible': {
            zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiTypoH2-root': {
            opacity: 1,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },

    },
}

export const imageSrcGuest = {
    backgroundImage: `url(${imageUrls.guest})`,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
}

export const imageBackdrop = {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'black',
    opacity: 0.4,
    transition: 'opacity 0.9s ease',
}

export const image = {
    position: 'absolute',
    left: 22,
    top: -52,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
}

export const typoH2 = {
    opacity: 0,
    transition: 'opacity 0.6s ease',
}

export const imageMarked = {
    height: 7,
    width: 18,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: 'opacity 0.6s ease',
}

export const typoPic = {
    position: 'relative',
    p: 4,
    pt: 2,
    pb: `calc(2 + 6px)`,
}














//---------------------------------------------------

export const host = {
    height: '50%',
    width: '25%',

    alignSelf: 'center',

}

export const hostButton = {
    variant: "contained",

    height: '100%',
    width: '100%',

}

export const imageSrcHost = {
    backgroundImage: `url(${imageUrls.host})`,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
}
//---------------------------------------------------