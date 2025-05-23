import BaseForm from "../../../common/form/baseForm/BaseForm"
import { FormEvent, useState } from "react"
import PrimaryButton from "../../../common/button/primaryButton/PrimaryButton"
import FormTextField from "../../../common/form/formTextField/FormTextField"

import LocalizedDateTimePicker from "../../../common/form/timePicker/DateTimePicker"
import { TypoH1 } from "../../../styled-components/styledTypographie"
import { ImageTypoH2, PictureHolder } from "../registerHostForm/registerHostForm.Styles"


interface AddEventFormType {
    name: string,
    start: Date
    end: Date
    price: number,
    description: string,
    imageOne: Blob | null,
    imageTwo: Blob | null,
    imageThree: Blob | null,
}



function AddEventForm() {

    const [addEventFormData, setAddEventFormData] = useState<AddEventFormType>({
        name: "",
        start: new Date(),
        end: new Date(),
        price: 0,
        description: "",
        imageOne: null,
        imageTwo: null,
        imageThree: null,
    })

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

    
    function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault()
    }

    function handleChange() {
        console.log("Hello!")
    }

    return(
        <>

        <TypoH1>NEW EVENT</TypoH1>
        <BaseForm sx={{alignSelf: "center"}} onSubmit={handleSubmit}>

            <FormTextField name='name' helperText='name' onChange={handleChange} />

            <LocalizedDateTimePicker name='start' helperText='start'></LocalizedDateTimePicker>

            <LocalizedDateTimePicker name='end' helperText='end'></LocalizedDateTimePicker>

            <FormTextField name='price' helperText='price' onChange={handleChange}/>

            <FormTextField name='description' helperText='description' onChange={handleChange} multiline/>

            <PictureHolder sx={{height: `${addEventFormData.imageOne ? '100%' : '20vh'}`}} >
                {!imageUrls[0] && <ImageTypoH2>Upload an image</ImageTypoH2>}
                <input name='imageOne' type='file' accept='image/*' style={{position: "absolute", top: 0, width: "100%", height: "100%", opacity: "0"}} onChange={(event) => handleFileChange(event, 0)}></input>
                <img src={imageUrls[0]} style={{height: "100%", width: "100%"}} ></img>
            </PictureHolder>        

            <PictureHolder sx={{height: `${addEventFormData.imageTwo ? '100%' : '20vh'}`}} >
                {!imageUrls[1] && <ImageTypoH2>Upload an image</ImageTypoH2>}
                <input name='imageTwo' type='file' accept='image/*' style={{position: "absolute", top: 0, width: "100%", height: "100%", opacity: "0"}} onChange={(event) => handleFileChange(event, 1)}></input>
                <img src={imageUrls[1]} style={{height: "100%", width: "100%"}} ></img>
            </PictureHolder>   

            <PictureHolder sx={{height: `${addEventFormData.imageThree ? '100%' : '20vh'}`}} >
                {!imageUrls[2] && <ImageTypoH2>Upload an image</ImageTypoH2>}
                <input name='imageThree' type='file' accept='image/*' style={{position: "absolute", top: 0, width: "100%", height: "100%", opacity: "0"}} onChange={(event) => handleFileChange(event, 2)}></input>
                <img src={imageUrls[2]} style={{height: "100%", width: "100%"}} ></img>
            </PictureHolder>                               

            <PrimaryButton>ADD EVENT</PrimaryButton>
        </BaseForm>
        </>
    )

}

export default AddEventForm