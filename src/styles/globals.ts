import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    width: 100%;

    font-family: 'futura-pt', 'sans-serif';
  }

  :root {
    font-size: 10px;
    overflow: hidden;
  }

  button, a {
    cursor: pointer
  }

  a {
    text-decoration: none;
  }

  input, textarea {
    outline: none;
  }
`
