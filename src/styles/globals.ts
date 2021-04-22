import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, canvas {
    height: 100%;
    width: 100%;

    font-family: 'Times New Roman', Times, serif;
  }

  :root {
    font-size: 10px;
  }

  .hide {
    height: 0vh;
    min-height: 0;
  }

  
  .bar {
    position: fixed;

    background-color: black;

    height: 50vh;
    width: 100vw;

    transition: 0.3s ease-out;
    z-index: 10;
    @media only screen and (max-width:801px) {
      display: none;
    }
  }

  .top {
    top: 0;
  }
  
  .bottom {
    bottom: 0;
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
