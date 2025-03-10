import { useState } from 'react'
import Roles from '../../../../enums/Roles'
import { CategoryHeader, FormContainer, ImageTypoH2, Line, PictureHolder, TermsWrapper, TextfieldLong, TextfieldMedium, TextfieldShort } from './registerHostForm.Styles.ts'
import { Checkbox } from '@mui/material'
import { TypoBody2, TypoH2 } from '../../../styled-components/styledTypographie'
import { SubmitButton } from '../contactForm/ContactForm.Styled.ts'






function RegisterHostForm() {

    type TermsAccepted = boolean;
    const [termsAccepted, setTermsAccepted] = useState<TermsAccepted>(false)

    type Date = {
        day: string,
        month: string,
        year: string,
    }
    const [date, setDate] = useState<Date>({
        day: "",
        month: "",
        year: "",
    })

    type InputEvent = React.ChangeEvent<HTMLInputElement>

    const handleDateChange = (event: InputEvent) => {

        const name = event.target.name
        const value = event.target.value
        setDate((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const SetNewDate = () => {
        setFormData((prevData) => ({
            ...prevData,
            birthday: `${date.day}-${date.month}-${date.year}`
        }))
        console.log(formData.birthday)
    }

    type FormData = {
        firstname: string;
        lastname: string;
        email: string;
        emailConfirm: string;
        gender: string;
        birthday: string;
        username: string;
        password: string;
        nameOfVenue: string,
        typeOfVenue: string,
        capacity: string,
        cityOfVenue: string,
        streetOfVenue: string,
        housenumberOfVenue: string,
        postcodeOfVenue: number | null,
        imageOne: File | null
        imageTwo: File | null
        imageThree: File | null
        role: Roles;
    };

    const [formData, setFormData] = useState<FormData>({
        firstname: "",
        lastname: "",
        email: "",
        emailConfirm: "",
        gender: "",
        birthday: "",
        username: "",
        password: "",
        nameOfVenue: "",
        typeOfVenue: "",
        capacity: "",
        cityOfVenue: "",
        streetOfVenue: "",
        housenumberOfVenue: "",
        postcodeOfVenue: null,
        imageOne: null,
        imageTwo: null,
        imageThree: null,
        role: Roles.HOST
    })


    const handleChange = (event: InputEvent) => {

        const name = event.target.name
        const value = event.target.value
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleCheckbox = () => {
        if (!termsAccepted) {
        setTermsAccepted(true)
        } else {
            setTermsAccepted(false)
        }
    }


    type ButtonEvent = React.MouseEvent<HTMLButtonElement>

    const handleSubmit = (event: ButtonEvent) => {
        event.preventDefault();

        async function fetchingData() {

            const formDataObject = new FormData();
            formDataObject.append("firstname", formData.firstname)
            formDataObject.append("lastname", formData.lastname)
            formDataObject.append("email", formData.email)
            formDataObject.append("emailConfirm", formData.emailConfirm)
            formDataObject.append("gender", formData.gender)
            formDataObject.append("birthday", formData.birthday)
            formDataObject.append("username", formData.username)
            formDataObject.append("password", formData.password)
            formDataObject.append("nameOfVenue", formData.nameOfVenue)
            formDataObject.append("typeOfVenue", formData.typeOfVenue)
            formDataObject.append("capacity", formData.capacity)
            formDataObject.append("cityOfVenue", formData.cityOfVenue)
            formDataObject.append("streetOfVenue", formData.streetOfVenue)
            formDataObject.append("housenumberOfVenue", formData.housenumberOfVenue)
            formDataObject.append("postcodeOfVenue", formData.postcodeOfVenue)
            formDataObject.append("role", formData.role)
            formDataObject.append("images[]", formData.imageOne)
            formDataObject.append("images[]", formData.imageTwo)
            formDataObject.append("images[]", formData.imageThree)

            const apiUrl =import.meta.env.VITE_APP_API_URL

            const response = await fetch(`${apiUrl}/register/host`,
                {
                    method: 'POST',
                    body: formDataObject,
                }
            )
            if (!response.ok)
                {
                    alert( await response.text())
                }
            // reseting form

            /*
            setFormData({
                firstname: "",
                lastname: "",
                email: "",
                emailConfirm: "",
                gender: "",
                birthday: "",
                username: "",
                password: "",
                nameOfVenue: "",
                typeOfVenue: "",
                capacity: "",
                cityOfVenue: "",
                streetOfVenue: "",
                housenumberOfVenue: "",
                postcodeOfVenue: "",
                imageOne: null,
                imageTwo: null,
                imageThree: null,
                role: Roles.HOST
            })
            */

            /*
            setImageUrls([])
            */

            setTermsAccepted(false)
        }
        fetchingData()
    }


    const [imageUrls, setImageUrls] = useState<string[]>([])


    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
      if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        console.log(file)
        setFormData((prevData) => ({
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
        

    const genderList = ["male","female","divers"]
    
    const typeOfVenueList = ["Nightclub", "Bar", "Restaurant", "Gallery", "Theater", "Hostel"]

    const cityList = ["berlin"]
    
    const disctrictList = [
        "Mitte",
        "Friedrichshain-Kreuzberg",
        "Pankow",
        "Charlottenburg-Wilmersdorf",
        "Spandau",
        "Steglitz-Zehlendorf",
        "Tempelhof-Schöneberg",
        "Neukölln",
        "Treptow-Köpenick",
        "Marzahn-Hellersdorf",
        "Lichtenberg",
        "Reinickendorf"
      ]; 

    const dayList: number[] = [];
    const monthList: number[] = [];
    const yearList: number[] = [];

    type FillList = {
        list: number[],
        from: number,
        to: number,
    };
    function fillList({ list, from, to }: FillList): void {
        if(from < to) {
            for(let i = from; i <= to; i++) list.push(i)
        } else if(from > to) {
            for(let i = from; i >= to; i--) list.push(i)} 
    }

    fillList({ list: dayList, from: 1, to: 31});
    fillList({ list: monthList, from: 1, to: 12});
    fillList({ list: yearList, from: 2024, to: 1950});


    return (
        <>
            <FormContainer>
                <form typeof='submit' onSubmit={handleSubmit}>
                    <Line>
                        <CategoryHeader><TypoH2>BASE</TypoH2></CategoryHeader>
                    </Line>
                    <Line>
                        <TextfieldLong name='firstname'helperText='firstname*' required variant='standard' value={formData.firstname} onChange={handleChange} key='textfield-firstname'/>
                    </Line>
                    <Line>
                        <TextfieldLong name='lastname' helperText='lastname*' required variant='standard' required value={formData.lastname} onChange={handleChange} key='textfield-lastname'/>
                    </Line>
                    <Line>
                        <TextfieldLong name='email' helperText='email*' required variant='standard' value={formData.email} onChange={handleChange} key='textfield-email'/>
                    </Line>
                    <Line>
                        <TextfieldLong name='emailConfirm' helperText='confirm email*' required variant='standard' value={formData.emailConfirm} onChange={handleChange} key='textfield-confirmEmail' />
                    </Line>
                    <Line>
                        <TextfieldMedium name='gender' helperText='gender' variant='standard' select slotProps={{select: {native: true}}} value={formData.gender} onChange={handleChange} key='textfield-gender'> {/*select (non-native) prop sorgt für overlay und stören der Layouts*/} {/* Lösung von https://stackblitz.com/run?file=Demo.tsx Zeile 47 - 64)*/}
                                <option value='' disabled>{"▒"}</option>
                                {genderList.map((gender) => <option value={gender} key={gender}>{gender}</option>)}
                        </TextfieldMedium>

                        <TextfieldShort name='day' helperText='day' select slotProps={{select: {native: true}}} value={date.day} onChange={handleDateChange} onBlur={SetNewDate} key='textfield-day' id='textfield-day'>
                                <option value='' disabled>{"▒"}</option>
                                {dayList.map((day) => <option value={day} key={day}>{day}</option>)}
                        </TextfieldShort>

                        <TextfieldShort name='month' helperText='month' select slotProps={{select: {native: true}}} value={date.month} onChange={handleDateChange} onBlur={SetNewDate} key='textfield-month' id='textfield-month'>
                                <option value='' disabled>{"▒"}</option>
                                {monthList.map((month) => <option value={month} key={month}>{month}</option>)}
                        </TextfieldShort>

                        <TextfieldShort name='year' helperText='year' select slotProps={{select: {native: true}}} value={date.year} onChange={handleDateChange} onBlur={SetNewDate} key='textfield-year' id='textfield-year'>
                                <option value='' disabled>{"▒"}</option>
                                {yearList.map((year) => <option value={year} key={year}>{year}</option>)}
                        </TextfieldShort>
                    </Line>
                    <Line>
                        <TextfieldMedium name='username' helperText='username*' required value={formData.username} onChange={handleChange} key='textfield-username'/>
                    </Line>
                    <Line>
                        <TextfieldMedium name= 'password' helperText ='password*' required value={formData.password} onChange={handleChange} key='textfield-password'></TextfieldMedium>
                        <TermsWrapper>
                            <Checkbox required checked={termsAccepted} onChange={handleCheckbox}/>
                            <TypoBody2>I have read and agree to the Terms of Use</TypoBody2>
                        </TermsWrapper>
                    </Line>
                    <Line>
                        <CategoryHeader><TypoH2>VENUE RELATED</TypoH2></CategoryHeader>
                    </Line>
                    <Line>
                        <TextfieldLong name='nameOfVenue'helperText='name of venue*' required variant='standard' value={formData.nameOfVenue} onChange={handleChange} key='textfield-nameOfVenue'/>
                    </Line>
                    <Line>
                        <TextfieldLong name='typeOfVenue'helperText='type of venue*' required variant='standard' select slotProps={{select: {native: true}}} value={formData.typeOfVenue} onChange={handleChange} key='textfield-typeOfVenue'>
                            <option value='' disabled>{"▒"}</option>
                            {typeOfVenueList.map((venue) => <option value={venue} key={venue}>{venue}</option>)}
                        </TextfieldLong>
                    </Line>
                    <Line>
                    <TextfieldMedium name='capacity' helperText='capacity' variant='standard' value={formData.capacity} onChange={handleChange} key='textfield-capacity'></TextfieldMedium>
                    </Line>
                    <CategoryHeader><TypoBody2>ADDRESS OF VENUE</TypoBody2></CategoryHeader>
                    <Line>
                        <TextfieldLong name='cityOfVenue'helperText='city*' select slotProps={{select: {native: true}}} required variant='standard' value={formData.cityOfVenue} onChange={handleChange} key='textfield-cityOfVenue'>
                            <option value='' disabled>{"▒"}</option>
                            {cityList.map((city) => <option value={city} key={city}>{city}</option>)}
                        </TextfieldLong>
                    </Line>
                    <Line>
                        <TextfieldLong name='streetOfVenue'helperText='street*' required variant='standard' value={formData.streetOfVenue} onChange={handleChange} key='textfield-firstname'/>
                    </Line>
                    <Line>
                        <TextfieldMedium name='housenumberOfVenue'helperText='housenumber*' required variant='standard' value={formData.housenumberOfVenue} onChange={handleChange} key='textfield-firstname'/>
                        <TextfieldMedium name='postcodeOfVenue'helperText='postcode*' required variant='standard' value={formData.postcodeOfVenue} onChange={handleChange} key='textfield-firstname'/>
                    </Line>
                    <Line>
                        <PictureHolder>
                            {!imageUrls[0] && <ImageTypoH2>Upload an image</ImageTypoH2>}
                            <input name='imageOne' type='file' accept='image/*' style={{position: "absolute", top: 0, width: "100%", height: "100%", opacity: "0"}} onChange={(event) => handleFileChange(event, 0)}></input>
                            <img src={imageUrls[0]} style={{height: "100%", width: "100%"}} ></img>
                        </PictureHolder>
                    </Line>
                    <Line>
                    <PictureHolder>
                        {!imageUrls[1] && <ImageTypoH2>Upload an image</ImageTypoH2>}
                            <input name='imageTwo' type='file' accept='image/*' style={{position: "absolute", top: 0, width: "100%", height: "100%", opacity: "0"}} onChange={(event) => handleFileChange(event, 1)}></input>
                            <img src={imageUrls[1]} style={{height: "100%", width: "100%"}} ></img>
                        </PictureHolder>
                    </Line>
                    <Line>
                        <PictureHolder>
                            {!imageUrls[2] && <ImageTypoH2>Upload an image</ImageTypoH2>}
                            <input name='imageThree' type='file' accept='image/*' style={{position: "absolute", top: 0, width: "100%", height: "100%", opacity: "0"}} onChange={(event) => handleFileChange(event, 2)}></input>
                            <img src={imageUrls[2]} style={{height: "100%", width: "100%"}} ></img>
                        </PictureHolder>
                    </Line>
                    <SubmitButton onClick={handleSubmit}>register</SubmitButton>
                </form>
            </FormContainer>

        </>
    )
}



export default RegisterHostForm
