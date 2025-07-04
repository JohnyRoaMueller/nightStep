import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';


export const FullscreenFlexBox = styled(Box)`
  height: 100%;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.palette.background.default};
`;

export const VerticalCentered = styled(Box)`
  width: 100%;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.palette.background.default};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  height: auto;
  position: relative;
  margin: auto;

  @media(min-width: 600px) {
    width: 75%;
    paddding: 0;
  }

`;