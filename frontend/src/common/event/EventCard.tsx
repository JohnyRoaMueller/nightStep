import { TypoBody1, TypoBody2, TypoH2 } from "../../styled-components/styledTypographie"
import { BaseInfoHolder, EvenCardtContainer, FurtherInformationHolder, IconHolder, ImageHolder, InfoBox, InfoBoxContainer, LikeHolder, TimeHolder } from "./EventCard.Styles"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import flyer_example_1 from '../../assets/images/flyer_examples/flyer_example_1.png'
import flyer_example_2 from '../../assets/images/flyer_examples/flyer_example_2.png'
import flyer_example_3 from '../../assets/images/flyer_examples/flyer_example_3.png'
import flyer_example_4 from '../../assets/images/flyer_examples/flyer_example_4.png'
import { EventCardProps } from "./EventCard.Types";
import Space from "../../components/ui/spaceUI/Space";
import { Box } from "@mui/material";
import GroupsIcon from '@mui/icons-material/Groups';
import HoverOverlay from "../../components/ui/hoverOverlay/HoverOverlay";
import { useNavigate } from "react-router-dom";


function EventCard({isHost, imgSrc, eventName, venueName, date, startTime, endTime, price, likes, soldTickets}: EventCardProps) {

    const navigateTo = useNavigate();

    return(
        <>
        <EvenCardtContainer>
            <ImageHolder>
                <img src={imgSrc}></img>
            </ImageHolder>
            <InfoBoxContainer>
                <FavoriteBorderIcon sx={{position: "absolute", color: "white", top: "8%", right: "9%"}}></FavoriteBorderIcon>
                <InfoBox>
                    <TypoH2>{eventName}</TypoH2>  
                </InfoBox>
                <InfoBox>
                    <AccessTimeIcon sx={{color: "white"}}></AccessTimeIcon>   
                    <TypoBody2>{startTime}</TypoBody2>
                    <TypoBody2>{endTime}</TypoBody2> 
                </InfoBox> 
                <InfoBox>
                    <LocalActivityIcon sx={{color: "white"}}></LocalActivityIcon>
                    <TypoBody2>{price}{"€"}</TypoBody2> 
                </InfoBox>
                <InfoBox>
                    <GroupsIcon sx={{color: "white"}}></GroupsIcon>
                    <TypoBody2>{likes}</TypoBody2>
                </InfoBox>                    
                {isHost && 
                    <InfoBox>
                        <MonetizationOnIcon sx={{color: "white"}}></MonetizationOnIcon>
                        <TypoBody2>{soldTickets}</TypoBody2> 
                    </InfoBox>       
                }    
            </InfoBoxContainer>
            <HoverOverlay onClick={() => navigateTo(`./${eventName}`)}/>
        </EvenCardtContainer>
        </>
    )
}



export default EventCard

{/**
    
                <LikeHolder>
                    <IconHolder>
                        <FavoriteBorderIcon sx={{color: "white"}}></FavoriteBorderIcon>
                        <TypoBody2>{likes}</TypoBody2>
                    </IconHolder>
                </LikeHolder>    
    
    
    
*/}

/////////////////////////////////////////////////////

////////////////////////////////////////////////////