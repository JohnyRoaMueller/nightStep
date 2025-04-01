import { Keyframes } from "@emotion/react"
import EmptyValueEffectType from "../../components/form/registerGuestForm/RegisterGuestForm"
import Roles from "../../../enums/Roles";

export type GuestFormData = {
    firstname: string;
    lastname: string;
    email: string;
    gender: string;
    birthday: string | null;
    username: string;
    password: string;
    passwordConfirm: string;
    role: Roles;
};

export type EmptyValueEffectType = {
    animation: string;
    }

type ValidateGuestFormType = {
    guestFormData: GuestFormData,
    setEmptyValueEffect: React.Dispatch<React.SetStateAction<EmptyValueEffectType[]>>,
    boxShadowAnimation: Keyframes,
    inputRefs:React.MutableRefObject<(HTMLInputElement | HTMLButtonElement | HTMLDivElement | HTMLOptionElement)[]>,
    check: boolean
}
export function validateGuestForm({guestFormData, setEmptyValueEffect, boxShadowAnimation, inputRefs, check}: ValidateGuestFormType) {  

    /** checking if required fields got a value */
    for (let i = 0; i <= Object.values(guestFormData).length - 1; i++) 
        {
            /** checking if required fields value is empty */
            if (Object.values(guestFormData)[i] == "" && Object.keys(guestFormData)[i] != "gender" && Object.keys(guestFormData)[i] != "birthday") 
            {
                console.log("Object.keys(formData)[i]: ", Object.keys(guestFormData)[i])
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
        }
        /** checking if checkbox is checked */        
        if (check == false)
        {
            setEmptyValueEffect((Prevdata: EmptyValueEffectType[]) => {
                const updateData = [...Prevdata]
                updateData[8] =  {animation: `${boxShadowAnimation} 0.5s ease-out`}
                console.log("updateData: ", updateData)
                return updateData;
            })
            setTimeout(() => {
                setEmptyValueEffect((Prevdata) => {
                    const updateData = [...Prevdata]
                    updateData[8] =  {animation: ""}
                    return updateData;
                })  
            }, 500)
            inputRefs?.current[8].focus()
            return;
        }
        return true
    }


export function preventNonAlphabeticInput(name: string, value: string) {
    if (name === 'firstname' || name === 'lastname') 
        {
            /** replacing everything that is not alphabetic
             * the ^ (caret) works here as a negation of the listing
             * -> everything that is not a-z or A-Z
             */
            value = value.replace(/[^a-zA-Z]/g, "")
        }
    return value
}
    

