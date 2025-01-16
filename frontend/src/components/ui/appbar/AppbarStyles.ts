import zIndex from "@mui/material/styles/zIndex"
import { borderBottom } from "@mui/system"


export const AppbarFrameBoxStyle = {
    height: '50px',
    width: '100%',

    flexShrink: '0',

    position: 'sticky',
    top: '0px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',

    zIndex: '100',


    // theme styling
    backgroundColor: (theme) => theme.palette.primary.main
}

export const AppbarContentBoxStyle = {
    display: {xs: 'none', sm: 'flex'},
    gap: '1.5rem',
    justifyContent: 'center',
    paddingRight: '13%'
}

export const AppbarPartBorder = {

    top: '50px',

    width: '90%',

    borderBottom: '5px solid',

    position: 'sticky',

    zIndex: '100',

}

export const appbarLinkColor = {
    color: 'black',
    
    '&:hover': {
        color: 'inherit'
    }
}

