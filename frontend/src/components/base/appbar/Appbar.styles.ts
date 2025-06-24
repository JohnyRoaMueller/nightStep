// import NightStepLogo from '../../../assets/images/nightStepLogo-WhiteOnBlack.svg?react'; // ?react suffix very relevant! tried import SVG for 4 hours
import { Box, styled, TextField, Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import { Link } from "react-router-dom";
import { TypoBody1 } from "../../../styled-components/styledTypographie";


export const NightStepLogo = styled('div')`
  display: flex;
  position: static;
  transform: none;


  width: 50px;
  height: 50px;
  background-image: url('/uploads/clubstep/nightStepLogo_orangeOnBlack_noBackground.png');
  background-size: cover;
  background-position: center;
  border-radius: 35%;




  filter: invert(0%) brightness(100%) grayscale(100%);

&:hover {
  filter: invert(0%) brightness(100%) grayscale(0%);
}


`;

// Appbar Frame
export const AppbarFrame = styled(Box)`
  height: 10vh;
  width: 100%;
  flex-shrink: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 100;
  overflow: hidden;
  background-color: black;

`;

// Appbar Content
export const AppbarContent = styled(Box)`
  position: relative;
  width: 85%;
  height: 100%;
  right: 50%;
  transform: translateX(50%);
  display: flex;
  flex-direction: row;

  @media (min-width: 600px) {
    width: 75%;
  }
  

`;

// Appbar Link Box Left
export const AppbarLinkBoxLeft = styled(Box)`

  position: relative;
  left: 0%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 40%;

  @media (min-width: 600px) {
    display: flex;
  }

`;

export const AppbarLogoBox = styled(Box)`
      
      display: 'flex';
      justifyContent: 'center'; 
      alignItems: 'center'; 
      width: '1vw'; 
      height: '1vh'; 
      align-self: center;
`;

// Appbar Link Box Right
export const AppbarIconBoxRight = styled(Box)`
  max-width: 80%;
  
  position: absolute;
  right: 0%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;



`;

export const AccountBox = styled(Box)`
  display: flex;
  flex-direction: row;
  margin-left: 1.8em;


  &:hover > * {
    color: #ff8000;
  }


`;

// Appbar Menu Box
export const AppbarMenuBox = styled(Box)`
  position: absolute;
  height: 100%;
  right: 50%;
  transform: translateX(50%);
  display: flex;
  align-items: center;

`;


// Account Icon
export const AccountIcon = styled(AccountCircleRoundedIcon)`
  font-size: 24px;
  color: white;

  font-size: 1.6rem;

`;

export const AppbarLink = styled(Link)`
  text-decoration: none;
`;

export const TypoBody1Link = styled(TypoBody1)`
  font-weight: 600;
    
  &:hover {
    color: #ff8000; /* Beim Hover wird der Filter entfernt */
  }

  @media (max-width: 600px) {
    display: none;
  }


`;

export const TypoBody1HOM = styled(TypoBody1)`
    font-weight: 600;

    text-decoration: none;


  @media(min-width: 600px) {
    display: block;
  }

@media (max-width: 600px) {
    &.hiddenOnMobile {
      display: none;
    }
  }

  &:hover {
      color: #ff8000; /* Beim Hover wird der Filter entfernt */
  }

`;

export const HiddenOnMobile = styled(TypoBody1)`
  display: none;

  @media (min-width: 600px) {
      display: block;
  }

`;

export const AppbarSearchIcon = styled(SearchIcon)`
  color: white;

  font-size: 1.6rem;

  padding-left: 1.2em;

  &: hover {
    color: #ff8000;
  }

`;

export const AppbarTextfield = styled(TextField)`


`;


export const AppbarUnfoldMoreIcon = styled(ArrowDropDownCircleOutlinedIcon)`
  color: white;
  display: block;

  font-size: 1.6rem;

  padding-left: 1.2em;

`;

export const MobileMenuOptionsWrapper = styled(Box)`
  height: 100%;

`;

export const MobileMenuOption = styled(Box)`
  background-color: black;

  width: 100vw;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  text-align: center;

`;

export const MobileMenuOptionLink = styled(Link)`
  text-decoration: none;

  color: white;
`;

export const TypoBody1MobileMenuOptionLink = styled(TypoBody1)`
  font-weight: 600;

  color: white;

    
  &:hover {
    color: #ff8000; /* Beim Hover wird der Filter entfernt */
  }

`;