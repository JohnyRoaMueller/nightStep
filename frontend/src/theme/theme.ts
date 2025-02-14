import { createTheme, ThemeOptions } from '@mui/material';

const theme: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: '#ff8000',
      contrastText: '#808080',
    },
    secondary: {
      main: '#00bcd4', // Türkis-Blau als sekundäre Farbe
      contrastText: '#ffffff', // Weiß für besseren Kontrast
    },
    background: {
      default: '#666666',
      paper: '#4D4D4D',
    },
    success: {
      main: '#4caf50', // Grünton für positive Aktionen
      contrastText: '#ffffff',
    },
    error: {
      main: '#f44336', // Rotes Highlight für Fehler
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ffeb3b', // Gelb für Warnungen
      contrastText: '#000000', // Dunklerer Text für Kontrast
    },
    info: {
      main: '#2196f3', // Blau für Info-Status
      contrastText: '#ffffff',
    },
  },
  typography: {
    // Standard Schriftgröße für den Body
    body1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: '1rem',
      lineHeight: 1.5,
      color: '#FFFFFF', // Weiß für Text auf dunklem Hintergrund
    },
    // Body Text (Sekundärer Text)
    body2: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: '0.875rem',
      lineHeight: 1.4,
      color: '#B3B3B3', // Helle Grautöne für weniger wichtige Informationen
    },
    // Überschrift 1
    h1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
      fontSize: '3rem',
      color: '#ff8000', // Hauptfarbe für auffällige Überschrift
    },
    // Überschrift 2
    h2: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      fontSize: '2.25rem',
      color: '#ff8000', // Setze auch hier deine Hauptfarbe
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
        backgroundColor: '#e67600', // Etwas dunkleres Orange für den Hover-Effekt
      },
    },
    // Caption (Kleine Beschriftungen)
    caption: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: '0.75rem',
      color: '#808080', // Dunkelgrau für Bildunterschriften und kleine Texte
    },
  },
});

export default theme;