
import { Box, colors, styled } from "@mui/material"
import { Link } from "react-router-dom";
import { TypoBody1 } from "../../../styled-components/styledTypographie";


export const footerLinkColor = {
    color: 'white',

    '&:hover': {
        color: '#ff8000'
    }
}

export const FooterFrame = styled(Box)`

    border-top: 5vh solid #1a1a1a;

    display: flex;
    width: 100%;
    height: 25vh;
    flex-shrink: 0;

    background-color: black;

    align-items: center;
    justify-content: center;

    margin-top: auto;

`;

export const ContentFrame = styled(Box)`

    height: 80%;
    width: 80%;
    margin: 5%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

export const NightStepLogo = styled(Box)`
    background-image: url('/uploads/clubstep/nightStepLogo_orangeOnBlack_noBackground_withText.png');
    background-size: cover;
    background-position: center;

    width: 100%;
    height: 100%;

    background-size: contain;
    background-repeat: no-repeat;

`;

export const CleanLink = styled(Link)`
    text-decoration: none;
    padding: 3%;

`;

export const TypoBody1Link = styled(TypoBody1)`
    
    &:hover {
        color: #ff8000; /* Beim Hover wird der Filter entfernt */
    }


`;