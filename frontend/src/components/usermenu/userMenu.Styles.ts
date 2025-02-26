import { Box, Button, styled } from "@mui/material";

export const MenuWrapper = styled(Box)`
    border: 1px solid red;

    width: 80vw;

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
    border: 1px solid green;

    display: flex;
    flex-direction: column;
    align-content: center;

    gap: 1em;

    @media (max-width: 600px): {
        width: 100%;         
        height: auto;        
        padding: 10%;        
        margin: 0;           
        borderRadius: 8px;   
      }

`;

export const MenuOption = styled(Button)`
    border: 1px dotted white;

    width: 100%;

    background-color: black;

`;