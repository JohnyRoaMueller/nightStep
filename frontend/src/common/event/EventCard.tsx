import { TypoBody1, TypoBody2, TypoH2 } from "../../styled-components/styledTypographie"
import { BaseInfoHolder, EvenCardtContainer, FurtherInformationHolder, IconHolder, ImageHolder, InfoHolder } from "./EventCard.Styles"
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

const flyer_examples = [flyer_example_1, flyer_example_2, flyer_example_3, flyer_example_4]


function EventCard({isHost, exampleFromArray}: EventCardProps) {
    return(
        <>
        <EvenCardtContainer>
            <ImageHolder>
                <img src={flyer_examples[exampleFromArray]}></img>
            </ImageHolder>
            <InfoHolder>
                <BaseInfoHolder>
                    <TypoH2>Event name</TypoH2>
                    <TypoBody1>Venue</TypoBody1>
                    <TypoBody2>01.01.2000</TypoBody2>
                </BaseInfoHolder>
                <FurtherInformationHolder>
                    <IconHolder>
                        <AccessTimeIcon sx={{color: "white"}}></AccessTimeIcon>
                        <TypoBody2>doortime</TypoBody2>
                    </IconHolder>
                    <IconHolder>
                        <LocalActivityIcon sx={{color: "white"}}></LocalActivityIcon>
                        <TypoBody2>ticket price</TypoBody2>
                    </IconHolder>
                    <IconHolder>
                        <FavoriteBorderIcon sx={{color: "white"}}></FavoriteBorderIcon>
                        <TypoBody2>likes</TypoBody2>
                    </IconHolder>
                    {isHost && 
                        <IconHolder>
                            <MonetizationOnIcon sx={{color: "white"}}></MonetizationOnIcon>
                            <TypoBody2>ticket sold</TypoBody2>
                        </IconHolder> 
                    }
                </FurtherInformationHolder>
            </InfoHolder>
        </EvenCardtContainer>
        </>
    )
}

export default EventCard