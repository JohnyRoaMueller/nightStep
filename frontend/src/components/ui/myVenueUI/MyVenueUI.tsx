import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import { EditImageIcon, ImageBox, ImagesWrapper } from "./MyVenue.Styles"
import ClearIcon from '@mui/icons-material/Clear';

function MyVenueUI() {

    const apiUrl =  import.meta.env.VITE_APP_API_URL

    const [venues, setVenues] = useState([])

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



    function getImages() 
    {
        const imagesArray = []

        for (let i = 0; i <= venues.length - 1; i++) 
        {
            for (let j = 0; j <= 12; j++)
            {
                if (venues[i]?.picAddresses[j]) 
                {
                    const image = <img src={`${apiUrl}/images/${venues[i]?.picAddresses[j].replace(/\//g, "-")}`}></img>
                    imagesArray.push(image)

                } 
            }
        }
        return imagesArray;
    }    


    return (
        <>
        <ImagesWrapper>
            {getImages().map((image) => (
                <ImageBox>
                    <EditImageIcon/>
                    {image}
                </ImageBox>
            ))}
        </ImagesWrapper>
        </>
    )
}

export default MyVenueUI