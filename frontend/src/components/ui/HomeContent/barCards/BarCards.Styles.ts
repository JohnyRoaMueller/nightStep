import { Box, Card, CardContent, CardMedia, styled } from "@mui/material";
import { TypoBody1, TypoH2 } from "../../../../styled-components/styledTypographie";

export const HeaderWrapper = styled(Box)`

    display: flex;
    width: 100%;
    max-width: 100%;
    height: 5vh;
    
    align-items: center;

    gap: 1%;

`;


export const VenueTypeHeader = styled(Box)`
    width: auto;

    padding: 2%;

`;

export const WhiteLine = styled(Box)`
    width: 100%;
    background-color: white;
    height: 2px;

    margin-right: 2%;

`;











export const GridContainer = styled(Box)`

    justify-content: center; /* Zentriert die Items horizontal */

    width: 100%;

    display: flex;

    overflow-x: auto;

    justify-content: flex-start;

    @media (min-width: 600px) {
        flex-wrap: wrap;
    }

`;

export const GridItem = styled(Box)`

    padding: 0.5%;

    display: flex;
    flex-direction: column;

    width: 80%;
    flex-shrink: 0;



    
    @media (min-width: 600px) {
        width: 33%;
        margin-right: 0%;
        padding: 0.1%;
        padding-bottom: 0.3%;
    }
`;

export const ClubCard = styled(Card)`
    box-sizing: content-box;
    overflow: hidden;
    border-radius: 5%;
    max-height: 65vh;
    min-height: 65vh;
`;

type ClubCardMediaProp = {
    component: string
}
export const ClubCardMedia = styled(CardMedia)<ClubCardMediaProp>`

    min-height: 40vh;

`;

export const ClubCardContent = styled(CardContent)`

`;

export const ClubNameTypo = styled(TypoH2)`
    color: black;
    font-size: 1.5em;

`;

export const ClubDescTypo = styled(TypoBody1)`
    font-size: 4vw;

    padding: 0.2em;

    @media(min-width: 600px) {
        font-size: initial;
    }

    

`;