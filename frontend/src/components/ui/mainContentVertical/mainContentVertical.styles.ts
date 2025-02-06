import { Box, Card, CardContent, CardMedia, Grid2, styled } from "@mui/material";
import { TypoH2 } from "../../../styled-components/styledTypographie";


export const GridContainer = styled(Box)`

    justify-content: center; /* Zentriert die Items horizontal */

    width: 100%;

    display: flex;

    overflow-x: auto;

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
    border-radius: 5%;
    max-height: 65vh;
`;

type ClubCardMediaProp = {
    component: string
}
export const ClubCardMedia = styled(CardMedia)<ClubCardMediaProp>`

`;

export const ClubCardContent = styled(CardContent)`

`;

export const ClubNameTypo = styled(TypoH2)`
    color: black;
    font-size: 1.5em;
`;