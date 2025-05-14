import { Box, Button, styled, TextField } from "@mui/material";
import { TypoBody1, TypoH2 } from "../../../styled-components/styledTypographie";

export const ErrorOverlay = styled(Box)`
    border: 1px solid green;
`;

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

    @media (min-width: 600px) {
        width: 50%;
        border: 0.3em solid black;
    } 

`;

export const CategoryHeader = styled(Box)`
    background-color: lightGrey;

    border-radius: 1rem;

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


    border: 3px solid black;

    
    &:hover {
      border: 3px solid PapayaWhip;
    }

    @media(min-width: 600px) {
        padding-left: 10%;
        padding-right: 10%;
    }


`;

export const HiddenInput = styled("input")(
    {
    opacity: "1",
    }
);


export const PictureHolder = styled(Box)`
    border: 2px dotted grey;
    height: 300px;
    width: 300px;

    position: relative;

    align-items: center;
    justify-content: center;
    text-align: center;

    display: flex;

    margin: 20px;

`;

export const ImageTypoH2 = styled(TypoH2)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    pointer-events: none;

    z-index: 10;
`;


export const WarningBox = styled(Box)`

  position: absolute;


  width: 100%;
  height: 100%;

  background-color: black;

  white-space: nowrap;
  transform: scale(0.8);

  display: flex;
  justify-content: center;
  align-items: center;


`;