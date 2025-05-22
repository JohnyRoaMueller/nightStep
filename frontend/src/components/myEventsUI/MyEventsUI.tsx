import { Box, Button } from "@mui/material"
import { ActionButton, ActionsWrapper, EventsWrapper } from "./myEventsUI.Styles"
import SwitchAccessShortcutAddIcon from '@mui/icons-material/SwitchAccessShortcutAdd';
import Event from "../../common/event/EventCard";
import EventCard from "../../common/event/EventCard";

console.log(Math.floor(Math.random() * 4))

function MyEventsUI() {
    return(
    <>
        <ActionsWrapper>
            <ActionButton>
                add event
            </ActionButton>
        </ActionsWrapper>
        <EventsWrapper>
            <EventCard isHost={true} exampleFromArray={Math.floor(Math.random() * 4)}/>
            <EventCard isHost={true} exampleFromArray={Math.floor(Math.random() * 4)}/>
            <EventCard isHost={true} exampleFromArray={Math.floor(Math.random() * 4)}/>  
            <EventCard isHost={true} exampleFromArray={Math.floor(Math.random() * 4)}/>
            <EventCard isHost={true} exampleFromArray={Math.floor(Math.random() * 4)}/>
            <EventCard isHost={true} exampleFromArray={Math.floor(Math.random() * 4)}/>                                
        </EventsWrapper>
    </>
    )
}

export default MyEventsUI