import BaseForm from "../../../common/form/baseForm/BaseForm"
import { FormEvent, useEffect, useRef, useState } from "react"
import PrimaryButton from "../../../common/button/primaryButton/PrimaryButton"
import FormTextField from "../../../common/form/formTextField/FormTextField"

import LocalizedDateTimePicker from "../../../common/form/timePicker/DateTimePicker"
import { TypoH1 } from "../../../styled-components/styledTypographie"
import { ImageTypoH2, PictureHolder } from "../registerHostForm/registerHostForm.Styles"
import dayjs from "dayjs"
import { EmptyValueEffectType, validateGuestForm } from "../../../functions/validation/guestFormValidation"
import { boxShadowAnimation } from "../registerGuestForm/registerGuestForm.Styles"

const apiUrl =import.meta.env.VITE_APP_API_URL

interface AddEventFormType {
    venueName: string,
    name: string,
    startTimeDate: string,
    endTimeDate: string,
    price: string,
    description: string,
    imageOne: Blob | null,
    imageTwo: Blob | null,
    imageThree: Blob | null,
}


function AddEventForm() {

    const [check, setCheck] = useState<boolean>(false)

    const [popUpFlag, setPopUpFlag] = useState<boolean>(false)

    const [warningMessage, setWarningMessage] = useState<string>("")

    const [addEventFormData, setAddEventFormData] = useState<AddEventFormType>({
        venueName: "",
        name: "",
        startTimeDate: "",
        endTimeDate: "",
        price: "",
        description: "",
        imageOne: null,
        imageTwo: null,
        imageThree: null,
    })


    const inputRefs = useRef<(HTMLInputElement | HTMLButtonElement | HTMLDivElement | HTMLOptionElement)[]>([])

    const [emptyValueEffect, setEmptyValueEffect] = useState<EmptyValueEffectType[]>(
            Array(25).fill({ animation: "" }) // 8 positions to set the effect independent from each other
        )


    const [venues, setVenues] = useState<string[]>([])
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`${apiUrl}/myvenue`, {
                method: "GET",
                headers: {'Content-Type': 'application/json;charset=UTF-8'},
                credentials: "include",
            })
            if (response.ok) {
                const responseJSON = await response.json()
                setVenues(responseJSON)
                console.log(responseJSON)
            }
        }
        fetchData()
    }, [])


    const [imageUrls, setImageUrls] = useState<string[]>([])

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
      if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        console.log(file)
        setAddEventFormData((prevData) => ({
            ...prevData,
            [event.target.name] : file
        }))

        const url = URL.createObjectURL(file); // Erstelle eine URL für die Datei
        setImageUrls((prevData) => {
            const newImageUrls = [...prevData]; // Kopiere das alte Array
            newImageUrls[index] = url; // Ändere das gewünschte Element im neuen Array
            return newImageUrls; // Gib das neue Array zurück
        })
      }
    };    

    
    async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault()

        console.log("submit gedrückt")

        const isValid = await validateGuestForm({formData: addEventFormData, setEmptyValueEffect, setPopUpFlag, setWarningMessage, boxShadowAnimation, inputRefs, check})

        console.log("nach submit gedrückt")

        if (!isValid) return

        console.log("is valid")

        console.log(addEventFormData)

        const formData = new FormData()
        formData.append("venueName", addEventFormData.venueName)
        formData.append("name", addEventFormData.name)
        formData.append("startTimeDate", addEventFormData.startTimeDate)
        formData.append("endTimeDate", addEventFormData.endTimeDate)
        formData.append("price", addEventFormData.price)
        formData.append("description", addEventFormData.description)
        formData.append("images[]", addEventFormData.imageOne)
        formData.append("images[]", addEventFormData.imageTwo)
        formData.append("images[]", addEventFormData.imageThree)

        const response = await fetch(`${apiUrl}/events/create`, {
            method: 'POST',
            body: formData,
            credentials: 'include'
        })
        if (response.ok) {
            const responseTEXT = await response.text()   
            console.log(responseTEXT)     
        } else {
            console.log("kein event erstellt")
        }
    }

    function handleChange(event) {
        const { name, value } = event.target
        console.log(addEventFormData)
        console.log(name, value)
        setAddEventFormData((prevdata) => ({
            ...prevdata,
            [name]: value
        }))
    }

    function handleStartTimeDate(date: string) {setAddEventFormData((prevdata) => ({...prevdata, startTimeDate: date}))}
    function handleEndStartTime(date: string) {setAddEventFormData((prevdata) => ({...prevdata, endTimeDate: date}))}

    return(
        <>

        <TypoH1>NEW EVENT</TypoH1>
        <BaseForm sx={{alignSelf: "center"}} onSubmit={handleSubmit}>

            <FormTextField name='venueName' helperText='venue' select slotProps={{select: {native: true}}} value={addEventFormData.venueName} onChange={handleChange} key='textfield-venues' inputRef={domElement => inputRefs.current.push(domElement as HTMLInputElement)} sx={{'& .MuiInputBase-input': emptyValueEffect[0]}}> {/*select (non-native) prop sorgt für overlay und stören der Layouts*/} {/* Lösung von https://stackblitz.com/run?file=Demo.tsx Zeile 47 - 64)*/}
                <option disabled >{""}</option>
                {venues.map((venue) => <option value={venue.name} key={venue.name}>{venue.name}</option>)}
            </FormTextField>     

            <FormTextField name='name' helperText='name' onChange={handleChange} inputRef={domElement => inputRefs.current.push(domElement as HTMLInputElement)} sx={{'& .MuiInputBase-input': emptyValueEffect[1]}} />

            <LocalizedDateTimePicker name='startTimeDate' helperText='start' format='YYYY-MM-DD HH:mm' onChange={(date) => handleStartTimeDate(date.toISOString())} minDate={dayjs(Date.now())} maxDate={dayjs(Date.now()).add(3, 'year')} minTime={dayjs(Date.now())} inputRef={domElement => inputRefs.current.push(domElement as HTMLInputElement)} sx={{'& .MuiInputBase-input': emptyValueEffect[2]}}></LocalizedDateTimePicker>

            <LocalizedDateTimePicker name='endTimeDate' helperText='end' format='YYYY-MM-DD HH:mm' onChange={(date) => handleEndStartTime(date.toISOString())} minDate={dayjs(addEventFormData.startTimeDate, "YYYY-MM-DD HH:mm")} maxDate={dayjs(addEventFormData.startTimeDate, "YYYY-MM-DD HH:mm").add(2, 'weeks')}  minTime={dayjs(Date.now()).add(2, "hours")} disabled={!addEventFormData.startTimeDate} inputRef={domElement => inputRefs.current.push(domElement as HTMLInputElement)} sx={{'& .MuiInputBase-input': emptyValueEffect[3]}}></LocalizedDateTimePicker>

            <FormTextField name='price' helperText='price' onChange={handleChange} inputRef={domElement => inputRefs.current.push(domElement as HTMLInputElement)} sx={{'& .MuiInputBase-input': emptyValueEffect[4]}}/>

            <FormTextField name='description' helperText='description' onChange={handleChange} variant="filled" multiline rows={4} inputRef={domElement => inputRefs.current.push(domElement as HTMLInputElement)} sx={{'& .MuiInputBase-input': emptyValueEffect[5]}}/>

            <PictureHolder sx={{...emptyValueEffect[6], height: `${addEventFormData.imageOne ? '100%' : '20vh'}`}} ref={domElement => inputRefs.current.push(domElement as HTMLDivElement)} >
                {!imageUrls[0] && <ImageTypoH2>Upload an image</ImageTypoH2>}
                <input name='imageOne' type='file' accept='image/*' style={{position: "absolute", top: 0, width: "100%", height: "100%", opacity: "0"}} onChange={(event) => handleFileChange(event, 0)}></input>
                <img src={imageUrls[0]} style={{height: "100%", width: "100%"}} ></img>
            </PictureHolder>        

            <PictureHolder sx={{...emptyValueEffect[7], height: `${addEventFormData.imageTwo ? '100%' : '20vh'}`}} ref={domElement => inputRefs.current.push(domElement as HTMLDivElement)} >
                {!imageUrls[1] && <ImageTypoH2>Upload an image</ImageTypoH2>}
                <input name='imageTwo' type='file' accept='image/*' style={{position: "absolute", top: 0, width: "100%", height: "100%", opacity: "0"}} onChange={(event) => handleFileChange(event, 1)}></input>
                <img src={imageUrls[1]} style={{height: "100%", width: "100%"}} ></img>
            </PictureHolder>   

            <PictureHolder sx={{...emptyValueEffect[8], height: `${addEventFormData.imageThree ? '100%' : '20vh'}`}} ref={domElement => inputRefs.current.push(domElement as HTMLDivElement)} >
                {!imageUrls[2] && <ImageTypoH2>Upload an image</ImageTypoH2>}
                <input name='imageThree' type='file' accept='image/*' style={{position: "absolute", top: 0, width: "100%", height: "100%", opacity: "0"}} onChange={(event) => handleFileChange(event, 2)}></input>
                <img src={imageUrls[2]} style={{height: "100%", width: "100%"}} ></img>
            </PictureHolder>                               

            <PrimaryButton type="submit">ADD EVENT</PrimaryButton>
        </BaseForm>
        </>
    )

}

export default AddEventForm