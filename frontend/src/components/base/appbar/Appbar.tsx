import { ThemeProvider } from "@emotion/react";
import theme from "../../../theme/theme";
import { Box, Link, Typography } from "@mui/material";
import { AppbarContentBoxStyle, AppbarFrameBoxStyle, appbarLinkColor, AppbarPartBorder } from "./AppbarStyles";

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LoginIcon from '@mui/icons-material/Login';
import QuizIcon from '@mui/icons-material/Quiz';


export default function Appbar() {
  return (
    <ThemeProvider theme={theme}>
      <Box id="AppbarFrameBox" sx={AppbarFrameBoxStyle}>
        <Box id="AppbarContentBox" sx={AppbarContentBoxStyle}>
          <Link href="/home" sx={appbarLinkColor}>
            <Typography className="AppbarTypo">home</Typography>
            <HomeIcon className="AppbarIcon"></HomeIcon>
          </Link>
          <Link href="/find" sx={appbarLinkColor}>
            <Typography className="AppbarTypo">find</Typography>
            <SearchIcon className="AppbarIcon"></SearchIcon>
          </Link>
          <Link href="/contact" sx={appbarLinkColor}>
            <Typography className="AppbarTypo">contact</Typography>
            <ContactPageIcon className="AppbarIcon"></ContactPageIcon>
          </Link>
          <Link href="/login" sx={appbarLinkColor}>
            <Typography className="AppbarTypo">login</Typography> 
            <LoginIcon className="AppbarIcon"></LoginIcon> 
          </Link>
          <Link href="/test" sx={appbarLinkColor}>
            <Typography className="AppbarTypo">test</Typography>
            <QuizIcon className="AppbarIcon"></QuizIcon>
          </Link>
        </Box>
      </Box>
    </ThemeProvider>
  );
}