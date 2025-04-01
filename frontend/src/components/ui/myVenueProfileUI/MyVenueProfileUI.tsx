import { ChangeEvent, useEffect, useState } from "react"
import { ImageBox, MyVenueHeader, MyVenueHeaderTypo, Overlay, DropdownHeader, Settings, DropdownWrapper, TextFieldOption, TextFieldBio, ImageWrapper } from "./myVenueProfileUI.Styles"
import { TypoBody1 } from "../../../styled-components/styledTypographie";
import { useParams } from "react-router-dom";
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import { VenueType } from "../venueCards/VenueCards";

function MyVenueProfileUI() {

    const apiUrl =  import.meta.env.VITE_APP_API_URL

    const [venue, setVenue] = useState<VenueType>()
    const param = useParams()

    const [openSettings, setOpenSettings] = useState(false)
    function handleSettingsClick() {
        if (openSettings == false) {setOpenSettings(true)}
        else                   {setOpenSettings(false)}
        console.log(openSettings)
    }

    const [openBio, setOpenBio] = useState(false)
    function handleBioClick() {
        if (openBio == false) {setOpenBio(true)}
        else                   {setOpenBio(false)}
        console.log(openBio)
    }

    type VenueData = {
        name: string,
        type: string,
        capacity: string,
        city: string,
        street: string,
        houseNumber: string,
        postalCode: number | null
        description: string,
    };

    const [venueData, setVenueData] = useState<VenueData>({
        name: "",
        type: "",
        capacity: "",
        city: "",
        street: "",
        houseNumber: "",
        postalCode: null,
        description: "",
    })

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log(event)
        const name = event?.target.name
        const value = event?.target.value
        setVenueData((prevdata) => ({
            ...prevdata,
            [name]: value
        }))
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
                console.log(responseJSON)
                setVenue(responseJSON)
                setVenueData({
                    name: responseJSON.name,
                    type: responseJSON.type,
                    capacity: responseJSON.capacity,
                    city: responseJSON.city,
                    street: responseJSON.street,
                    houseNumber: responseJSON.houseNumber,
                    postalCode: responseJSON.postalCode,
                    description: responseJSON.description,
                })
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
            <MyVenueHeaderTypo>{venueData?.name}</MyVenueHeaderTypo>
        </MyVenueHeader>

        <DropdownWrapper>
            <DropdownHeader onClick={handleBioClick}>
                <TypoBody1 sx={{color: "black"}}>Bio</TypoBody1>
                {openBio ? <ExpandLessRoundedIcon/> : <ExpandMoreRoundedIcon/>}
            </DropdownHeader>
            <Settings sx={{display: openBio ? "block" : "none"}}>
                <TextFieldBio fullWidth multiline rows={4} onChange={handleChange}></TextFieldBio>
            </Settings>
        </DropdownWrapper>

        <ImageWrapper>
            {getImages().map((image) => ( 
                <ImageBox>
                {image}
                <Overlay/>
                </ImageBox>
            ))}
        </ImageWrapper>

        <DropdownWrapper>
            <DropdownHeader onClick={handleSettingsClick}>
                <TypoBody1 sx={{color: "black"}}>Settings</TypoBody1>
                {openSettings ? <ExpandLessRoundedIcon/> : <ExpandMoreRoundedIcon/>}
            </DropdownHeader>
            <Settings sx={{display: openSettings ? "block" : "none"}}>
                <TextFieldOption name="name" fullWidth helperText="name" value={venueData?.name} onChange={handleChange}></TextFieldOption>
                <TextFieldOption name="type" fullWidth helperText="type" value={venueData?.type} onChange={handleChange}></TextFieldOption>
                <TextFieldOption name="capacity" fullWidth helperText="capacity"  value={venueData?.capacity} onChange={handleChange}></TextFieldOption>
                <TextFieldOption name="city" fullWidth helperText="city" value={venueData?.city} onChange={handleChange}></TextFieldOption>
                <TextFieldOption name="street" fullWidth helperText="street" value={venueData?.street} onChange={handleChange}></TextFieldOption>
                <TextFieldOption name="houseNumber" fullWidth helperText="house number" value={venueData?.houseNumber} onChange={handleChange}></TextFieldOption>
                <TextFieldOption name="postalCode" fullWidth helperText="postal code" value={venueData?.postalCode} onChange={handleChange}></TextFieldOption>
            </Settings>
        </DropdownWrapper>
        </>
    )
}

export default MyVenueProfileUI
