import { Box, Card, CardContent, CardMedia, keyframes, styled } from "@mui/material";
import { TypoBody1, TypoH2 } from "../../../styled-components/styledTypographie";

export const LoadingSpace = styled(Box)`
    height: 100vh;
`;

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


const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
export const GridItem = styled(Box)`

    position: relative;

    padding: 0.5%;

    display: flex;
    flex-direction: column;

    width: 80%;
    flex-shrink: 0;

    animation: ${fadeIn} 0.5s ease-in-out;


    &:active {
        .club-card-overlay {
            background-color: #808080;
            opacity: 0.4;
            transition: 1s ease-in-out;
        }
    }

    
    @media (min-width: 600px) {
        width: 33%;
        margin-right: 0%;
        padding: 0.1%;
        padding-bottom: 0.3%;

        &:hover {
            .club-card-overlay {
                background-color: #808080;
                opacity: 0.1
            }
        }  

        &:active {
            .club-card-overlay {
                background-color: #808080;
                opacity: 0.4;
                transition: 3s ease-in-out;
            }
        }


    }

`;

export const ClubCardOverlay = styled(Box)`
    position: absolute;


    bottom: 0;
    right: 0;

    height: 100%;
    width: 100%;



`;

export const ClubCard = styled(Card)`
    position: relative;

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

    z-index: 0;

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