import { data, useParams } from "react-router";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { VenueType } from "../ui/venueCards/VenueCards";
import { ImageBox, ImagesWrapper, ProfileWrapper } from "./VenueProfile.Styles";
import { TypoBody1, TypoCaption, TypoH1, TypoH2 } from "../../styled-components/styledTypographie";



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
 
  // user can upload 12 images
  function getImages() {

    const imagesArray = []

    for (let i = 0; i <= 11; i++) 
      if (venue?.picAddresses[i]) {

        const image = <img src={`${apiUrl}/images/${venue?.picAddresses[i].replace(/\//g, "-")}`}></img>
        imagesArray.push(image)

    } 
    else return imagesArray;
  }


  return (
    <>
        <ProfileWrapper>
          <TypoH1>{venue?.name}</TypoH1>
          <TypoBody1>{venue?.city}</TypoBody1>
          <TypoBody1>{venue?.street} {venue?.houseNumber}</TypoBody1>
          <TypoBody1>{venue?.district}</TypoBody1>
        </ProfileWrapper>
        <ImagesWrapper>
          <ImageBox>
            {getImages()}
          </ImageBox>
        </ImagesWrapper>

    </>
  )


}