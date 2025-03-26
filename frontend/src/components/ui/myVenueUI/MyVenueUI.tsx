import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import { EditImageIcon, ImageBox, ImageBox2, ImagesWrapper, ImageWrapper, ImageWrapper2, MyVenueHeader, MyVenueHeaderTypo, Overlay } from "./myVenueProfileUI.Styles"
import ClearIcon from '@mui/icons-material/Clear';
import { TypoH1 } from "../../../styled-components/styledTypographie";
import { useNavigate } from "react-router-dom";

function MyVenueUI() {

    const apiUrl =  import.meta.env.VITE_APP_API_URL

    const [venues, setVenues] = useState([])
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
