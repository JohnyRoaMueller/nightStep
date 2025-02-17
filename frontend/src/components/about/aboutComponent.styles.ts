import { Box, styled } from "@mui/material";

export const ContentWrapper = styled(Box)`

    display: flex;

    flex-direction: column;

    position: relative;

    left: 0;

    width: 100%;
    height: auto;



`;

export const ContentBox = styled(Box)`

    width: 66%;
    height: auto;

    margin-bottom: 10%;

    margin: 5%;

`;

export const AnimationWrapper = styled(Box)`
    position: absolute;

    right: 0;

    width: 20%;
    height: auto;

    max-height: 100%;

    overflow: hidden;
    

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    justify-content: space-between;

    @media (min-width: 600px) {
        width: 10%;
    }

`;

export const FootWrapperLeft = styled(Box)`


    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    align-items: center;
    justify-content: center;

    width: 45%;


`;

export const FootWrapperRight = styled(Box)`




    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    align-items: center;
    justify-content: center;

    width: 45%;

    height: 10%;

`;


export const LeftStep = styled(Box)`

    width: 100%;
    height: 100%;
    background-image: url('/uploads/clubstep/shoeprint_noBackground_left.png');
    background-size: cover;
    background-position: center;


    transition: opacity 0.5s ease-in-out;

    margin-bottom: 10vh;

    width: 100%;
    height: 10vh;

    overflowX: hidden;

`;

export const RightStep = styled(Box)`

    width: 100%;
    height: 100%;
    background-image: url('/uploads/clubstep/shoeprint_noBackground_right.png');
    background-size: cover;
    background-position: center;


    transition: opacity 0.3s ease-in-out;

    margin-top: 10vh;

    width: 100%;
    height: 10vh;

    overflowX: hidden;

`;