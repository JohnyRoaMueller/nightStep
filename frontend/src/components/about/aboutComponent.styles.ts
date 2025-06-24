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
    // border: 10px solid green;

    position: absolute;

    right: 0;

    width: 20%;
    height: auto;

    max-height: 100%;

    overflow: hidden;
    

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

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

    width: 50%;

    margin-top: 5vh;
`;

export const FootWrapperRight = styled(Box)`


    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    align-items: center;
    justify-content: center;

    width: 50%;





`;


export const LeftStep = styled(Box)`
    // border: 1px solid red;
    
    width: 100%;
    height: 10vh;

    background-image: url('/uploads/clubstep/pretty_shoeprint_noBackground_right.png');
    background-size: cover;
    background-position: center;

    opacity: 0;


    transition: opacity 0.7s ease-in-out;

  
    transform: rotate(180deg);



`;

export const RightStep = styled(Box)`
    // border: 1px solid green;

    width: 100%;
    height: 10vh;

    background-image: url('/uploads/clubstep/pretty_shoeprint_noBackground_left.png');
    background-size: cover;
    background-position: center;


    opacity: 0;

    transition: opacity 0.7s ease-in-out;

    transform: rotate(180deg);

    margin-bottom: 15vh;

`;