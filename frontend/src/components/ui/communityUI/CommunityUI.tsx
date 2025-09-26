import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import { data } from "react-router-dom"
import { Guest } from "./CommunityUI.Types"
import { ImageBox, InfoBox, ProfileBox } from "./CommunityUI.Styles"
import { TypoBody1 } from "../../../styled-components/styledTypographie"
import HoverOverlay from "../hoverOverlay/HoverOverlay"
import mockProfilePicture from "../../../../../MockAccountImages/GuestUsers/mockProfilePicture.png";

const apiUrl = import.meta.env.VITE_APP_API_URL



function getAge(birthDateStr: string): number {
    const today = new Date();
    const birthDate = new Date(birthDateStr);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function communityUI() {

    const [users, setUsers] = useState<Guest[]>([])

    useEffect(() => {
        async function fetchData() {
            
            const response = await fetch(`${apiUrl}/community`)
            const dataJson = await response.json()
            setUsers(dataJson)

        }
        fetchData()
    }, [])

    return (
        <>
            {users.map((user) => (
            <>
            <ProfileBox>
                <HoverOverlay/>
                <ImageBox>
                    <img src={mockProfilePicture} alt="alt"></img>
                </ImageBox>
                <InfoBox>
                        <TypoBody1>{user.firstname}</TypoBody1>
                        <TypoBody1>{getAge(user.birthday)}</TypoBody1>
                </InfoBox>
            </ProfileBox>    
            </>
            ))}
        </>
    )

}

export default communityUI