import { Box, Button, styled, TextField } from "@mui/material";
import { TypoBody1, TypoH2 } from "../../../styled-components/styledTypographie";

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


export const TermsWrapper = styled(Box)`

    text-align: center;


    display: flex;
    flex-direction: column;

    justify-self: center;

    @media(min-width: 600px) {

    }

`;

interface PictureHolderProps {
    hasImage?: boolean
}

export const PictureHolder = styled(Box)<PictureHolderProps>`
    border: 2px dotted grey;
    // height: 10vh;
    width: 100%;

    align-self: center;

    position: relative;

    align-items: center;
    justify-content: center;
    text-align: center;

    display: flex;

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
