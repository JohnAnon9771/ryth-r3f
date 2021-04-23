import styled, {createGlobalStyle} from 'styled-components'

export const Wrapper = styled.section`
  transition: transform 0.5s;
  transform: translateY(50px);

  animation: slideUp 0.5s ease;

  will-change: transform;

  @keyframes slideUp {
    from {
      transform: translateY(80vh);
    }
  }
`

export const Title = styled.div`
  position: absolute;

  display: grid;
  place-items: center;

  width: 100vw;

  text-transform: uppercase;

  letter-spacing: 0.7vw;

  user-select: none;
  pointer-events: none;

  .page-title {
    font-size: 8vw;
    font-weight: 100;

    white-space: nowrap;
    color: rgba(255, 255, 255, 0.1);
  }
  .page-subtitle {
    position: absolute;
    z-index: 2;

    font-size: 1vw;

    color: rgba(255, 255, 255, 0.8);
  }

  @media only screen and (max-width: 801px) {
    .page-title {
      font-size: 11vw;
    }
    .page-subtitle {
      font-size: 2.5vw;
    }
  }
`

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
