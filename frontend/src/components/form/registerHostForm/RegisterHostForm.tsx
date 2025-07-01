import { useRef, useState } from 'react'
import Roles from '../../../../enums/Roles.ts'
import { HeaderWrapper, ImageTypoH2, PictureHolder, TermsWrapper } from './registerHostForm.Styles.ts'
import { Checkbox, Fade } from '@mui/material'
import { TypoBody1, TypoBody2, TypoH1, TypoWarning } from '../../../styled-components/styledTypographie.ts'
import { EmptyValueEffectType, preventWrongInputType, validateGuestForm } from '../../../functions/validation/guestFormValidation.ts'
import { boxShadowAnimation, WarningBox } from '../registerGuestForm/registerGuestForm.Styles.ts'
import dayjs, { Dayjs } from 'dayjs'
import { useNavigate } from 'react-router-dom'
import BaseForm from '../../../common/form/baseForm/BaseForm.tsx'
import FormHeader from '../../../common/form/formHeader/FormHeader.tsx'
import FormTextField from '../../../common/form/formTextField/FormTextField.tsx'
import LocalizedDatePicker from '../../../common/form/datePicker/DatePicker.tsx'
import PrimaryButton from '../../../common/button/primaryButton/PrimaryButton.tsx'
import { Height } from '@mui/icons-material'
import { WhiteLine } from '../../ui/venueCards/VenueCards.Style.ts'

const apiUrl =import.meta.env.VITE_APP_API_URL

function RegisterHostForm() {

    const navigateTo = useNavigate()

    const [check, setCheck] = useState<boolean>(false)

        const [popUpFlag, setPopUpFlag] = useState<boolean>(false)
    
        const [warningMessage, setWarningMessage] = useState<string>("")

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

    
    const handleDateChange = (date: Dayjs | null) => {
        setHostRegistrationData((prevData) => ({
            ...prevData,
            birthday: date?.format('YYYY-MM-DD') || null
        }));
    }


    type HostRegistrationData = {
        firstname: string;
        lastname: string;
        email: string;
        gender: string;
        birthday: string | null;
        username: string;
        password: string;
        confirmPassword: string;
        role: Roles;
    };

    const [hostRegistrationData, setHostRegistrationData] = useState<HostRegistrationData>({
        firstname: "",
        lastname: "",
        email: "",
        gender: "",
        birthday: "",
        username: "",
        password: "",
        confirmPassword: "",
        role: Roles.HOST
    })


    type VenueRegistrationData = {
        name: string,
        type: string,
        capacity: string,
        city: string,
        street: string,
        housenumber: string,
        postcode: string,
    };

    const [venueRegistrationData, setVenueRegistrationData] = useState<VenueRegistrationData>({
        name: "",
        type: "",
        capacity: "",
        city: "",
        street: "",
        housenumber: "",
        postcode: "",
    })    


    type VenueBlobs = {
        imageOne: Blob | null,
        imageTwo: Blob | null,
        imageThree: Blob | null,
    }

    const [venueBlobs, setVenueBlobs] = useState<VenueBlobs>({
        imageOne: null,
        imageTwo: null,
        imageThree: null,
    })

    const inputRefs = useRef<(HTMLInputElement | HTMLButtonElement | HTMLDivElement | HTMLOptionElement)[]>([])

    const [emptyValueEffect, setEmptyValueEffect] = useState<EmptyValueEffectType[]>(
        Array(25).fill({ animation: "" }) // 14 positions to set the effect independent from each other
    )    


    const handleHostDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const name = event.target.name
        const value = event.target.value
        setHostRegistrationData((prevData) => ({
            ...prevData,
            [name]: preventWrongInputType(name, value),
        }));
    }

    const handleVenueDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const name = event.target.name
        const value = event.target.value
        setVenueRegistrationData((prevData) => ({
            ...prevData,
            [name]: preventWrongInputType(name, value),
        }));
    }    

    const handleCheckbox = () => setCheck(prevdata => !prevdata)

    console.log(emptyValueEffect)

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        console.log(venueBlobs.imageTwo)

        console.log(inputRefs)

        /** 
        const isValid1 = await validateGuestForm({formData: hostRegistrationData, setEmptyValueEffect, setPopUpFlag, setWarningMessage, boxShadowAnimation, inputRefs, check})

        if (!isValid1) {
            // alert("Input1 not valid")
            console.log("Input1 not valid")
            return
        }         
        */
        

        async function fetchingData() {

            const formData = new FormData();
            formData.append("hostRegistrationData", new Blob([JSON.stringify(hostRegistrationData)], { type: "application/json" }));
            formData.append("venueRegistrationData", new Blob([JSON.stringify(venueRegistrationData)], { type: "application/json" }));
            formData.append("imagesRegistrationData", venueBlobs.imageOne)
            formData.append("imagesRegistrationData", venueBlobs.imageTwo)
            formData.append("imagesRegistrationData", venueBlobs.imageThree)

            const response = await fetch(`${apiUrl}/register/host`,
                {
                    method: "POST",
                    body: formData,
                }
            )
            // reseting form
            setCheck(false)
            console.log(venueRegistrationData.capacity)
            // navigateTo("/login")
        }
        fetchingData()
    }


    const [imageUrls, setImageUrls] = useState<string[]>([])


    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
      if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        console.log(file)
        setVenueBlobs((prevData) => ({
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
    
    const typeList = ["Nightclub", "Bar", "Restaurant", "Gallery", "Theater", "Hostel"]

    const cityList = ["berlin"]

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
        <HeaderWrapper>
            <TypoH1>REGISTRATION</TypoH1>
        </HeaderWrapper>
            
        <BaseForm onSubmit={handleSubmit}>
                    
            <FormHeader>BASE</FormHeader>
                           
            <FormTextField inputRef={domElement => inputRefs.current.push(domElement as HTMLInputElement)} name='firstname'helperText='firstname*' required value={hostRegistrationData.firstname} onChange={handleHostDataChange} sx={{'& .MuiInputBase-input': emptyValueEffect[0]}} key='textfield-firstname'/>
                    
            <FormTextField inputRef={domElement => inputRefs.current.push(domElement as HTMLInputElement)} name='lastname' helperText='lastname*' required value={hostRegistrationData.lastname} onChange={handleHostDataChange} sx={{'& .MuiInputBase-input': emptyValueEffect[1]}} key='textfield-lastname'/>
                    
            <FormTextField inputRef={domElement => inputRefs.current.push(domElement as HTMLInputElement)} name='email' helperText='email*' required value={hostRegistrationData.email} onChange={handleHostDataChange} sx={{'& .MuiInputBase-input': emptyValueEffect[2]}} key='textfield-email'/>
                        
            <FormTextField inputRef={domElement => inputRefs.current.push(domElement as HTMLOptionElement)} name='gender' helperText='gender' select slotProps={{select: {native: true}}} value={hostRegistrationData.gender} onChange={handleHostDataChange} sx={{'& .MuiInputBase-input': emptyValueEffect[3]}} key='textfield-gender'> {/*select (non-native) prop sorgt für overlay und stören der Layouts*/} {/* Lösung von https://stackblitz.com/run?file=Demo.tsx Zeile 47 - 64)*/}
                <option value='' disabled>{"▒"}</option>
                {genderList.map((gender) => <option value={gender} key={gender}>{gender}</option>)}
            </FormTextField>
                              
            <LocalizedDatePicker inputRef={domElement => inputRefs.current.push(domElement as HTMLInputElement)} helperText='birthday' onChange={handleDateChange} name='birthday' format='YYYY-MM-DD' sx={{'& .MuiInputBase-input': emptyValueEffect[4]}} key={"CostumDatePicker"} maxDate={dayjs(Date.now() - 31556926 * 18 * 1000)} minDate={dayjs("1950-01-01T00:00:00.000") }></LocalizedDatePicker> {/** maxDate={dayjs.unix(Date.now() - 31556926)} */}
                            
            <FormTextField inputRef={domElement => inputRefs.current.push(domElement as HTMLInputElement)} name='username' helperText='username*' required value={hostRegistrationData.username} onChange={handleHostDataChange} sx={{'& .MuiInputBase-input': emptyValueEffect[5]}} key='textfield-username'/>
                           
            <FormTextField inputRef={domElement => inputRefs.current.push(domElement as HTMLInputElement)} name= 'password' type='password' helperText ='password*' required value={hostRegistrationData.password} onChange={handleHostDataChange} sx={{'& .MuiInputBase-input': emptyValueEffect[6]}} key='textfield-password'/>
                            
            <FormTextField inputRef={domElement => inputRefs.current.push(domElement as HTMLInputElement)} name= 'confirmPassword' type='password' helperText ='confirm password*' required value={hostRegistrationData.confirmPassword} onChange={handleHostDataChange} sx={{'& .MuiInputBase-input': emptyValueEffect[7]}} key='textfield-confirmPassword'/>
                              
            <FormHeader>VENUE RELATED</FormHeader>
                    
            <FormTextField inputRef={domElement => inputRefs.current.push(domElement as HTMLInputElement)} name='name'helperText='name of venue*' required value={venueRegistrationData.name} onChange={handleVenueDataChange} sx={{'& .MuiInputBase-input': emptyValueEffect[8]}} key='textfield-name'/>
                    
                    
            <FormTextField inputRef={domElement => inputRefs.current.push(domElement as HTMLInputElement)} name='type'helperText='type of venue*' required select slotProps={{select: {native: true}}} value={venueRegistrationData.type} onChange={handleVenueDataChange} sx={{'& .MuiInputBase-input': emptyValueEffect[9]}} key='textfield-type'>
                <option value='' disabled>{"▒"}</option>
                {typeList.map((venue) => <option value={venue} key={venue}>{venue}</option>)}
            </FormTextField>
                     
            <FormTextField inputRef={domElement => inputRefs.current.push(domElement as HTMLInputElement)} name='capacity' helperText='capacity' value={venueRegistrationData.capacity} onChange={handleVenueDataChange} sx={{'& .MuiInputBase-input': emptyValueEffect[10]}} key='textfield-capacity'/>
                    
            <FormHeader>ADDRESS OF VENUE</FormHeader>
                    
            <FormTextField inputRef={domElement => inputRefs.current.push(domElement as HTMLInputElement)} name='city'helperText='city*' select slotProps={{select: {native: true}}} required value={venueRegistrationData.city} onChange={handleVenueDataChange} sx={{'& .MuiInputBase-input': emptyValueEffect[11]}} key='textfield-city'>
                <option value='' disabled>{"▒"}</option>
                {cityList.map((city) => <option value={city} key={city}>{city}</option>)}
            </FormTextField>
                    
            <FormTextField inputRef={domElement => inputRefs.current.push(domElement as HTMLInputElement)} name='street'helperText='street*' required value={venueRegistrationData.street} onChange={handleVenueDataChange} sx={{'& .MuiInputBase-input': emptyValueEffect[12]}} key='textfield-firstname'/>
                    
            <FormTextField inputRef={domElement => inputRefs.current.push(domElement as HTMLInputElement)} name='housenumber'helperText='housenumber*' required value={venueRegistrationData.housenumber} onChange={handleVenueDataChange} sx={{'& .MuiInputBase-input': emptyValueEffect[13]}} key='textfield-firstname'/>
                    
            <FormTextField inputRef={domElement => inputRefs.current.push(domElement as HTMLInputElement)} name='postcode'helperText='postcode*' required value={venueRegistrationData.postcode} onChange={handleVenueDataChange} sx={{'& .MuiInputBase-input': emptyValueEffect[14]}} key='textfield-firstname'/>
                    
            <PictureHolder ref={domElement => inputRefs.current.push(domElement as HTMLDivElement)} sx={{...emptyValueEffect[15], height: `${venueBlobs.imageOne ? '100%' : '20vh'}`}} >
                {!imageUrls[0] && <ImageTypoH2>Upload an image</ImageTypoH2>}
                <input name='imageOne' type='file' accept='image/*' style={{position: "absolute", top: 0, width: "100%", height: "100%", opacity: "0"}} onChange={(event) => handleFileChange(event, 0)}></input>
                <img src={imageUrls[0]} style={{height: "100%", width: "100%"}} ></img>
            </PictureHolder>
                        
            <PictureHolder ref={domElement => inputRefs.current.push(domElement as HTMLDivElement)} sx={{...emptyValueEffect[16], height: `${venueBlobs.imageTwo ? '100%' : '20vh'}`}}>
                {!imageUrls[1] && <ImageTypoH2>Upload an image</ImageTypoH2>}
                <input name='imageTwo' type='file' accept='image/*' style={{position: "absolute", top: 0, width: "100%", height: "100%", opacity: "0"}} onChange={(event) => handleFileChange(event, 1)}></input>
                <img src={imageUrls[1]} style={{height: "100%", width: "100%"}} ></img>
            </PictureHolder>
                    
            <PictureHolder ref={domElement => inputRefs.current.push(domElement as HTMLDivElement)} sx={{...emptyValueEffect[17], height: `${venueBlobs.imageThree ? '100%' : '20vh'}`}}>
                {!imageUrls[2] && <ImageTypoH2>Upload an image</ImageTypoH2>}
                <input name='imageThree' type='file' accept='image/*' style={{position: "absolute", top: 0, width: "100%", height: "100%", opacity: "0"}} onChange={(event) => handleFileChange(event, 2)}></input>
                <img src={imageUrls[2]} style={{height: "100%", width: "100%"}} ></img>
            </PictureHolder>

            <TermsWrapper>
                <Checkbox inputRef={domElement => inputRefs.current.push(domElement as HTMLInputElement)} checked={check} onChange={handleCheckbox} sx={emptyValueEffect[20]} key={'checkbox'}/>
                <TypoBody2>I have read and agree to the Terms of Use</TypoBody2>
            </TermsWrapper>
                          
            <PrimaryButton onClick={handleSubmit}>
                create account
                <Fade in={popUpFlag} timeout={{enter: 300, exit: 300}}>
                    <WarningBox>
                        <TypoWarning>{warningMessage}</TypoWarning>
                    </WarningBox>
                </Fade>                            
            </PrimaryButton>
        </BaseForm>  
        </>
    )
}



export default RegisterHostForm
