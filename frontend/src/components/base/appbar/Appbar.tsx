import { ThemeProvider } from "@emotion/react";
import theme from "../../../theme/theme";
import { Box, Button, Link, Typography } from "@mui/material";
import { accountLinkBox, appbarAccountBox, AppbarContentBoxStyle, AppbarFrameBoxStyle, appbarLinkBox, appbarLinkBoxLeft, appbarLinkBoxRight, appbarLinkColor, appbarMenuBox, AppbarPartBorder } from "./AppbarStyles";

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LoginIcon from '@mui/icons-material/Login';
import QuizIcon from '@mui/icons-material/Quiz';
import { TypeSpecimenOutlined } from "@mui/icons-material";
import PersonIcon from '@mui/icons-material/Person';
import AppbarMenu from "./appbarMenu/AppbarMenu";




export default function Appbar() {
  return (
    <ThemeProvider theme={theme}>
      <Box id="AppbarFrameBox" sx={AppbarFrameBoxStyle}>
        <Box id="AppbarContentBox" sx={AppbarContentBoxStyle}>
          <Box id="AppbarLinkBoxLeft" sx={appbarLinkBoxLeft}>
            <Link href="/home" sx={appbarLinkColor}>
              <Typography className="AppbarTypo">home</Typography>

            </Link>
            <Link href="/find" sx={appbarLinkColor}>
              <Typography className="AppbarTypo">find</Typography>

            </Link>
            <Link href="/contact" sx={appbarLinkColor}>
              <Typography className="AppbarTypo">contact</Typography>

            </Link>
            <Link href="/test" sx={appbarLinkColor}>
              <Typography className="AppbarTypo">test</Typography>

            </Link>
          </Box>
          <Box id="appbarLinkBoxRight" sx={appbarLinkBoxRight}>
            <Link href="/login" sx={appbarLinkColor}>
              <Box id="accountLinkBox" sx={accountLinkBox}>
                <PersonIcon></PersonIcon>
                <Typography className="AppbarTypo">Mein Konto</Typography>
              </Box>  
            </Link>
          </Box>
          <Box id="appbarMenuBox" sx={appbarMenuBox} >
              <AppbarMenu></AppbarMenu>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}