import { Box, Button, keyframes, styled, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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

export const boxShadowAnimation = keyframes`
  0% {
    box-shadow: inset 0px 0px 0px red;
  }
  10% {
    box-shadow: inset 0px 0px 5px red;
  }  
  20% {
    box-shadow: inset 0px 0px 15px red;
  }
  30% {
    box-shadow: inset 0px 0px 0px red;
  }
  40% {
    box-shadow: inset 0px 0px 5px red;
  }
  50% {
    box-shadow: inset 0px 0px 15px red;
  }  
  60% {
    box-shadow: inset 0px 0px 0px red;
  }
  70% {
    box-shadow: inset 0px 0px 5px red;
  }   
  80% {
    box-shadow: inset 0px 0px 15px red;
  }
  90% {
    box-shadow: inset 0px 0px 25px red;
  }
  100% {
    box-shadow: inset 0px 0px 0px red;
  }            
       
  


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

export const CostumDatePicker = styled(DatePicker)`

  margin: 3%;
  margin-right: 7%;



    &:focus-within  {
        .MuiFormHelperText-root {
            color: white;
        }
    }  

  .MuiFormHelperText-root {
    color: black;
  }

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

