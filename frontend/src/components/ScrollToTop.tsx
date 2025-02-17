import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        console.log("neue url 1")
        window.scrollTo(0, 0);
        console.log("neue url 2")
      }, [pathname])

      return null
}