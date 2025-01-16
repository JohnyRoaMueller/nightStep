import { getOpacity } from "@mui/material/styles/createColorScheme";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { borderColor, borderRadius, height, positions, textAlign, width } from "@mui/system";




export const CardStyling = {


    border: '1px solid',

};

export const CardContentStyle = {

    position: 'relative',  // Dieser Container ist der Bezugspunkt für die absolute Positionierung

    backgroundColor: (theme) => theme.palette.background.paper

}

export const picStyle = {
    
    clipPath: 'inset(0 round 10%)', // Begrenze die sichtbare Fläche auf die abgerundete Form
    
}

export const cardContentHoverStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dunkler Hintergrund für den Hover-Effekt
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  export const cardContentTypoBox = {

    width: '80%',

    placeSelf: 'center',

    borderTop: '0.2em solid',
    borderRight: '0.1em solid',
    borderLeft: '0.1em solid',
    borderRadius: '20px 20px 0px 0px',

    textAlign: 'center',

    // theme styling
    background: (theme) => theme.palette.background.default,

  }