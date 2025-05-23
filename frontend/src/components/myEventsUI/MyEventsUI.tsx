import { Box, Button } from "@mui/material"
import { ActionButton, ActionsWrapper, EventsWrapper } from "./myEventsUI.Styles"
import SwitchAccessShortcutAddIcon from '@mui/icons-material/SwitchAccessShortcutAdd';
import Event from "../../common/event/EventCard";
import EventCard from "../../common/event/EventCard";
import { useNavigate } from "react-router-dom";

console.log(Math.floor(Math.random() * 4))



function MyEventsUI() {

    const navigateTo = useNavigate();


    return(
    <>
        <ActionsWrapper>
            <ActionButton onClick={() => navigateTo("/myEvents/addEvent")}>
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