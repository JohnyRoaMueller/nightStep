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

type HostFormData = {
    firstname: string;
    lastname: string;
    email: string;
    gender: string;
    birthday: string | null;
    username: string;
    password: string;
    confirmPassword: string;
    nameOfVenue: string,
    typeOfVenue: string,
    capacity: string,
    cityOfVenue: string,
    streetOfVenue: string,
    housenumberOfVenue: string,
    postcodeOfVenue: string,
    imageOne: Blob
    imageTwo: Blob
    imageThree: Blob
    role: Roles;
};

export type EmptyValueEffectType = {
    animation: string;
    }

type ValidateFormType = {
    formData: GuestFormData | HostFormData,
    setEmptyValueEffect: React.Dispatch<React.SetStateAction<EmptyValueEffectType[]>>,
    setPopUpFlag: React.Dispatch<SetStateAction<boolean>>
    setWarningMessage: React.Dispatch<SetStateAction<string>>
    boxShadowAnimation: Keyframes,
    inputRefs:React.MutableRefObject<(HTMLInputElement | HTMLButtonElement | HTMLDivElement | HTMLOptionElement)[]>,
    check: boolean
}
export async function validateGuestForm({formData, setEmptyValueEffect, setPopUpFlag, setWarningMessage, boxShadowAnimation, inputRefs, check}: ValidateFormType) {  

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
                    console.log("updateData: ", updateData)
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
            if (Object.values(formData)[i] instanceof Blob && Object.values(formData)[i].size === 0) 
                {
                    console.log("im here!!" + i)
                    console.log("Object.keys(formData)[i]: ", Object.keys(formData)[i])
                    setEmptyValueEffect((Prevdata) => {
                        const updateData = [...Prevdata]
                        updateData[i] =  {animation: `${boxShadowAnimation} 0.5s ease-out`}
                        console.log("updateData: ", updateData)
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


export function preventWrongInputType(name: string, value: string) {
    // preventNonAlphabeticInput //
    if (name === 'firstname' || name === 'lastname') 
        {
            /** replacing everything that is not alphabetic
             * the ^ (caret) works here as a negation of the listing
             * -> everything that is not a-z or A-Z
             */
            value = value.replace(/[^a-zA-Z]/g, "")
        }
    // preventNonNumericalInput //
    if (name === 'postcodeOfVenue' || name === 'capacity') 
        {
            value = value.replace(/[^0-9]/g, "")
        }
    return value

}
    

