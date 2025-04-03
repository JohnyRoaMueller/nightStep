import { ChangeEvent, useEffect, useState } from "react"
import { ImageBox, MyVenueHeader, MyVenueHeaderTypo, Overlay, DropdownHeader, Settings, DropdownWrapper, TextFieldOption, TextFieldBio, ImageWrapper, TypoBody1HeaderDropdown } from "./myVenueProfileUI.Styles"
import { useParams } from "react-router-dom";
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import { VenueType } from "../venueCards/VenueCards";

function MyVenueProfileUI() {

    const apiUrl =  import.meta.env.VITE_APP_API_URL
    const param = useParams()

    const [venue, setVenue] = useState<VenueType>()
    const [imageUrls, setImageUrls] = useState<string[]>([])


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
        const name = event?.target.name
        const value = event?.target.value
        setVenueData((prevdata) => ({
            ...prevdata,
            [name]: value
        }))
    }

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
        const file = event.target.files[0]

        setImageUrls((prevdata) => {
            const url = URL.createObjectURL(file)
            const newArray = [...prevdata];
            newArray[index] = url
            return newArray
        })
        console.log(imageUrls)
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


    function getImages() 
    {
        const inputImageArray = []


        for (let counter = 0; counter <= 11; counter++)
        {
            if (imageUrls[counter]) 
            {
                const input = <input name={`image-${counter}`} type='file' accept='image/*' style={{position: "absolute", top: 0, width: "100%", height: "100%", opacity: "0"}} onChange={(event) => handleFileChange(event, counter)}></input>
                const image = <img src={`${apiUrl}/images/${imageUrls[counter].replace(/\//g, "-")}`}></img>
                const inputImage = [input, image]
                inputImageArray.push(inputImage)
            } 
            else 
            {
                const input = <input name='imageThree' type='file' accept='image/*' style={{position: "absolute", top: 0, width: "100%", height: "100%", opacity: "0"}} onChange={(event) => handleFileChange(event, counter)}></input>
                const image = <img></img>
                const inputImage = [input, image]
                inputImageArray.push(inputImage)
            }
        }
        return inputImageArray;
    }    


    function getImages2() 
    {
        const inputImageArray = []


        for (let counter = 0; counter <= 11; counter++)
        {
            if (imageUrls[counter])
            {
            const inputImage = 
            <>
            <ImageBox key={`Image-box-${counter}`}>
                <input name={`image-${counter}`} type='file' accept='image/*' style={{position: "absolute", top: 0, width: "100%", height: "100%", opacity: "0"}} onChange={(event) => handleFileChange(event, counter)}></input>
                <img src={`${apiUrl}/images/${imageUrls[counter].replace(/\//g, "-")}`}></img>
            </ImageBox>
            </>
                inputImageArray.push(inputImage)
            }
            else
            {
                const inputImage = 
                <>
                <ImageBox key={`Image-box-${counter}`}>
                    <input name={`image-${counter}`} type='file' accept='image/*' style={{position: "absolute", top: 0, width: "100%", height: "100%", opacity: "0"}} onChange={(event) => handleFileChange(event, counter)}></input>
                    {imageUrls[counter] && <img src={`${imageUrls[counter]}`}></img>}
                </ImageBox>
                </>
                inputImageArray.push(inputImage)
            }
        }
        console.log(inputImageArray)
        return inputImageArray;
    }        

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
                <TextFieldBio fullWidth multiline rows={4} onChange={handleChange}></TextFieldBio>
            </Settings>
        </DropdownWrapper>

        <ImageWrapper>
            {getImages().map((inputImage, index) => (
                <ImageBox key={`Image-box-${index}`}>
                {inputImage}
                </ImageBox>
            ))}
        </ImageWrapper>

        <ImageWrapper>
            {getImages2().map((image) => (
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
        </>
    )
}

export default MyVenueProfileUI
