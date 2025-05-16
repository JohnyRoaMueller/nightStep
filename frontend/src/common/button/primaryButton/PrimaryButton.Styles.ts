import { Button, styled } from "@mui/material";

export const StyledButton = styled(Button)`


    background-color: black;

    border: 3px solid black;

    border-radius: 25rem;

    width: 50%;

    justify-self: center;

    
    &:hover {
      border: 3px solid PapayaWhip;
    }

    @media(min-width: 600px) {
        padding-left: 10%;
        padding-right: 10%;
    }


`;