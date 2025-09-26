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
    position: relative;

    display: flex;
    white-space: nowrap;

    overflow-x: auto;

    scrollbar-width: none;



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
    right: 0;
    bottom: 0;
    left: 0;
    cursor: grab;
    // background-color: green;
    z-index: 2;
    pointer-events: none;

    overflow: hidden;

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

export const HeaderWrapper = styled(Box)`
    display: flex;
    flex-direction: row;

    left: 0;

    width: 100%; 


    text-align: center;

    margin-right: auto;

    @media(min-width: 600px) {

    }

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


export const EventCardWrapper = styled(Box)`

    overflow: auto;

    width: 100%;



    overflow-x: hidden;

    scrollbar-width: none;

    border-radius: 25px 25px;

    align-self: start;


    @media(min-width: 600px) {
        width: 50%;
        min-height: unset;
        max-height: unset;
    }    

`;

export const NoEventsNotice = styled(Box)`

    background-color: black;

    justify-items: center;
    text-align: center;
    width: 100%;

`;