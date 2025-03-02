import { Box, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { ContentBox, MenuOption, MenuWrapper } from "./userMenu.Styles";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { LocalGasStation } from "@mui/icons-material";

function UserMenu() {
    const navigateTo = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        fetch(//"http://10.0.2.24:8080/api/logout", {
            "http://192.168.178.28:8080/api/logout", {
            credentials: "include",
        })
        navigateTo("/home");
        window.location.reload();
    }

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://192.168.178.28:8080:/api/me", {
                credentials: "include",
            })
            if (response.ok) 
            {
                const responseJSON = await response.json();
                
            }
        }
        fetchData()
    })



    return (
        <>
            <MenuWrapper>
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