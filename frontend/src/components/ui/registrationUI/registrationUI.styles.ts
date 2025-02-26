// registrationUI.styles.ts
import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";
import { Transform, Translate } from "@mui/icons-material";

export const RegistrationWrapper = styled(Box)({
  height: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: '7%',
  justifyContent: "center",

  "@media(min-width: 600px)": {
    flexDirection: "row",

    height: "70vh",
    width: "70%",

    gap: '3%',
  },
});

export const OptionContainer = styled(Box)(({ theme }) => ({
  height: "40%",
  width: "80%",
  alignSelf: "center",

  "@media(min-width: 600px)": {
    height: "75%",
    width: "50%",
  },
}));

export const OptionButton = styled(Button)({
  height: "100%",
  width: "100%",
  position: "relative",
  // Hover- und Focus-Effekte
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiTypoH2-root": {
      opacity: 1,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
  },
});

export const ImageSrcGuest = styled(Box)({
  backgroundImage: "url('./public/uploads/clubstep/registerGuest.jpeg')",
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',  // picture get scaled into frame

});

// Hintergrundbild für die "Host"-Option
export const ImageSrcHost = styled(Box)({
  backgroundImage: "url('./public/uploads/clubstep/registerHost.jpeg')",
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover", 

});

// black overlay (backdrop)
export const ImageBackdrop = styled(Box)({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: "black",
  opacity: 0.4,
  transition: "opacity 0.9s ease",
});

export const ImageHeader = styled(Box)({
  height: '15%',
  width: '100%',
  position: "absolute",
  left: 0,
  top: '-15%',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const StyledTypoH2 = styled(Typography)({
  fontSize: "1.5rem",
  opacity: 0,
  transition: "opacity 0.6s ease",

  '@media(min-width: 600px)': {
    fontSize: "3rem", // = 48px
  }
});

// little black line on the buttons
export const ImageMarked = styled(Box)({
  height: '5%',
  width: '20%',
  backgroundColor: "black",
  position: "absolute",
  left: '50%',
  transform: 'translateX(-50%)',
  bottom: -5,
  zIndex: 10,
  transition: "opacity 0.6s ease",
});