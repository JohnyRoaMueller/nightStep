import { createTheme, ThemeOptions } from "@mui/material";

const theme = createTheme({

    palette: {

      primary: {
            main: '#ff8000',
            contrastText: '#808080',
      },

      background: {
            default: '#666666',
            paper: '#4D4D4D',   
      },

      
      },
    })



export default theme;