import { TypoH2 } from "../../styled-components/styledTypographie"
import { EventContainer, ImageHolder, NameHolder } from "./Event.Styles"

function Event() {
    return(
        <>
        <EventContainer>
            <ImageHolder></ImageHolder>
            <NameHolder><TypoH2>Event name</TypoH2></NameHolder>
        </EventContainer>
        </>
    )
}

export default Event