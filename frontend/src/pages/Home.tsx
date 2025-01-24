import * as React from 'react';

import Appbar from '../components/base/appbar/Appbar';
import { Box, ThemeProvider, Typography } from '@mui/material';
import { FullscreenFlexBox } from '../styles/containerStyles/FullscreenFlexBox';
import { VerticalCentered } from '../styles/containerStyles/VerticalCenteredBox';
import Footer from '../components/base/footer/Footer';
import theme from '../theme/theme';
import { HorizontalBox } from '../styles/containerStyles/HorizontalBox';
import { HomeHeader } from '../components/ui/header/homeHeader/HomeHeader';
import Base from '../components/base/base';
import MainContentVertical from '../components/ui/mainContentVertical/mainContentVertical';


export default function Home() {
    return (
            <Base children={
              <>
                {/* ↓↓↓ My Content ↓↓↓ */}
                <HomeHeader></HomeHeader>
                <MainContentVertical></MainContentVertical>
                {/* ↑↑↑ My Content ↑↑↑ */}
              </>
            }>
            </Base>
    )
}