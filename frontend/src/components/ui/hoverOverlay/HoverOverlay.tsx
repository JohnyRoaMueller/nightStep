import { StyledOverlay } from "./hoverOverlay.Styles"

function HoverOverlay({...HoverOverlayProps}) {
    return(
        <>
        <StyledOverlay {...HoverOverlayProps} className="hover-overlay" ></StyledOverlay>
        </>
    )
}

export default HoverOverlay