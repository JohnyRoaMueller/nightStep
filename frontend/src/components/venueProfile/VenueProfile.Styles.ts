import { Box, styled } from "@mui/material";

export const ImagesWrapper = styled(Box)`

    box-sizing: border-box;

    height: 60vh;
    overflow: hidden;

    
    border-radius: 10px 10px;
    

    @media(min-width: 600px) {
        height: 50vh;
        width: 75vw;
        border: 5px solid black;
        border-radius: 25px 25px;
    }
`;

export const ImageBox = styled(Box)`
    display: flex;
    white-space: nowrap;

    overflow-x: auto;

    img {
        display: inline-block;
        width: 95%;
        height: 60vh;
        object-fit: cover;
    }

    @media(min-width: 600px) {
        img {
        width: auto;
        height: 100%;
        max-height: 50vh;
        }
    }
`;


export const DragOverlay = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: grab;
  background-color: rgba(0,0,0,0);
  z-index: 2;
  pointer-events: none;

  @media(min-width: 600px) {
    pointer-events: auto;
  }
`;


export const ProfileWrapper = styled(Box)`

    display: flex;
    flex-direction: row;

    left: 0;

    width: 100%; 


    text-align: center;

    margin-right: auto;

    @media(min-width: 600px) {

    }

`;

export const NameWrapper = styled(Box)`
    display: flex;

    width: 50;

`;


export const AdressWrapper = styled(Box)`
    display: flex;
    flex-direction: row;

    justify-content: center;

    width: 100%;

    gap: 2%;


    @media(min-width: 600px) {
        justify-content: inherit;

        align-self: start;

    }

`;


export const ProfileHeader = styled(Box)`

`;