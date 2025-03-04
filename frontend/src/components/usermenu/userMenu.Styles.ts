import { Box, Button, styled } from "@mui/material";

export const MenuWrapper = styled(Box)`

    display: flex;
    flex-direction: column;
    gap: 1em;

    width: 80vw;

    @media(min-width: 600px) {
        width: 40vh;
    }

`;

export const ContentBox = styled(Box)`

    width: 100%;

    display: flex;
    flex-direction: column;
    align-content: center;

    gap: 1em;

    @media (min-width: 600px): {           
        padding: 10%;        
        margin: 0;           
        borderRadius: 8px;   
      }

`;

export const MenuOption = styled(Button)`
    border: 1px dotted white;

    width: 100%; 

`;

export const NameBox = styled(Box)`
    display: flex;
    flex-direction: row;

    overflow: hidden;

    width: 100%;
    max-width: 100%;

    align-items: center;

`;
