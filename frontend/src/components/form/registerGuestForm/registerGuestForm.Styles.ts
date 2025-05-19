import { Box, Button, keyframes, styled, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";


export const HeaderWrapper = styled(Box)`
    display: flex;

    width: 100%;

    align-self: start;

    margin: 2%;


    // justify-content: center;

    @media(min-width: 600px) {
        width: 50%;
    }
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


export const TermsWrapper = styled(Box)`

    text-align: center;


    display: flex;
    flex-direction: column;

    justify-self: center;

    @media(min-width: 600px) {
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

