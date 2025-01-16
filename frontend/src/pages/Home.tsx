import * as React from 'react';

import Appbar from '../components/ui/appbar/Appbar';
import { Box, ThemeProvider, Typography } from '@mui/material';
import { FullscreenFlexBox } from '../styles/containerStyles/FullscreenFlexBox';
import { VerticalCentered } from '../styles/containerStyles/VerticalCenteredBox';
import Footer from '../components/ui/footer/Footer';
import theme from '../theme/theme';
import { HorizontalBox } from '../styles/containerStyles/HorizontalBox';
import { mainContentBox, mainContentVertical } from '../components/ui/mainContentVertical/MainContentVerticalStyles';
import MainContentVertical from '../components/ui/mainContentVertical/mainContentVertical';
import { HomeHeader } from '../components/ui/header/homeHeader/HomeHeader';


export default function Home() {
    return (
        <ThemeProvider theme={theme}>
        <Box className= "asd" id="Home-FullscreenFlexBox" sx={FullscreenFlexBox}>
          <Appbar/>
          <Box id="Home-VerticalCentered" sx={VerticalCentered}>
            {/* ↓↓↓ My Content ↓↓↓ */}
            <HomeHeader></HomeHeader>
            <MainContentVertical></MainContentVertical>
            {/* ↑↑↑ My Content ↑↑↑ */}
          </Box>
          <Footer/>
        </Box>
      </ThemeProvider>
    )
}