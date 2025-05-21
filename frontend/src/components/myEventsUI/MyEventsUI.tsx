import { Box, Button } from "@mui/material"
import { ActionButton, ActionsWrapper, EventsWrapper } from "./myEventsUI.Styles"
import SwitchAccessShortcutAddIcon from '@mui/icons-material/SwitchAccessShortcutAdd';
import Event from "../../common/event/Event";

function MyEventsUI() {
    return(
    <>
        <ActionsWrapper>
            <ActionButton>
                add event
            </ActionButton>
        </ActionsWrapper>
        <EventsWrapper>
            <Event/>
            <Event/>
            <Event/>
        </EventsWrapper>
    </>
    )
}

export default MyEventsUI