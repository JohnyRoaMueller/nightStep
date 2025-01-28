import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { cardContentHoverStyle, CardContentStyle, cardContentTypoBox, CardStyling, GridStyling, picStyle } from "./MainContentVerticalStyles";
import { useEffect, useState } from "react";
import Login from "../../../pages/Login";
import { useNavigate } from "react-router-dom";

import placeholder from 'C:\\vscode-projects\\clubstep-project\\uploads\\clubstep\\Platzhalter_Clubbild.png'


export interface ClubType {
    id: number,
    name: string,
    disctrict: string,
    description: string,
    picAdresses: string[]
}


function MainContentVertical() {


    
    const [clubs, setClubs] = useState<ClubType[]>([])
        useEffect(() => {
            fetch(/*'http://192.168.178.28:8080/home'*/"http://172.20.10.13:8080/home")
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setClubs(data)
                })
        }, [])
  
    





    // hovering on Card & Link
    const [isHoverId, setHoverId] = useState<number | null>(null)

    function HoveredCard() {
        return (
            <Box id="hover-box" onClick={navToClubpage}
            sx={cardContentHoverStyle}>
                <Typography>
                    Text when hover
                </Typography>
            </Box>       
        )
    }

    const navigateToClubpage = useNavigate()
    function navToClubpage() {
        navigateToClubpage("/login")
    }
    //


    return(



        <Grid container spacing={1}>
            {clubs.map((club) => {
                return (
                    <Grid item key={club.id} xs={12} md={4}>
                    <Card sx={CardStyling} id={`main-content-card-${club.id}`}
                        onMouseEnter={() => {
                            setHoverId(club.id)
                            console.log(club.id)
                        }}
                        onMouseLeave={() => {
                            setHoverId(null)
                            console.log(isHoverId)    
                        }}
                    >
                            <CardContent sx={CardContentStyle} id={`"card-content-${club.id}"`}>
                                <Box sx={cardContentTypoBox}>
                                <Typography>
                                    {club.name}
                                </Typography>
                                </Box>
                                <CardMedia
                                    sx={picStyle}
                                    component={"img"}
                                    image={placeholder}>
                                </CardMedia>
                                {isHoverId === club.id &&  <HoveredCard/>}
                            </CardContent>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
    )
}


export default MainContentVertical


