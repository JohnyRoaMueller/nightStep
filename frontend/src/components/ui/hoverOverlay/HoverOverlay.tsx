import { StyledOverlay } from "./HoverOverlay.Styles.ts"

function HoverOverlay({...HoverOverlayProps}) {
    return(
        <>
        <StyledOverlay {...HoverOverlayProps} className="hover-overlay" ></StyledOverlay>
        </>
    )
}

export default HoverOverlay