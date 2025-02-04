import React from "react";
import { Link } from "react-router-dom"; // Hier react-router-dom nutzen!
import {
  RegistrationWrapper,
  OptionContainer,
  OptionButton,
  ImageSrcGuest,
  ImageSrcHost,
  ImageBackdrop,
  StyledTypoH2,
  ImageMarked,
  ImageHeader,
} from "./registrationUI.styles.ts";

function RegistrationUI() {
  return (
    <RegistrationWrapper>
      {/* Guest-Option */}
      <OptionContainer>
        <OptionButton variant="contained">
          <Link to="/register/guest">
            <ImageHeader>
              <StyledTypoH2 variant="h2" className="MuiTypoH2-root">
                join as a guest
              </StyledTypoH2>
              <ImageMarked className="MuiImageMarked-root" />
            </ImageHeader>
            <ImageSrcGuest />
            <ImageBackdrop className="MuiImageBackdrop-root" />
          </Link>
        </OptionButton>
      </OptionContainer>

      {/* Host-Option */}
      <OptionContainer>
        <OptionButton variant="contained">
          <Link to="/register/host">
            <ImageHeader>
              <StyledTypoH2 variant="h2" className="MuiTypoH2-root">
                join as a host
              </StyledTypoH2>
              <ImageMarked className="MuiImageMarked-root" />
            </ImageHeader>
            <ImageSrcHost />
            <ImageBackdrop className="MuiImageBackdrop-root" />
          </Link>
        </OptionButton>
      </OptionContainer>
    </RegistrationWrapper>
  );
}

export default RegistrationUI;
