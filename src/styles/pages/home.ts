import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;

  .bar {
    position: fixed;

    background-color: black;

    height: 50vh;
    width: 100vw;

    transition: 0.3s ease-out;
    z-index: 10;
  }

  .top {
    top: 0;
  }
  .bottom {
    bottom: 0;
  }

  .titles {
    position: absolute;

    display: grid;
    place-items: center;

    width: 100vw;

    text-transform: uppercase;
    text-align: center;

    pointer-events: none;
    user-select: none;

    color: rgba(255, 255, 255, 0.8);

    .page-title {
      font-size: 5vw;
      letter-spacing: 2.6vw;

      text-indent: 2.6vw;

      font-weight: 100;
    }
    .sub-title {
      font-size: 1vw;

      letter-spacing: 1.8vw;
      text-indent: 1.8vw;
    }
  }
`
