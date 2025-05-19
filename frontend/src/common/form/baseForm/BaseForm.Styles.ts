import { Box, styled } from "@mui/material";


export const FormContainer = styled(Box)`

    background-color: #696969;

    position: relative;
    align-self: flex-start;

    width: 100%;

    display: flex;
    flex-direction: column;
    flex-grow: 1;

    box-sizing: border-box;

    padding: 1rem;


    & > * > *:not(:last-child) {
        margin-bottom: 2rem;
    }   

    
    @media (min-width: 600px) {
        width: 50%;
        border: 0.4rem solid black;

        padding: 2rem;

        border-radius: 1rem;

        min-width: 500px;
        min-height: 300px;

        
    } 

`;