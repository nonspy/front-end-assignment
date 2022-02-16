import React from "react"
import ReactDOM from "react-dom"
import { StyleSheetManager } from "styled-components"
import { ThemeProvider } from "@mui/material"

import theme from "./lib/theme"
import GlobalStyle from "./components/GlobalStyle"
import CheckOut from "./components/CheckOut"

const node = document.getElementById("checkout")

if (node) {
  ReactDOM.render(
    <StyleSheetManager>
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <CheckOut />
        </ThemeProvider>
        </>
    </StyleSheetManager>,
    node
  )
}
