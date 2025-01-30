import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { cardContentHoverStyle, CardContentStyle, cardContentTypoBox, CardStyling, GridStyling, picStyle } from "./MainContentVerticalStyles";
import { useEffect, useState } from "react";
import Login from "../../../pages/Login";
import { useNavigate } from "react-router-dom";

import placeholder from 'C:\\VS_Code_projects\\clubstep-project\\uploads\\clubstep\\Platzhalter_Clubbild.png'
import axios from "axios";


export interface ClubType {
    id: number,
    name: string,
    disctrict: string,
    description: string,
    picAdresses: string[]
}


function MainContentVertical() {

    const [clubs, setClubs] = useState<ClubType[]>([])


    const urls = [
        'http://192.168.178.28:8080/api/home', // pc home
        'http://10.0.2.24:8080/api/home', // pc damago
        'http://172.20.10.13:8080/api/home', // mobile
        'http://192.168.178.28:8080/api/home', // pc home
      ];


        const fetchData = async() => {
                for(const url of urls) {
                    try {
                    console.log("iteration")
                    let response = await fetch(url)
                    if      (!response.ok) {throw new Error(`fetching ${url} failed`)}
                    else if ( response.ok) {
                        console.log(`fetching ${url} successful`)
                        let data = await response.json() 
                        return(data)
                    }
                } catch (error) {
                    console.log(`${error.message}`)
                    continue
                }
            } 
        }


    const loadData = async () => {
        const data = await fetchData()
        setClubs(data)
    }

    useEffect(() => {
        loadData()
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