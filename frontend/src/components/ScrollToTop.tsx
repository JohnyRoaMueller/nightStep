import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); //don't work if used alone
        document.body.scrollTop = 0;        // Safari
        document.documentElement.scrollTop = 0; // Chrome, Firefox, IE...
      }, [pathname])

      return null
}

{/* https://developer.mozilla.org/de/docs/Web/API/Window/scrollTo */}