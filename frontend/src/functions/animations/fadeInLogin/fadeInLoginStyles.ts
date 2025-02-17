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

export const LoginLogoutBox = styled(Box)`
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, 50%);
  height: 40%;
  width: 40%;
  background-color: black;
  z-index: 1000;
  display: flex;
  justify-content: center;
  border-radius: 20%;
`;

export const ClearIconStyled = styled(ClearIcon)`
  position: absolute;
  right: 0;
  color: white;
`;








