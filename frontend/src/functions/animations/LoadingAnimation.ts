import { Box, keyframes, styled } from "@mui/material";

// Definiere die Animation für die aufleuchtenden Punkte
const dotGlow = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

// Erstelle das Styled-Component für die Punkte
export const LoadingAnimation = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 10px;
  padding: 50px;
`;

export const Dot = styled(Box)`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ff8000; /* Farbe der Punkte */
  animation: ${dotGlow} 0.5s ease-in-out infinite;
`;