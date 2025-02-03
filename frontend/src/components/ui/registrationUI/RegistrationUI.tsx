import { Box, Button, Typography, useTheme } from "@mui/material"
import { guest, guestButton, host, hostButton, wrapper } from "./registrationUIstyles"
import GroupIcon from '@mui/icons-material/Group';
import SpeakerGroupIcon from '@mui/icons-material/SpeakerGroup';

function ResistrationUI() {
    const theme = useTheme();

    return ( 
        <>
            <Box sx={wrapper}>

                <Box sx={guest}>
                    <Button sx={guestButton}>
                        Guest
                    </Button>
                </Box>

                <Box sx={host}>
                    <Button sx={hostButton}>
                        Host
                    </Button>
                </Box>

            </Box>    
        </>
    )
}

export default ResistrationUI