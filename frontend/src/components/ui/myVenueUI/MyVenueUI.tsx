import { Box } from "@mui/material"
import { useEffect } from "react"

function MyVenueUI() {

    useEffect(() => {
        async function fetchData() {


            const apiUrl =  import.meta.env.VITE_APP_API_URL

            const response = await fetch(`${apiUrl}/myvenue`, {
                method: "GET",
                credentials: "include",
            })

            console.log(`${apiUrl}/myvenue`)
            console.log(response)
        }
        fetchData()


    })



    return (
        <>
            
        </>
    )
}

export default MyVenueUI