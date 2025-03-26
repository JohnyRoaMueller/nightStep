import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import { EditImageIcon, ImageBox, ImageBox2, ImagesWrapper, ImageWrapper, ImageWrapper2, MyVenueHeader, MyVenueHeaderTypo, Overlay } from "./myVenueProfileUI.Styles"
import ClearIcon from '@mui/icons-material/Clear';
import { TypoH1 } from "../../../styled-components/styledTypographie";
import { useParams } from "react-router-dom";

function MyVenueProfileUI() {

    const apiUrl =  import.meta.env.VITE_APP_API_URL

    const [venue, setVenues] = useState()
    const param = useParams()

    param.venuename

    useEffect(() => {
        async function fetchData() {

            const response = await fetch(`${apiUrl}/myvenue/${param.venuename}`, {
                method: "GET",
                credentials: "include",
            })
            if(response.ok) 
            {   
                console.log("good fetch")
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

    console.log(`${apiUrl}/myvenue/${param.venuename}`)

    console.log(venue)

    function getImages() 
    {
        const imagesArray = []


        for (let j = 0; j <= 11; j++)
        {
            if (venue?.picAddresses[j]) 
            {
                const image = <img src={`${apiUrl}/images/${venue?.picAddresses[j].replace(/\//g, "-")}`}></img>
                imagesArray.push(image)
            } 
            else 
            {
                imagesArray.push(null)
            }
        }
        return imagesArray;
    }    


    return (
        <>
        <MyVenueHeader>
            <MyVenueHeaderTypo>{venue?.name}</MyVenueHeaderTypo>
        </MyVenueHeader>
        <ImageWrapper>
            {getImages().map((image) => ( 
                <ImageBox>
                {image}
                <Overlay/>
                </ImageBox>
            ))}
        </ImageWrapper>
        
        </>
    )
}

export default MyVenueProfileUI
