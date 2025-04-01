import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { VenueType } from "../venueCards/VenueCards";

function MyVenueUI() {

    const apiUrl =  import.meta.env.VITE_APP_API_URL

    const [venues, setVenues] = useState<VenueType[]>([])
    const navigateTo = useNavigate();

    useEffect(() => {
        async function fetchData() {

            const response = await fetch(`${apiUrl}/myvenue`, {
                method: "GET",
                credentials: "include",
            })
            if(response.ok) 
            {   
                const responseJSON = await response.json()
                setVenues(responseJSON)
            }
            else 
            {
                alert("fetch not successfull")
                console.log("fetch not successfull")
            }
        }
        fetchData()
    }, [])

    if (venues.length == 1) 
    { 
        navigateTo(`/myVenue/${venues[0].name}`)
    }


    return (
        <>

        </>
    )

}
export default MyVenueUI
