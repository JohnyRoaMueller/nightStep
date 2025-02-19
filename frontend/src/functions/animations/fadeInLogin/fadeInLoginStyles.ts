import { Box, styled } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';


type overlayLeftProps = {
    left: number
    top: number
}
export const OverlayLeft = styled(Box)<overlayLeftProps>`
  position: absolute;
  left: ${(props) => props.left}%;
  top: ${(props) => props.top}%;
  height: 25%;
  width: 25%;
  background-color: black;
  z-index: 1000;
  pointer-events: auto;
`;

type overlayLeft = {
    right: number
    bottom: number
}
export const OverlayRight = styled(Box)<overlayLeft>`
  position: absolute;
  right: ${(props) => props.right}%;
  bottom: ${(props) => props.bottom}%;
  height: 25%;
  width: 25%;
  background-color: black;
  z-index: 1000;
  pointer-events: auto;
`;

export const LoginLogoutOverlay = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;


  background-color: black;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;

export const LoginLogoutBox = styled(Box)`
  display: flex;
  flex-direction: column;

`;

export const ClearIconStyled = styled(ClearIcon)`
  color: white;

  align-self: flex-end;

  padding-bottom: 2%;
`;








