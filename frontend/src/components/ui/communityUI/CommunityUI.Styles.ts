import { Box, styled } from "@mui/material";

export const ProfileBox = styled(Box) `
    position: relative;

    display: flex;
    flex-direction: row;

    width: 100%;
    height: 10vh;       

    border: 1px dotted black;

    margin-bottom: 0.5%;


    @media (min-width: 600px) {
        width: 50%;
    }

`

export const ImageBox = styled(Box)`

    overflow: hidden;

    width: 30%;

    img {
        max-height: 100%;
        max-width: 100%;
        border-radius: 25%;
    }

`

export const InfoBox = styled(Box)`
    display: flex;

    width: 100%;


    > * {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center; 
    }

`
