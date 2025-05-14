import { Box, Button, styled, TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { TypoBody1, TypoH1 } from "../../../styled-components/styledTypographie";

export const MyVenueHeader = styled(Box)`
    text-align: center;
    height: 10vh;
    width: 100%;


    @media(min-width: 600px) {
        width: 37%;
    }
`;

export const MyVenueHeaderTypo = styled(TypoH1)`
    color: white;
`;

export const ImageWrapper = styled(Box)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);



    height: 100vh;
    width: 95%;
    margin-top: 3%;
    gap: 1%;


    @media (min-width: 600px) {
        height: 75vh;
        width: 37%;
    }

`;


export const ImageBox = styled(Box)`
    border: 0.1rem solid white;
    border-radius: 10%;

    contain: strict;

    background-color:#696969;

    &:hover {
        border: thick double #ff8000;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

`;




export const EditImageIcon = styled(EditIcon)`
    position: absolute;
    right: 2%;
    top: 2%;


    &:hover {
        color: #ff8000;
    }

`;


export const ProfileWrapper = styled(Box)`

    left: 0;

    height: 20vh;
    width: 100%; 


    text-align: center;


    margin-right: auto;

    @media(min-width: 600px) {

    }

`;

export const DropdownWrapper = styled(Box)`
    margin-top: 3%;

    display: flex;
    flex-direction: column;

    background-color:#696969;

    border: thick double black;
    border-radius: 25px;

    height: auto;
    width: 95%;


    @media(min-width: 600px) {
        width: 37%;
    }  

    

`;


export const DropdownHeader = styled(Box)`
    border-radius: 25px;

    padding: 3%;

    display: flex;
    flex-direction: row;

    align-content: center;

    justify-content: space-between;
`;

export const TypoBody1HeaderDropdown = styled(TypoBody1)`
    color: black;   

`;


export const Settings = styled(Box)`
    display: flex;
    flex-direction: column;

    height: auto;

`;

export const SubmitSettingsButton = styled(Button)`
    border: 3px solid #ff8000;
    border-radius: 25px;
    margin: 3%;

    width: 90%;

    @media(min-width: 600px) {
        width: 30%;
    }

    &:hover {
      border: 3px solid PapayaWhip;
    }

`;

export const SubmitSettingsButtonOverlay = styled(Box)`
    display: flex;

    position: absolute;
    right: 20%;

    justify-content: center;
    align-items: center;

    border: 3px solid PapayaWhip;
    border-radius: 50%;


    @media(min-width: 600px) {
        right: 27%;
    }    


`;


export const TextFieldOption = styled(TextField)`
    padding-bottom: 2%;

    .MuiFormHelperText-root {
        color: black;
    }

    .MuiOutlinedInput-root {
        border-radius: 100px;
    }

    &:focus-within  {
        .MuiFormHelperText-root {
            color: white;
        }
    }
`;

export const TextFieldBio = styled(TextField)`
    padding-bottom: 2%;

    .MuiFormHelperText-root {
        color: black;
    }

    .MuiOutlinedInput-root {
        border-radius: 25px;
    }

    &:focus-within  {
        .MuiFormHelperText-root {
            color: white;
        }
    }
`;




