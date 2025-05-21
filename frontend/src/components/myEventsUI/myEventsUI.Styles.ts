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

    overflow: auto;

    width: 100%;

    border: 1px solid purple;

`;