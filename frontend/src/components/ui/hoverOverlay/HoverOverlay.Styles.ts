import { Box, styled } from "@mui/material";

export const StyledOverlay = styled(Box)`
    position: absolute;
    
    bottom: 0;
    right: 0;

    height: 100%;
    width: 100%;

    &:hover {
        background-color: #808080;
        opacity: 0.1;
        transition: 0.3s;        
    }

    &:active {
        background-color: #808080;
        opacity: 0.1;
        transition: 0.3s;        
    }    

`;