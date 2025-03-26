import { Box, styled } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { TypoH1 } from "../../../styled-components/styledTypographie";

export const MyVenueHeader = styled(Box)`
    text-align: center;
    height: 10vh;
    width: 100%;


    @media(min-width: 600px) {
        width: 37%;
    }
`;

export const MyVenueHeaderTypo = styled(TypoH1)`
    color: black;
`;

export const ImageWrapper = styled(Box)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);


    height: 100vh;
    width: 100%;

    gap: 1%;


    @media (min-width: 600px) {
        height: 75vh;
        width: 37%;
    }

`;


export const ImageBox = styled(Box)`
    border: thick double grey;
    border-radius: 10%;

    contain: strict;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

`;

export const Overlay = styled(Box)`
    position: absolute;
    top: 0;
    left: 0;

    width: 95%;
    height: 95%;



    @media(min-width: 600px) {
        border: none;
        border-radius: none;

        :hover {
            border: 0.3em solid #ff8000;
            border-radius: 8%;
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