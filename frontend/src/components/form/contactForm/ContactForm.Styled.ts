import { Box, Button, styled, TextField } from "@mui/material";

export const FormContainer = styled(Box)`

    background-color:#696969;

    width: 100%;

    display: flex;
    flex-direction: column;
    flex-grow: 1;

    border-radius: 25px;

    box-sizing: border-box;

    @media (min-width: 600px) {
        width: 50%;
        
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

        @media
    `;

    export const TextfieldMedium = styled(FixedTextFieldProps)`
  
        margin: 3%;

        width: 50%;

    `;

    export const TextfieldLong = styled(FixedTextFieldProps)`

        margin: 3%;

        width: 100%;

        .MuiFormHelperText-root {
            color: black;
        }

    `;

export const DividingLine = styled(Box)`
    background-color: black;

    height: 1px;
    width: 90%;

    justify-self: center;

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

export const SubmitButton = styled(Button)`

    padding: 2%;
    margin: 5%;

    justify-self: end;


    background-color: black;

    border: 3px solid black;


    &:hover {
        border: 3px solid PapayaWhip;
    }

    @media(min-width: 600px) {
        padding-left: 10%;
        padding-right: 10%;
    }


`;

export const CallToMessage = styled(Box)`

    display: flex;

    padding: 5%;


`;