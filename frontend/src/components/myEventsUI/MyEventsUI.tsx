import { Box, Button } from "@mui/material"
import { ActionButton, ActionsWrapper } from "./myEventsUI.Styles"
import SwitchAccessShortcutAddIcon from '@mui/icons-material/SwitchAccessShortcutAdd';

function MyEventsUI() {
    return(
    <>
        <ActionsWrapper>
            <ActionButton>
                add event
            </ActionButton>
        </ActionsWrapper>
    </>
    )
}

export default MyEventsUI