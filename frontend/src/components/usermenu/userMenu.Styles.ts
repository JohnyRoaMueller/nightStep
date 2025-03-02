import { Box, Button, styled } from "@mui/material";

export const MenuWrapper = styled(Box)`
    display: flex;
    flex-direction: column;

    gap: 3em;

    @media(min-width: 600px) {
            flex-direction: row;
            gap: 5em;
            width: auto;
    }
`;

export const ContentBox = styled(Box)`

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

    width: 80vw; 

    @media(min-width: 600px) {
        width: 40vh;
    }

`;