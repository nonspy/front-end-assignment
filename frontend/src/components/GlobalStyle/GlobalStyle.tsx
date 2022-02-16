import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  body, html, #root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: "Roboto", Helvetica, Tahoma, sans-serif;
  }
  body {
    overflow-y: auto;
    color: #000000;
    background-color: #f2f2f2;
    -webkit-overflow-scrolling: touch;
  }
  .ReactModal__Body--open {
    overflow: hidden;
  }
  h1, h2, h3, h4, h5, h6, p, button, blockquote, ul, ol, li, span, input, label, select, textarea, pre, code {
    margin: 0;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: transparent; /* or add it to the track */
  }
  &::-webkit-scrollbar-thumb {
    background: #474747;
    border-radius: 2em;
  }
`
