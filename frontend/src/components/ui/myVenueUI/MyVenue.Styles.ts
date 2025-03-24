import { Box, styled } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

export const ImagesWrapper = styled(Box)`
    position: relative;
    left: 0;

    display: flex;
    flex-direction: row;

    gap: 0.1%;

    max-width: 100%;
    max-height: 60vh;

    overflow-x: auto;
    overflow-y: hidden;



    @media(min-width: 600px) {
        max-height: 50vh;
    }

`;

export const ImageBox = styled(Box)`
    position: relative;
    
    img {
        width: 95vw;  // Bilder füllen die ImageBox auf kleinen Screens
        height: 60vh; // Fixe Höhe für Handy
        object-fit: cover; // Sorgt für saubere Darstellung ohne Verzerrung

        @media (min-width: 600px) {
            width: auto;   // Behält Originalgröße bei, wenn genug Platz ist
            height: auto;
            max-height: 50vh; // Falls nötig, Begrenzung für große Bildschirme
        }
    }

`;

export const EditImageIcon = styled(EditIcon)`
    position: absolute;
    right: 2%;
    top: 2%;


    &:hover {
        color: #ff8000;
    }

`;


export const ProfileWrapper = styled(Box)`

    left: 0;

    height: 20vh;
    width: 100%; 


    text-align: center;


    margin-right: auto;

    @media(min-width: 600px) {

    }

`;

export const ProfileHeader = styled(Box)`

`;