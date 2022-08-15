import { createTheme } from "@mui/material";
import { blue, deepOrange } from "@mui/material/colors";

export const LightTheme = createTheme({
  palette:{
    primary:{
      main: blue[400],
      dark: blue[700],
      light: blue[500],
      contrastText: '#ffffff',
    },
    secondary:{
      main: deepOrange[500],
      dark: deepOrange[400],
      light: deepOrange[300],
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#f7f6f3',
    }
  }
})