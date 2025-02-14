import { Box, keyframes, styled } from "@mui/material";

export const ContentBox = styled(Box)`

    border: 1px solid red;

    width: 30vw;

    height: 60vh;

`;

export const AnimationWrapper = styled(Box)`
    border: 3px solid green;

    position: absolute;

    right: 0;

    width: 20%;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    justify-content: space-between;

    @media (min-width: 600px) {
        width: 10%;
    }

`;

export const FootWrapperLeft = styled(Box)`
    border: 1px solid red;



    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    align-items: center;
    justify-content: center;

    width: 45%;


`;

export const FootWrapperRight = styled(Box)`
    border: 1px solid red;



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

    margin-bottom: 10vh;

    width: 100%;
    height: 10vh;

`;

export const RightStep = styled(Box)`

    width: 100%;
    height: 100%;
    background-image: url('/uploads/clubstep/shoeprint_noBackground_right.png');
    background-size: cover;
    background-position: center;

    margin-top: 10vh;

    width: 100%;
    height: 10vh;

`;