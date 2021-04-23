import styled from 'styled-components'

export const NavigationOtherPages = styled.nav`
  position: absolute;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 30%;
  padding: 20px 40px;

  right: 0;

  transition: transition 0.5s;
  transform: translateY(10px);

  animation: slideDown 0.5s ease;

  will-change: transform;

  @keyframes slideDown {
    from {
      transform: translateY(-20px);
    }
  }

  a {
    display: inline-block;

    text-transform: uppercase;

    color: white;

    letter-spacing: 0.2vw;
    font-size: 1vw;
    text-indent: 0.2vw;

    opacity: 0.5;

    user-select: none;
  }

  span {
    color: white;
  }

  @media only screen and (max-width: 801px) {
    width: 100%;

    a {
      font-size: 2vw;
    }
  }
`

export const NavigationHome = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  bottom: 15vh;

  width: 50vw;

  margin-top: 10vh;

  a {
    display: inline-block;

    text-transform: uppercase;
    color: white;
    letter-spacing: 0.2vw;
    font-size: 1vw;
    text-indent: 0.2vw;

    opacity: 0.5;

    user-select: none;

    @media only screen and (max-width: 801px) {
      font-size: 3vw;
    }
  }
`
