import { ThemeProvider } from "@emotion/react";
import theme from "../../../theme/theme";
import { Box, Link } from "@mui/material";
import { AppbarContentBoxStyle, AppbarFrameBoxStyle, appbarLinkColor, AppbarPartBorder } from "./AppbarStyles";


export default function Appbar() {
  return (
    <ThemeProvider theme={theme}>
      <Box id="AppbarFrameBox" sx={AppbarFrameBoxStyle}>
        <Box id="AppbarContentBox" sx={AppbarContentBoxStyle}>
          <Link href="/home" sx={appbarLinkColor}>Home</Link>
          <Link href="/find" sx={appbarLinkColor}>Find</Link>
          <Link href="/contact" sx={appbarLinkColor}>Contact</Link>
          <Link href="/login" sx={appbarLinkColor}>Login</Link>
          <Link href="/test" sx={appbarLinkColor}>Test</Link>
        </Box>
      </Box>
      <Box id="appbar-part-frame" sx={AppbarPartBorder}></Box>
    </ThemeProvider>
  );
}