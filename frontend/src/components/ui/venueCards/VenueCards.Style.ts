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

    padding: 2%;
    
    align-items: center;

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
        .Venue-card-overlay {
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
            .Venue-card-overlay {
                background-color: #808080;
                opacity: 0.1
            }
        }  

        &:active {
            .Venue-card-overlay {
                background-color: #808080;
                opacity: 0.4;
                transition: 3s ease-in-out;
            }
        }


    }

`;

export const VenueCardOverlay = styled(Box)`
    position: absolute;


    bottom: 0;
    right: 0;

    height: 100%;
    width: 100%;



`;

export const VenueCard = styled(Card)`
    position: relative;

    box-sizing: content-box;
    overflow: hidden;
    max-height: 65vh;
    min-height: 65vh;

    background-color: #1a1a1a1a;

    

    border: 1px solid black;


`;

type VenueCardMediaProp = {
    component: string
    loading: string
}
export const VenueCardMedia = styled(CardMedia)<VenueCardMediaProp>`

    min-height: 50vh;
    max-height: 50vh;
    width: 100%;
    height: 100%;
    object-fit: cover;

    z-index: 0;

`;


export const VenueCardContent = styled(CardContent)`

`;


export const VenueNameTypo = styled(TypoH2)`
    color: white;
    font-size: 1.5em;

`;


export const VenueDescTypo = styled(TypoBody1)`
    font-size: 4vw;

    padding: 0.2em;

    @media(min-width: 600px) {
        font-size: initial;
    }

`;

export const RandomWrapper = styled(Box)`

    display: flex;
    width: 100%;
    max-width: 100%;
    height: 5vh;

    padding: 2%;

    text-align: center;

    justify-items: center;
    
    align-items: center;

    gap: 1%;

`;