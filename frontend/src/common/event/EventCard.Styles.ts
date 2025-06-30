import { Box, styled } from "@mui/material";

export const EvenCardtContainer = styled(Box)`
    // border: 1px solid red;

    position: relative;

    border: 1px solid black;

    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;



    box-sizing: content-box;

    align-items: center;
    


    @media(min-width: 600px) {
        flex-direction: row;
        height: 100%;
        max-height: 40vh;        
    }


`;


export const ImageHolder = styled(Box)`
    // border: 1px solid green;

    height: 100%;
    width: 100%;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover; /* oder contain, je nach gewünschtem Verhalten */
        display: block;
    }

    @media(min-width: 600px) {
        height: 100%;
        width: 75%;
    }

`;


export const InfoBoxContainer = styled(Box)`
    // border: 1px solid yellow;

    position: relative;

    display: flex;
    flex-direction: column;

    height: 100%;
    width: 100%;

`;


export const InfoBox = styled(Box)`
    // border: 1px solid red;

    justify-items: center;

    padding: 1%;
    

`;


export const BaseInfoHolder = styled(Box)`
    // border: 1px solid blue;

    position: relative;

    display: flex;
    flex-direction: row;
   

    text-align: center;
    width: 100%;

    justify-content: center;
    
`;


export const FurtherInformationHolder = styled(Box)`
    // border: 1px solid white;

    display: flex;
    flex-direction: column;

    height: auto;
    width: 100%;

    align-items: start;

    @media(min-width: 600px) {
        flex-direction: row;
        justify-content: space-around;
    }

`;

export const LikeHolder = styled(Box)`
    // border: 1px solid green;

    position: absolute;

    top: 30%;
    right: 5%;

    @media(min-width: 600px) {
        right: 10%;
    }

`;


export const IconHolder = styled(Box)`
    // border: 1px solid brown;

    gap: 3px;

    display: flex;
    flex-direction: row;

    height: auto;
    width: auto;

    align-self: center;

`;

export const TimeHolder = styled(Box)`
    // border: 1px solid red;

    display: flex;
    
    flex-direction: row;


    @media(min-width: 600px) {
        flex-direction: column;
    }    

`;

