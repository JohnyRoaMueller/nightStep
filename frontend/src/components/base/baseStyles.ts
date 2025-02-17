export const FullscreenFlexBox = {

    height: '100%',
    width: '100%',

    minHeight: '100vh',

    display: 'flex',             

    flexDirection: 'column',

    boxSizing: 'border-box',

    alignItems: 'center',

    flexGrow: 1,


    // theme styling 
    backgroundColor: (theme) => theme.palette.background.default,
}

export const VerticalCentered = {

    width: '100%',       

    bgcolor: 'grey.300',
    
    display: 'flex',      
    flexDirection: 'column',
    alignItems: 'center', 

    boxSizing: 'border-box',
    
    height: 'auto',

    position: 'relative',

    paddingBottom: '2em',

    // theme styling
    background: (theme) => theme.palette.background.default,

    '@media (min-width: 600px)': {
        width: '75%'
    },
}