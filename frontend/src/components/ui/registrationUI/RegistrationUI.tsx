import { Avatar, Box, getImageListItemBarUtilityClass, Typography, useTheme } from "@mui/material"
import { guest, guestButton, host, hostButton, image, imageBackdrop, imageMarked, imageSrc, imageSrcGuest, imageSrcHost, typoH2, wrapper } from "./registrationUIstyles"
import GroupIcon from '@mui/icons-material/Group';
import SpeakerGroupIcon from '@mui/icons-material/SpeakerGroup';
import { Button } from "../../../styled-components/styledButton";
import { TypoH1, TypoH2 } from "../../../styled-components/styledTypographie";
import { Link } from "react-router";


function ResistrationUI() {


    return ( 
        <>
            <Box sx={wrapper}>

                <Box sx={guest}>
                    <Button sx={guestButton}>
                        <Link to={"/register/guest"}>
                            <Box sx={imageSrcGuest}/>
                            <Box sx={imageBackdrop} className="MuiImageBackdrop-root"/>
                            <Box sx={image}>
                                <TypoH2 sx={typoH2} className="MuiTypoH2-root">
                                    join as a guest
                                </TypoH2>
                                <Box sx={imageMarked} className="MuiImageMarked-root"/>
                            </Box>
                        </Link>
                    </Button>
                </Box>

                <Box sx={guest}>
                    <Button sx={guestButton}>
                        <Link to={"/register/host"}>
                            <Box sx={imageSrcHost}/>
                            <Box sx={imageBackdrop} className="MuiImageBackdrop-root"/>
                            <Box sx={image}>
                                <TypoH2 sx={typoH2} className="MuiTypoH2-root">
                                    join as a host
                                </TypoH2>
                                <Box sx={imageMarked} className="MuiImageMarked-root"/>
                            </Box>
                        </Link>
                    </Button>
                </Box>

            </Box>    
        </>
    )
}

export default ResistrationUI