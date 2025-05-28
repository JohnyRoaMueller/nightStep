import { Box, styled } from "@mui/material";

export const EvenCardtContainer = styled(Box)`
    // border: 1px solid red;

    border: 1px solid black;

    display: flex;
    flex-direction: row;

    height: 30vh;
    width: 100%;


`;


export const ImageHolder = styled(Box)`
    // border: 1px solid green;

    height: 100%;
    width: 25%;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover; /* oder contain, je nach gewünschtem Verhalten */
        display: block;
  }

`;


export const InfoHolder = styled(Box)`
    // border: 1px solid yellow;

    display: flex;
    flex-direction: column;

    height: 100%;
    width: 100%;

    justify-content: space-between;

`;


export const BaseInfoHolder = styled(Box)`
    // border: 1px solid blue;

    display: flex;
    flex-direction: column;

    text-align: center;

    height: 50%;
    width: 100%;

    justify-content: center;

`;


export const FurtherInformationHolder = styled(Box)`
    // border: 1px solid white;

    display: flex;
    flex-direction: row;

    height: auto;
    width: 100%;

    justify-content: space-around;

`;


export const IconHolder = styled(Box)`
    // border: 1px solid brown;

    display: flex;
    flex-direction: row;

    height: auto;
    width: auto;

    align-self: center;

`;

export const TimeHolder = styled(Box)`
    // border: 1px solid red;

    display: flex;
    flex-direction: column;

`;

