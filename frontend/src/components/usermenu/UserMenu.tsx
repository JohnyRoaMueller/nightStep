import { Box, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ContentBox, MenuOption, MenuWrapper, NameBox, WhiteLine } from "./userMenu.Styles";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { LocalGasStation } from "@mui/icons-material";
import { TypoH2 } from "../../styled-components/styledTypographie";

function UserMenu() {
    const navigateTo = useNavigate();
    const location = useLocation();

    const [username, setUsername] = useState(null);

    const handleLogout = () => {
        fetch("http://10.0.2.24:8080/api/logout", {
            // "http://192.168.178.28:8080/api/logout", {
            credentials: "include",
        })
        navigateTo("/home");
        window.location.reload();
    }

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://10.0.2.24:8080/api/me", {
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
                    <TypoH2><u>{username}</u></TypoH2>
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