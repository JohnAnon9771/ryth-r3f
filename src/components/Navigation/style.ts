import styled from 'styled-components'

export const Container = styled.nav`
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

    padding-right: 4vw;
    padding-left: 4vw;

    user-select: none;
    @media only screen and (max-width: 801px) {
      font-size: 3vw;
    }
  }
`
