import { Box, Button, styled, TextField } from "@mui/material";

export const ErrorOverlay = styled(Box)`
    border: 1px solid green;

    width: 100%;
`;


export const FormContainer = styled(Box)`
    align-self: flex-start;

    width: 100%;

    display: flex;
    flex-direction: column;
    flex-grow: 1;

    box-sizing: border-box;

    @media (min-width: 600px) {
        width: 50%;
        border: 0.3em solid black;
    } 

`;

export const CategoryHeader = styled(Box)`
    background-color: black;

    margin: 3%;

    height: 30%;
    width: 80%;

    text-align: center;

    @media (min-width: 600px) {
        width: 50%
    }

`;

export const Line = styled(Box)`


    display: flex;
    flex-direction: row;
    flex-grow: 1;

`;

export const FixedTextFieldProps = styled(TextField)`



    .MuiFormHelperText-root {
        color: black;
    }

    &:focus-within  {
        .MuiFormHelperText-root {
            color: white;
        }
    }


`;

    export const TextfieldShort = styled(FixedTextFieldProps)`


        margin: 3%;

        width: 15%;

    `;

    export const TextfieldMedium = styled(FixedTextFieldProps)`

  

        margin: 3%;

        width: 33%;

    `;

    export const TextfieldLong = styled(FixedTextFieldProps)`



        margin: 3%;

        width: 90%;

        .MuiFormHelperText-root {
            color: black;
        }

    `;

export const TermsWrapper = styled(Box)`

    text-align: center;
    align-self: center;

    width: 50%;

    margin-left: 3%;
    margin-bottom: 3%;



    display: flex;
    flex-direction: column;

    @media(min-width: 600px) {
        margin-left: 1%;
        margin-bottom: 3%;
    }


`;

export const RegisterButton = styled(Button)`

    margin-left: 6%;
    margin-bottom: 5%;

    padding-left: 5%;
    padding-right: 5%;


    background-color: black;


    &:hover {
        border: 3px solid PapayaWhip
    }

    @media(min-width: 600px) {
        padding-left: 10%;
        padding-right: 10%;
    }


`;

