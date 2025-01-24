import * as React from 'react';

import { Box, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import theme from '../theme/theme';
import Appbar from '../components/base/appbar/Appbar';

import ContactForm from '../components/form/contactForm/ContactForm';

import Footer from '../components/base/footer/Footer';
import Base from '../components/base/base';


export default function Dashboard() {
  return (
    <Base children={
      <>
        {/* ↓↓↓ My Content ↓↓↓ */} {/* ↓↓↓ My Content ↓↓↓ */}
            my dashbaord Content
        {/* ↑↑↑ My Content ↑↑↑ */} {/* ↑↑↑ My Content ↑↑↑ */}
        </>
            }>
            </Base>
  );
}