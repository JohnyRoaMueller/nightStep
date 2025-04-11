import { ChangeEvent, MouseEventHandler, useEffect, useState } from "react"
import { ImageBox, MyVenueHeader, MyVenueHeaderTypo, DropdownHeader, Settings, DropdownWrapper, TextFieldOption, TextFieldBio, ImageWrapper, TypoBody1HeaderDropdown, SubmitSettingsButton } from "./myVenueProfileUI.Styles"
import { useParams } from "react-router-dom";
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import { VenueType } from "../venueCards/VenueCards";
import { Button } from "@mui/material";

// "/myvenue/:venuename"
function MyVenueProfileUI() {

    const apiUrl =  import.meta.env.VITE_APP_API_URL
    const param = useParams()

    const [venue, setVenue] = useState<VenueType>()
    const [imageUrls, setImageUrls] = useState<string[]>([])
    const [imageBlobs, setImageBlobs] = useState<Blob[]>([])


    const [openSettings, setOpenSettings] = useState(false)
    function handleSettingsClick() {
        setOpenSettings(prevBoolean => !prevBoolean)
    }

    const [openBio, setOpenBio] = useState(false)
    function handleBioClick() {
        setOpenBio(prevBoolean => !prevBoolean)
    }

    type VenueData = {
        name: string,
        type: string,
        capacity: string,
        city: string,
        street: string,
        houseNumber: string,
        postalCode: string
        description: string,
    };

    const [venueData, setVenueData] = useState<VenueData>({
        name: "",
        type: "",
        capacity: "",
        city: "",
        street: "",
        houseNumber: "",
        postalCode: "",
        description: "",
    })

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = event?.target.name
        const value = event?.target.value
        setVenueData((prevdata) => ({
            ...prevdata,
            [name]: value
        }))
        console.log("venueData:", venueData)
    }

    {/** create new blob string and empty the relevant index of the imageUrl array to set condition to render blob in <img>   */}
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
        if (event.target.files && event.target.files[0])
        {
        const file = event.target.files[0]

        setImageBlobs((prevdata) =>
        {
            const newArray = [...prevdata];
            newArray[index] = file
            return newArray
        })
        setImageUrls((prevdata) =>
        {
            const newArray = [...prevdata];
            newArray[index] = ""
            return newArray
        })
        }
        console.log(imageUrls)
    }

    
    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) =>
    {
        event.preventDefault();

        async function fetchingData()
        {

            const formDataObject = new FormData()
            formDataObject.append("name", venueData.name)
            formDataObject.append("type", venueData.type)
            formDataObject.append("capacity", venueData.capacity)
            formDataObject.append("city", venueData.city)
            formDataObject.append("street", venueData.street)
            formDataObject.append("housenumber", venueData.houseNumber)
            formDataObject.append("postalCode", venueData.postalCode)
            formDataObject.append("description", venueData.description)

            for (const url of imageUrls) {
                if (url == null || url == undefined) {
                    console.log("we skip this url: ", url)
                    break
                }
                console.log(url, "is not undefined")
                const result = await fetch(`${apiUrl}/images${url}`.replace(/\//g, "-"), {
                    credentials: 'include'
                })
                console.log("url:", url)
                console.log(result)
                const blob = await result.blob()
                const file = new File([blob], url)
                formDataObject.append("imageBlobs[]", file);
            }

            imageBlobs.forEach((blob, index) =>
            {
                if (blob != undefined) {
                    formDataObject.append("imageBlobs[]", blob);
                }
            });





            const result = await fetch(`${apiUrl}/myvenue/update/${param.venuename}`, {
                method: 'PATCH',
                body: formDataObject,
                credentials: 'include'
            })
            console.log(await result.text())
        }
        fetchingData()
    }

    useEffect(() => {
        async function fetchData() {

            const response = await fetch(`${apiUrl}/myvenue/${param.venuename}`, {
                method: "GET",
                credentials: "include",
            })
            if(response.ok) 
            {   
                const responseJSON = await response.json()
                console.log(responseJSON)
                setVenue(responseJSON)
                setImageUrls(responseJSON.picAddresses)

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

    console.log(imageUrls)

    function getImages() 
    {
        const inputImageArray = []


        for (let counter = 0; counter <= 11; counter++)
        {
                const inputImage = 
                <>
                <ImageBox key={`Image-box-${counter}`}>
                    <input name={`image-${counter}`} type='file' accept='image/*' style={{position: "absolute", top: 0, width: "100%", height: "100%", opacity: "0"}} onChange={(event) => handleFileChange(event, counter)}></input>
                    {imageUrls[counter] && <img src={`${apiUrl}/images/${imageUrls[counter].replace(/\//g, "-")}`}></img>}
                    {imageBlobs[counter] && <img src={URL.createObjectURL(imageBlobs[counter])}></img>}
                </ImageBox>
                </>
                inputImageArray.push(inputImage)
        }

        return inputImageArray;
    }     

    console.log(venueData?.houseNumber)

    return (
        <>
        <MyVenueHeader>
            <MyVenueHeaderTypo>{venueData?.name}</MyVenueHeaderTypo>
        </MyVenueHeader>

        <DropdownWrapper>
            <DropdownHeader onClick={handleBioClick}>
                <TypoBody1HeaderDropdown>Bio</TypoBody1HeaderDropdown>
                {openBio ? <ExpandLessRoundedIcon/> : <ExpandMoreRoundedIcon/>}
            </DropdownHeader>
            <Settings sx={{display: openBio ? "block" : "none"}}>
                <TextFieldBio name="description" value={venueData.description} fullWidth multiline rows={4} onChange={handleChange}></TextFieldBio>
            </Settings>
        </DropdownWrapper>

        <ImageWrapper>
            {getImages().map((image) => (
                <>
                {image}
                </>
            ))}
        </ImageWrapper>        

        <DropdownWrapper>
            <DropdownHeader onClick={handleSettingsClick}>
                <TypoBody1HeaderDropdown>Settings</TypoBody1HeaderDropdown>
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
        <SubmitSettingsButton onClick={handleSubmit}>change settings</SubmitSettingsButton>
        </>
    )
}

export default MyVenueProfileUI
