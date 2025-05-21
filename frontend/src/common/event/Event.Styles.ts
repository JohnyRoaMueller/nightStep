import { Box, styled } from "@mui/material";

export const EventContainer = styled(Box)`
    border: 1px solid red;

    display: flex;
    width: 100%
`;


export const ImageHolder = styled(Box)`
    border: 1px solid green;

    height: 300px;
    width: 33%;
`;


export const NameHolder = styled(Box)`
    border: 1px solid blue;

    display: flex;

    position: relative;
    top: 0;

    height: 10%;
    width: 20vw;

    justify-content: center;
`;