import { data, useParams } from "react-router";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { VenueType } from "../ui/venueCards/VenueCards";
import { ImageBox, ImagesWrapper } from "./VenueProfile.Styles";



const apiUrl =import.meta.env.VITE_APP_API_URL

export default function VenueProfile() {

  const param = useParams();

  const [venue, setVenue] = useState<VenueType>();


  useEffect(() => {

    console.log("fetching to: ", `${apiUrl}/venue/${param.venuename}`)

      
    async function fetchData() {

      const response = await fetch(`${apiUrl}/venue/${param.venuename}`)

      console.log(response)

      const dataJson = await response.json()

      setVenue(dataJson)

    }
    fetchData()
  }, [])


  return (
    <>
        <ImagesWrapper>
          <ImageBox>
            <img src={`${apiUrl}/images/${venue?.picAddresses[0].replace(/\//g, "-")}`}></img>
          </ImageBox>
        </ImagesWrapper>
    </>
  )


}