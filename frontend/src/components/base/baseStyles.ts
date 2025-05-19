import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const FullscreenFlexBox = styled(Box)(({ theme }) => ({
  height: '100%',
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  alignItems: 'center',
  flexGrow: 1,
  backgroundColor: theme.palette.background.default,
}));

export const VerticalCentered = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.grey[100],
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxSizing: 'border-box',
  height: 'auto',
  position: 'relative',
  background: theme.palette.background.default,

  [theme.breakpoints.up('sm')]: {
    width: '75%',
  },
}));