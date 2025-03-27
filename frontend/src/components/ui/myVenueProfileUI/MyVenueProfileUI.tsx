import { Box, Button } from "@mui/material"
import { useEffect, useState } from "react"
import { EditImageIcon, ImageBox, ImageBox2, ImagesWrapper, ImageWrapper, ImageWrapper2, MyVenueHeader, MyVenueHeaderTypo, Overlay, Settings, SettingsHeader, SettingsMenu, SettingsOption, SettingWrapper, TextFieldOption, TextFieldOptionOption } from "./myVenueProfileUI.Styles"
import ClearIcon from '@mui/icons-material/Clear';
import { TypoBody1, TypoBody2, TypoH1 } from "../../../styled-components/styledTypographie";
import { useParams } from "react-router-dom";
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';

function MyVenueProfileUI() {

    const apiUrl =  import.meta.env.VITE_APP_API_URL

    const [venue, setVenues] = useState()
    const param = useParams()

    const [openMenu, setOpenMenu] = useState(false)
    function handleSettingsClick() {
        if (openMenu == false) {setOpenMenu(true)}
        else                   {setOpenMenu(false)}
        console.log(openMenu)
    }

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
        <SettingWrapper>
            <SettingsHeader onClick={handleSettingsClick}>
                <TypoBody1 sx={{color: "black"}}>Settings</TypoBody1>
                {openMenu ? <ExpandLessRoundedIcon/> : <ExpandMoreRoundedIcon/>}
            </SettingsHeader>
            <Settings sx={{display: openMenu ? "block" : "none"}}>
                <TextFieldOption fullWidth helperText="name" value={venue?.name} sx={{paddingBottom: "20px"}}></TextFieldOption>
                <TextFieldOption fullWidth helperText="type" value={venue?.type} sx={{paddingBottom: "20px"}}></TextFieldOption>
                <TextFieldOption fullWidth helperText="capacity" value={venue?.capacity} sx={{paddingBottom: "20px"}}></TextFieldOption>
                <TextFieldOption fullWidth helperText="city" value={venue?.city} sx={{paddingBottom: "20px"}}></TextFieldOption>
            </Settings>

        </SettingWrapper>
        </>
    )
}

export default MyVenueProfileUI
