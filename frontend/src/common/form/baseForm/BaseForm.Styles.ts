import { Box, styled } from "@mui/material";


export const FormContainer = styled(Box)`

    background-color:#696969;

    border-radius: 1rem;

    position: relative;
    align-self: flex-start;

    width: 100%;

    display: flex;
    flex-direction: column;
    flex-grow: 1;

    box-sizing: border-box;

    padding: 2rem;


    & > * > *:not(:last-child) {
        margin-bottom: 2rem;
    }   

    @media (min-width: 600px) {
        width: 50%;
        border: 0.4rem solid black;
    } 

`;