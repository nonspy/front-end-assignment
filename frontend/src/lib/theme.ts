import { createTheme } from "@mui/material"

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, helvetica, arial, sans-serif",
    body1: {
      fontWeight: 500,
    },
    body2: {
      fontWeight: 500,
    },
    fontWeightBold: 900
  },
  shape: {
    borderRadius: 4,
  },
  palette: {
    primary: {
      main: "#6bd400",
    },
    secondary: {
      main: "#5db603",
    },
    text: {
      primary: "#000000",
      secondary: "#515356"
    },
    background: {
      paper: "#f2f2f2",
      default: "#ffffff",
    },
  },
})

export default theme
