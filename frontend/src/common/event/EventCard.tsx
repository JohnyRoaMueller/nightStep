import { TypoBody1, TypoBody2, TypoH2 } from "../../styled-components/styledTypographie"
import { BaseInfoHolder, EvenCardtContainer, FurtherInformationHolder, IconHolder, ImageHolder, InfoHolder, TimeHolder } from "./EventCard.Styles"
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


function EventCard({isHost, imgSrc, eventName, venueName, date, startTime, endTime, price, likes, soldTickets}: EventCardProps) {
    return(
        <>
        <EvenCardtContainer>
            <ImageHolder>
                <img src={imgSrc}></img>
            </ImageHolder>
            <InfoHolder>
                <BaseInfoHolder>
                    <TypoH2>{eventName}</TypoH2>
                    <TypoBody1>{venueName}</TypoBody1>
                    <TypoBody2>{date}</TypoBody2>
                </BaseInfoHolder>
                <FurtherInformationHolder>
                    <IconHolder>
                        <AccessTimeIcon sx={{color: "white", alignSelf: "center"}}></AccessTimeIcon>
                        <TimeHolder>
                            <TypoBody2>{startTime}</TypoBody2>
                            <TypoBody2>{endTime}</TypoBody2>
                        </TimeHolder>
                    </IconHolder>
                    <IconHolder>
                        <LocalActivityIcon sx={{color: "white"}}></LocalActivityIcon>
                        <TypoBody2>{price}</TypoBody2>
                    </IconHolder>
                    <IconHolder>
                        <FavoriteBorderIcon sx={{color: "white"}}></FavoriteBorderIcon>
                        <TypoBody2>{likes}</TypoBody2>
                    </IconHolder>
                    {isHost && 
                        <IconHolder>
                            <MonetizationOnIcon sx={{color: "white"}}></MonetizationOnIcon>
                            <TypoBody2>{soldTickets}</TypoBody2>
                        </IconHolder> 
                    }
                </FurtherInformationHolder>
            </InfoHolder>
        </EvenCardtContainer>
        </>
    )
}

export default EventCard