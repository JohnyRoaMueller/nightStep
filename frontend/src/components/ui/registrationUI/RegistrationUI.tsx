import { Box, Button } from "@mui/material"
import { guest, guestButton, host, hostButton, wrapper } from "./registrationUIstyles"
import GroupIcon from '@mui/icons-material/Group';
import SpeakerGroupIcon from '@mui/icons-material/SpeakerGroup';

function ResistrationUI() {
    return ( 
        <>
            <Box sx={wrapper}>

                <Box sx={guest}>
                    <Button sx={guestButton}>
                        asd
                    </Button>
                </Box>

                <Box sx={host}>
                    <Button sx={hostButton}>
                        asd
                    </Button>
                </Box>

            </Box>    
        </>
    )
}

export default ResistrationUI