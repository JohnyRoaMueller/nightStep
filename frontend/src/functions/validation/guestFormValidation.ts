import { useState } from "react"
import EmptyValueEffectType from "./HostFormValidation"
import { Keyframes } from "@emotion/react"
import FormData from "../../components/form/registerGuestForm/RegisterGuestForm"


type ValidateGuestFormType = {
    formData: FormData
    setEmptyValueEffect: React.Dispatch<React.SetStateAction<EmptyValueEffectType[]>>,
    boxShadowAnimation: Keyframes,
    inputRefs: React.Ref<HTMLInputElement>,
    check: React.JSX.Element
}
export function validateGuestForm({formData, setEmptyValueEffect, boxShadowAnimation, inputRefs, check}: ValidateGuestFormType) {  

    /** checking if required fields got a value */
    for (let i = 0; i <= Object.values(formData).length - 1; i++) 
        {
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
            inputRefs.current[8].focus()
            return;
        }
        return true
    }


export function preventNonAlphabeticInput(name, value) {
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
    

