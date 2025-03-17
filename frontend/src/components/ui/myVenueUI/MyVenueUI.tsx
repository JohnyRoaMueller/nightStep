import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import { ImageBox, ImagesWrapper } from "./MyVenue.Styles"
import { constants } from "buffer"

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
    })



    function getImages() {

        const imagesArray = []
    
        for (let i = 0; i <= 11; i++) 
          if (venues[i]?.picAddresses[i]) {
    
            const image = <img src={`${apiUrl}/images/${venues[i]?.picAddresses[i].replace(/\//g, "-")}`}></img>
            imagesArray.push(image)
    
        } 
        else return imagesArray;
      }    

    return (
        <>
        <ImagesWrapper>
            <ImageBox>
                {getImages()}
            </ImageBox>
        </ImagesWrapper>
        </>
    )
}

export default MyVenueUI