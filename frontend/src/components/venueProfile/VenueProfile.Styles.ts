import { Box, styled } from "@mui/material";

export const ImagesWrapper = styled(Box)`
    position: relative;
    left: 0;

    display: flex;
    flex-direction: row;

    max-width: 100%;
    max-height: 60vh;

    overflow-x: auto;


    @media(min-width: 600px) {
        max-height: 50vh;
    }


`;

export const ImageBox = styled(Box)`
    display: flex;
    flex-direction: row;



    gap: 0.1%;

    overflow-x: auto;

    img {
        width: 95%;  // Bilder füllen die ImageBox auf kleinen Screens
        height: 60vh; // Fixe Höhe für Handy
        object-fit: cover; // Sorgt für saubere Darstellung ohne Verzerrung

        @media (min-width: 600px) {
            width: auto;   // Behält Originalgröße bei, wenn genug Platz ist
            height: auto;
            max-height: 50vh; // Falls nötig, Begrenzung für große Bildschirme
        }
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