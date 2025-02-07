import { Box, Button, styled, TextField } from "@mui/material";
import { TypoBody1 } from "../../../styled-components/styledTypographie";

export const FormContainer = styled(Box)`
    background-color: grey;

    position: relative;
    align-self: flex-start;

    width: 100%;

    display: flex;
    flex-direction: column;
    flex-grow: 1;

    z-index: 1200;

    @media (min-width: 600px) {
        width: 50%
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

    &:hover {
        .MuiFormHelperText-root {
            color: white;
        }
    }

    .MuiBackdrop-root.MuiBackdrop-invisible {
        z-index: 1200;
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

export const RegisterButton = styled(Button)`

    margin-left: 6%;
    margin-bottom: 5%;

    padding: 3%;


    background-color: black;


    &:hover {
    border: 3px solid PapayaWhip
    }

`;