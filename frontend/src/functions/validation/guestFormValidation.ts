import { Keyframes } from "@emotion/react"
import EmptyValueEffectType from "../../components/form/registerGuestForm/RegisterGuestForm"
import Roles from "../../../enums/Roles";
import { SetStateAction } from "react";

export type GuestFormData = {
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

type AddEventForm = {
    venueName: string,
    name: string,
    startTimeDate: string
    endTimeDate: string
    price: string,
    description: string,
    imageOne: Blob | null,
    imageTwo: Blob | null,
    imageThree: Blob | null,
}

type VenueRegistrationData = {
    name: string,
    type: string,
    capacity: string,
    city: string,
    street: string,
    housenumber: string,
    postalCode: string,
};

type VenueBlobs = {
    imageOne: Blob | null,
    imageTwo: Blob | null,
    imageThree: Blob | null,
}

export type EmptyValueEffectType = {
    animation: string;
    }

type ValidateFormType = {
    formData: GuestFormData | HostRegistrationData | AddEventForm | VenueRegistrationData | VenueBlobs
    formData2: null | VenueRegistrationData
    setEmptyValueEffect: React.Dispatch<React.SetStateAction<EmptyValueEffectType[]>>,
    setPopUpFlag: React.Dispatch<SetStateAction<boolean>>
    setWarningMessage: React.Dispatch<SetStateAction<string>>
    boxShadowAnimation: Keyframes,
    inputRefs:React.MutableRefObject<(HTMLInputElement | HTMLButtonElement | HTMLDivElement | HTMLOptionElement)[]>,
    check: boolean
}

// I know that this is a mess 

export async function validateGuestForm({formData, formData2, setEmptyValueEffect, setPopUpFlag, setWarningMessage, boxShadowAnimation, inputRefs, check}: ValidateFormType) {  

    /** checking if required fields got a value */
    for (let i = 0; i <= Object.values(formData).length - 1; i++) 
        {
            console.log(Object.values(formData)[i])
            /** checking if required fields value is empty */
            if (Object.values(formData)[i] == "" && Object.keys(formData)[i] != "gender" && Object.keys(formData)[i] != "birthday") 
            {
                console.log("Object.keys(formData)[i]: ", Object.keys(formData)[i])
                setEmptyValueEffect((Prevdata) => {
                    const updateData = [...Prevdata]
                    updateData[i] =  {animation: `${boxShadowAnimation} 0.5s ease-out`}
                    // console.log("updateData: ", updateData)
                    return updateData;
                })  
                setTimeout(() => {
                    setEmptyValueEffect((Prevdata) => {
                        const updateData = [...Prevdata]
                        updateData[i] =  {animation: ""}
                        return updateData;
                    })  
                }, 500)
                inputRefs?.current[i].focus()
                console.log("inputRefs.current[i]: ", inputRefs?.current[i])
                return;
            }
            if (Object.values(formData)[i] instanceof Blob && Object.values(formData)[i].size === 0 || Object.values(formData)[i] == null) 
                {
                    console.log("im here!!" + i)
                    console.log("Object.keys(formData)[i]: ", Object.keys(formData)[i])
                    setEmptyValueEffect((Prevdata) => {
                        const updateData = [...Prevdata]
                        updateData[i] =  {animation: `${boxShadowAnimation} 0.5s ease-out`}
                        // console.log("updateData: ", updateData)
                        return updateData;
                    })  
                    setTimeout(() => {
                        setEmptyValueEffect((Prevdata) => {
                            const updateData = [...Prevdata]
                            updateData[i] =  {animation: ""}
                            return updateData;
                        })  
                    }, 500)
                    inputRefs?.current[i].scrollIntoView({block: "center"})
                    console.log("inputRefs.current[i]: ", inputRefs?.current[i])
                    return;
                }
        }

    console.log("formData2" + formData2)
    // console.log("formData2.length" +  Object.values(formData2).length)
    //console.log(Object.values(formData2))

    if (formData2 != null) {
        for (let i = 8; i <= Object.values(formData2).length + 7 - 1; i++) 
            {
                console.log(Object.keys(formData2))
                /** checking if required fields value is empty */
                if (Object.values(formData2)[i - 8] == "") 
                {
                    console.log("Object.keys(formData2)[i]: ", Object.keys(formData2)[i - 8])
                    console.log("im here!! formData2 " + i)
                    setEmptyValueEffect((Prevdata) => {
                        const updateData = [...Prevdata]
                        updateData[i] =  {animation: `${boxShadowAnimation} 0.5s ease-out`}
                        // console.log("updateData: ", updateData)
                        return updateData;
                    })  
                    setTimeout(() => {
                        setEmptyValueEffect((Prevdata) => {
                            const updateData = [...Prevdata]
                            updateData[i] =  {animation: ""}
                            return updateData;
                        })  
                    }, 500)
                    inputRefs?.current[i].focus()
                    console.log("inputRefs.current[i]: ", inputRefs?.current[i])
                    return;
                }
                if (Object.values(formData2)[i] instanceof Blob && Object.values(formData2)[i].size === 0 || Object.values(formData2)[i] == null) 
                    {
                        
                        console.log("Object.keys(formData2)[i]: ", Object.keys(formData)[i])
                        setEmptyValueEffect((Prevdata) => {
                            const updateData = [...Prevdata]
                            updateData[i] =  {animation: `${boxShadowAnimation} 0.5s ease-out`}
                            // console.log("updateData: ", updateData)
                            return updateData;
                        })  
                        setTimeout(() => {
                            setEmptyValueEffect((Prevdata) => {
                                const updateData = [...Prevdata]
                                updateData[i] =  {animation: ""}
                                return updateData;
                            })  
                        }, 500)
                        inputRefs?.current[i].scrollIntoView({block: "center"})
                        console.log("inputRefs.current[i]: ", inputRefs?.current[i])
                        return;
                    }
            }    
        }    



        // return true for formData of Type AddEventForm - the other types get checked further
        if ( Object.keys(formData).includes("price") ) return true
        
        const apiUrl =import.meta.env.VITE_APP_API_URL
        const result = await fetch(`${apiUrl}/register/checkIfUserExists`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: formData.username
            })
        if (!result.ok) {
            console.log(formData.username)
            console.log(result.status)
            console.log("im here")
            setPopUpFlag(true)
            setWarningMessage("username already taken")
            setTimeout(() => {
                setPopUpFlag(false)
            } ,500)
        }
        if (result.ok) {
            /** checking if checkbox is checked */        
            if (formData.password != formData.confirmPassword)
                {
                    setPopUpFlag(true)
                    setWarningMessage("password do not match")
                    setEmptyValueEffect((Prevdata: EmptyValueEffectType[]) => {
                        const updateData = [...Prevdata]
                        updateData[6] =  {animation: `${boxShadowAnimation} 0.5s ease-out`}
                        updateData[7] =  {animation: `${boxShadowAnimation} 0.5s ease-out`}
                        console.log("updateData: ", updateData)
                        return updateData;
                    })
                    setTimeout(() => {
                        setPopUpFlag(false)
                        setEmptyValueEffect((Prevdata) => {
                            const updateData = [...Prevdata]
                            updateData[6] =  {animation: ""}
                            updateData[7] =  {animation: ""}
                            return updateData;
                        })  
                    }, 500)
                //    inputRefs?.current[6].scrollIntoView({block: "center"})
                    return;
                }           
            /** checking if checkbox is checked */ /** works, but bad solution */           
            if (check == false)
            {
                console.log("is false")
                setEmptyValueEffect((Prevdata: EmptyValueEffectType[]) => {
                    const updateData = [...Prevdata]
                    updateData[20] =  {animation: `${boxShadowAnimation} 0.5s ease-out`}
                    console.log("updateData: ", updateData)
                    console.log("fx setted")
                    return updateData;
                })
                setTimeout(() => {
                    setEmptyValueEffect((Prevdata) => {
                        const updateData = [...Prevdata]
                        updateData[20] =  {animation: ""}
                        return updateData;
                    })  
                }, 500)
                inputRefs?.current[20].focus()
                return;
            }     
            return true
        }        
    }


/* 
* replacing everything that is not alphabetic
* the ^ (caret) works here as a negation of the listing
* -> everything that is not a-z or A-Z 
*/
export function removeNonAlphabetic(value: string): string {
  return value.replace(/[^a-zA-Z]/g, "");
}

export function removeNonNumeric(value: string): string {
  return value.replace(/[^0-9]/g, "");
}

function removeSpaces(value: string) {
  return value.replace(/\s/g, "");
}

export function removeCommonNonNameChars(value: string): string {
  return value.replace(/[^\p{L}\s'-]/gu, "");
}

function removeNonCommonHouseNumberChars(value: string): string {
  return value.replace(/[^0-9a-zA-Z\s/-]/g, '');
}
    
export function preventWrongInputType(name: string, value: string) {

    // guestForm
    if (name == "firstname") {return removeCommonNonNameChars(value)}
    if (name == "lastname") {return removeCommonNonNameChars(value)}
    if (name == "email") {return removeSpaces(value)}
    if (name == "username") {return removeSpaces(value)}
    if (name == "password") {return removeSpaces(value)}
    if (name == "confirmPassword") {return removeSpaces(value)}

    // extra fields of hostForm
    if (name == "capacity") {return removeNonNumeric(value)}
    if (name == "street") {return removeNonAlphabetic(value)}
    if (name == "housenumber") {return removeNonCommonHouseNumberChars(value)}
    if (name == "postalCode") {return removeNonNumeric(value)}

    else return value

} 

