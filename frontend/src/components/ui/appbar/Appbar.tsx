import { Box, Link } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../theme/theme'; // Dein Theme-Import
import { AppbarFrameBoxStyle, AppbarContentBoxStyle, AppbarPartBorder, appbarLinkColor } from './AppbarStyles';

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