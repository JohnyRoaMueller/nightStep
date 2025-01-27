


/*
export const FooterBox = {
 
    width: '75%',
    height: '300px',

    alignSelf: 'center',

    flexShrink: '0',

    bgcolor: 'text.disabled',

    display: 'flex',
    alignItems: 'center',

}


export const FooterTextBox = {

    width: '250px',
    height: '100%',

    margin: '100px',

    border: '1px solid green',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
    
}

*/

import { colors } from "@mui/material"

export const FooterGridBox = {
    
    display: 'flex',

    witdh: '75%',
    height: '10vh',

    flexShrink: '0',

    bgcolor: 'text.disabled',

    borderTop: '0.2em solid',
    paddingTop: '2em',
    paddingBottom: '1em',

    // marginTop: 'auto',

    alignItems: 'center',
    justifyContent: 'center',

    // theme styling 
    backgroundColor: (theme) => theme.palette.primary.main,

    '@media (min-width: 600px)': {
        width: '75%'
    },
}

export const FooterImgBox = {

    width: '250px',
    height: '100px',
    maxWidth: '100%',   // Verhindert, dass das Bild über die Elternbox hinausgeht
    maxHeight: '100%',  // Verhindert, dass das Bild über die Elternbox hinausgeht
    boxSizing: 'border-box',  // Berücksichtigt Padding und Border bei der Berechnung der Größe

}

export const GridWrapper = {
    direction:"row",
    alignItems:"center"

}

export const singleGrid = {
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center',
    paddingBottom: '2%',

    '& > *': {
        color: '#FFF'
    }
}

export const footerLinkColor = {
    color: 'black',

    '&:hover': {
        color: 'black'
    }
}
