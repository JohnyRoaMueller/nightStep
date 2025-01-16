import * as React from 'react';

import { Box, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import theme from '../theme/theme';
import { FullscreenFlexBox } from '../styles/containerStyles/FullscreenFlexBox';
import { VerticalCentered } from '../styles/containerStyles/VerticalCenteredBox';
import Appbar from '../components/ui/appbar/Appbar';

import ContactForm from '../components/form/contactForm/ContactForm';

import Footer from '../components/ui/footer/Footer';


export default function Contact() {
  return (
    <ThemeProvider theme={theme}>
      <Box id="Contact-FullscreenFlexBox" sx={FullscreenFlexBox}>
        <Appbar/>
        <Box id="Contact-VerticalCentered" sx={VerticalCentered}>
        {/* ↓↓↓ My Content ↓↓↓ */} {/* ↓↓↓ My Content ↓↓↓ */}
          <ContactForm></ContactForm>
        {/* ↑↑↑ My Content ↑↑↑ */} {/* ↑↑↑ My Content ↑↑↑ */}
        </Box>
        <Footer/>
      </Box>
    </ThemeProvider>
  );
}