import { Box, Button, Input, styled, TextField } from "@mui/material";

export const FormWrapper = styled(Box)`

    width: 80vw;

    display: flex;
    flex-direction: column;

    gap: 3em;

    @media(min-width: 600px) {
            flex-direction: row;
            gap: 5em;
            width: auto;
    }
`;

export const LoginBox = styled(Box)`
    position: relative;
    display: flex;
    flex-direction: column;
    align-content: center;

    gap: 1em;


    @media (max-width: 600px): {
        width: 100%;         
        height: auto;        
        padding: 10%;        
        margin: 0;           
        borderRadius: 8px;   
      }

`;

export const LoginTextField = styled(TextField)`
    background-color: #666666;


`;

export const LoginButtonWrapper = styled (Button)`
    padding: 0;

`;

export const LoginButton = styled(Button)`
    border: 1px dotted white;

    width: 100%;

    background-color: black;

`;

export const LoginFailedPopUp = styled(Box)`
  background-color: black;
  position: absolute;
  height: 100%;
  width: 100%;

  aligntext-align: center;
  justify-items: center;
  align-items: center;

  pointer-events: none;
  cursor: none;

  z-index: 10;
  
`;

export const SignInBox = styled(Box)`
    display: flex;
    flex-direction: column;

    justify-items: center;

`;

export const SignInButton = styled(Button)`
    border: 1px dotted white;

    width: 100%;
`;
