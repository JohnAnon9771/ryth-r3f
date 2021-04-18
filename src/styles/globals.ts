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
  }

  :root {
    font-size: 10px;
  }

  button, a {
    cursor: pointer
  }

  input, textarea {
    outline: none;
  }
`
