import { useEffect, useState } from "react";
import { ContentBox, MenuOption, MenuWrapper, NameBox } from "./userMenu.Styles";
import {  useLocation, useNavigate } from "react-router-dom";
import { TypoH2 } from "../../styled-components/styledTypographie";

const apiUrl = import.meta.env.VITE_APP_API_URL

function UserMenu() {
    const navigateTo = useNavigate();
    const location = useLocation();

    const [username, setUsername] = useState(null);

    const handleLogout = () => {
        fetch(`${apiUrl}/logout`, {
            credentials: "include",
        })
        navigateTo("/home");
        window.location.reload();
    }

    useEffect(() => {
        async function fetchData() {

            const response = await fetch(`${apiUrl}/me`, {
                credentials: "include",
            })
            if (response.ok) 
            {
                const responseJSON = await response.json();
                console.log(responseJSON.username)
                setUsername(responseJSON.username)
            }
            else 
            {
                console.log("fetch failed")
            }
        }
        fetchData()
    })



    return (
        <> 
            <MenuWrapper>
                <NameBox>
                    <TypoH2>{username}</TypoH2>
                </NameBox>
                <ContentBox>
                    <MenuOption>
                        Profile
                    </MenuOption>
                    <MenuOption>
                        Settings
                    </MenuOption>
                    <MenuOption onClick={handleLogout}>
                        Logout
                    </MenuOption>                   
                </ContentBox>
            </MenuWrapper>
        </>
    )
}

export default UserMenu