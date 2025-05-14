import { ChangeEvent, MouseEventHandler, useEffect, useState } from "react"
import { ImageBox, MyVenueHeader, MyVenueHeaderTypo, DropdownHeader, Settings, DropdownWrapper, TextFieldOption, TextFieldBio, ImageWrapper, TypoBody1HeaderDropdown, SubmitSettingsButton, SubmitSettingsButtonOverlay } from "./myVenueProfileUI.Styles"
import { useParams } from "react-router-dom";
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import { VenueType } from "../venueCards/VenueCards";
import { Button, Fade } from "@mui/material";
import { type } from "node:os";
import { TypoBody1 } from "../../../styled-components/styledTypographie";
import CheckIcon from '@mui/icons-material/Check';

// "/myvenue/:venuename"
function MyVenueProfileUI() {

    const apiUrl =  import.meta.env.VITE_APP_API_URL
    const param = useParams()

    const [venue, setVenue] = useState<VenueType>()
    const [imageUrls, setImageUrls] = useState<string[]>([])
    const [imageBlobs, setImageBlobs] = useState<Blob[]>([])

    const [overlayFadeflag, setOverlayFadeflag] = useState(false)

    useEffect(() => {
        for (let i = 0; i < imageUrls.length; i++) {
            if (imageUrls[i]) {
                console.log("image on index " + i + ": " + imageUrls[i])
            }
            else console.log("no image on index " + i)
        } 
        console.log("<><><><></></></></>")
        console.log("<><><><></></></></>")
        for (let i = 0; i < imageBlobs.length; i++) {
            if (imageBlobs[i]) {
                console.log("blob on index " + i)
            }
            else console.log("no blob on index " + i)
        } 
    }, [imageUrls, imageBlobs])


    const [openBio, setOpenBio] = useState(false)
    function handleBioClick() {
        setOpenBio(prevBoolean => !prevBoolean)
    }
    const unfoldBioStyle = { maxHeight: openBio ? "1000px" : 0, opacity: openBio ? 1 : 0, overflow: "hidden", transition: "max-height 1.2s ease, opacity 1.2s ease" }    


    const [openSettings, setOpenSettings] = useState(false)
    function handleSettingsClick() {
        setOpenSettings(prevBoolean => !prevBoolean)
    }
    const unfoldSettingsStyle = { maxHeight: openSettings ? "1000px" : 0, opacity: openSettings ? 1 : 0, overflow: "hidden", transition: "max-height 1.2s ease, opacity 1.2s ease" }


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

        setImageUrls((prevdata) =>
        {
            const newArray = [...prevdata];
            newArray[index] = ""
            return newArray
        })
        setImageBlobs((prevdata) =>
        {
            const newArray = [...prevdata];
            newArray[index] = file
            return newArray
        })
        }
    }


    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) =>
    {
        event.preventDefault();

        async function submitData()
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

            const indexToIgnore : number[] = [] 

            let index = 0

            // ensure that current images get saved first
            for (const url of imageUrls) {

                console.log("current index: " + index)
                if (url == null || url == undefined || url == "") {
                    console.log("we skip this url: ", url)
                    indexToIgnore.push(index)
                    console.log("indexToIgnore: " + indexToIgnore)
                    if (imageBlobs[index]) {
                        formDataObject.append("imageBlobs[]", imageBlobs[index]);
                        console.log("appending in imageUrls: " + typeof imageBlobs[index])
                    }
                    index++
                    continue
                }
                console.log(url, "is not undefined")
                // returns the generated image from the backend
                const result = await fetch(`${apiUrl}/images${url}`.replace(/\//g, "-"), {
                    credentials: 'include'
                })
                console.log("url:", url)
                console.log(result)
                const blob = await result.blob()
                const file = new File([blob], url)
                formDataObject.append("imageBlobs[]", file);
                console.log("blob appended")
                index++
            }

            // checking blob array to append to the formdata object
            imageBlobs.forEach((blob, index) =>
            {
                if (blob != undefined && !indexToIgnore.includes(index)) {
                    console.log("blob from index " + index + " will be appended to blob array -> ")
                    formDataObject.append("imageBlobs[]", blob);
                    console.log("blob appended")
                }
            });

            // updating current venue profile
            console.log("do the update now")
            const result = await fetch(`${apiUrl}/myvenue/update/${param.venuename}`, {
                method: 'PATCH',
                body: formDataObject,
                credentials: 'include'
            })
            console.log(await result.text())
            setOverlayFadeflag(true)
            setTimeout(() => {
                setOverlayFadeflag(false)
            }, 1000);
        }
        submitData()
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
                    {/** checking index to do api call or show blob */}
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
            <Settings sx={unfoldBioStyle}>
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
            <Settings sx={unfoldSettingsStyle}>
                <TextFieldOption name="name" fullWidth helperText="name" value={venueData?.name} onChange={handleChange}></TextFieldOption>
                <TextFieldOption name="type" fullWidth helperText="type" value={venueData?.type} onChange={handleChange}></TextFieldOption>
                <TextFieldOption name="capacity" fullWidth helperText="capacity"  value={venueData?.capacity} onChange={handleChange}></TextFieldOption>
                <TextFieldOption name="city" fullWidth helperText="city" value={venueData?.city} onChange={handleChange}></TextFieldOption>
                <TextFieldOption name="street" fullWidth helperText="street" value={venueData?.street} onChange={handleChange}></TextFieldOption>
                <TextFieldOption name="houseNumber" fullWidth helperText="house number" value={venueData?.houseNumber} onChange={handleChange}></TextFieldOption>
                <TextFieldOption name="postalCode" fullWidth helperText="postal code" value={venueData?.postalCode} onChange={handleChange}></TextFieldOption>
            </Settings>
        </DropdownWrapper>
        <SubmitSettingsButton onClick={handleSubmit}>
            change settings
            <Fade in={overlayFadeflag} timeout={{ enter: 500, exit: 500, }}>
                <SubmitSettingsButtonOverlay><CheckIcon sx={{color: "green"}}/></SubmitSettingsButtonOverlay>
            </Fade>

        </SubmitSettingsButton>
        </>
    )
}

export default MyVenueProfileUI
