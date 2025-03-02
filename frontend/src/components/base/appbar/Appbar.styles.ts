// import NightStepLogo from '../../../assets/images/nightStepLogo-WhiteOnBlack.svg?react'; // ?react suffix very relevant! tried import SVG for 4 hours
import { Box, styled, Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import { Link } from "react-router-dom";
import { TypoBody1 } from "../../../styled-components/styledTypographie";


export const NightStepLogo = styled('div')`
  position: absolute;
  transform: translate(-30%, -50%);


  width: 50px;
  height: 50px;
  background-image: url('/uploads/clubstep/nightStepLogo_orangeOnBlack_noBackground.png');
  background-size: cover;
  background-position: center;
  border-radius: 35%;

  /* Bild wird auf Graustufen und danach invertiert */
  filter: invert(100%) brightness(100%) grayscale(100%);

  &:hover {
    filter: invert(0%) brightness(100%) grayscale(0%); /* Beim Hover wird der Filter entfernt */
  }

  @media (min-width: 600px) {
    display: flex;
    position: static;
    transform: none;
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
  border-bottom: 0.2em solid;
  overflow: hidden;
  background-color: black;

`;

// Appbar Content
export const AppbarContent = styled(Box)`
  position: relative;
  width: 75%;
  height: 100%;
  right: 50%;
  transform: translateX(50%);
  display: flex;
  flex-direction: row;
  

`;

// Appbar Link Box Left
export const AppbarLinkBoxLeft = styled(Box)`
  position: relative;
  left: 0%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 20%;

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
      overflow: 'hidden';
`;

// Appbar Link Box Right
export const AppbarLinkBoxRight = styled(Box)`
  position: absolute;
  right: 0%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 13px;
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

// Account Link Box
export const AccountLinkBox = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 1px;
  
`;

// Account Icon Box
export const AccountLink = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;

  

`;

// Account Icon
export const AccountIcon = styled(PersonIcon)`
  font-size: 24px;
  color: white;
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

export const AppbarUnfoldMoreIcon = styled(UnfoldMoreIcon)`
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: block;

  @media(min-width: 600px) {
    display: none;
  }

`;

export const MobileMenuOptionsWrapper = styled(Box)`
  height: 100%;

`;

export const MobileMenuOption = styled(Box)`
  background-color: black;

  width: 100vw;
  height: 5vh;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  text-align: center;

`;

export const MobileMenuOptionLink = styled(Link)`
  text-decoration: none;
`;

export const TypoBody1MobileMenuOptionLink = styled(TypoBody1)`
  font-weight: 600;
    
  &:hover {
    color: #ff8000; /* Beim Hover wird der Filter entfernt */
  }

`;