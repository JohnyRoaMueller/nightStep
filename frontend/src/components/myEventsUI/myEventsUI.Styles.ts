import { Box, Button, styled } from "@mui/material"

export const ActionsWrapper = styled(Box)`
    display: flex;

    width: 100%;
`;

export const ActionButton = styled(Button)`
    border: 1px dotted white;

    margin: 5%;

    @media(min-width: 600px) {
        margin: 1%;
    }

`;

export const EventsWrapper = styled(Box)`
    display: flex;
    flex-direction: column;

    overflow: hidden;

    width: 100%;

    @media(min-width: 600px) {
        border: 5px solid black;
        border-radius: 25px;
    }    

`;


export const NoEventsNotice = styled(Box)`

    background-color: black;

    justify-items: center;
    text-align: center;
    width: 100%;

`;