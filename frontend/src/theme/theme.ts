import { createTheme, ThemeOptions } from '@mui/material';

const theme: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: '#ff8000',
      contrastText: '#808080',
    },
    secondary: {
      main: '#00bcd4', // Turquoise blue as the secondary color
      contrastText: '#ffffff', // White for better contrast
    },
    background: {
      default: '#666666',
      paper: '#4D4D4D',
    },
    success: {
      main: '#4caf50', // Green tone for positive actions
      contrastText: '#ffffff',
    },
    error: {
      main: '#f44336', // Red highlight for errors
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ff0000', // Yellow for warnings
      contrastText: '#000000', // Darker text for contrast
    },
    info: {
      main: '#2196f3', // Blue for info status
      contrastText: '#ffffff',
    },
  },
  typography: {
    // Default font size for the body
    body1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: '1.2rem',
      lineHeight: 1.5,
      color: '#FFFFFF', // White text on dark background
    },
    // Body text (secondary text)
    body2: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: '1rem',
      lineHeight: 1.4,
      color: '#B3B3B3', // Light gray for less important info
    },
    // Heading 1
    h1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
      fontSize: '3rem',
      color: '#ff8000', // Primary color for striking headlines
    },
    // Heading 2
    h2: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      fontSize: '2.25rem',
      color: '#ff8000', // Also set primary color here
    },
    // Button
    button: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      justifyText: 'center',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: '0.875rem',
      textTransform: 'uppercase',
      color: '#FFFFFF',
      backgroundColor: '#ff8000',
      '&:hover': {
        backgroundColor: '#e67600', // Slightly darker orange on hover
      },
    },
    // Caption (small labels)
    caption: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: '0.75rem',
      color: '#808080', // Dark gray for captions and small text
    },
  },
});

export default theme;