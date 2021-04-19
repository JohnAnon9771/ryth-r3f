import styled from 'styled-components'

export const BlackBar = styled.div<{
  top?: boolean
  footer?: boolean
  translateY?: string
}>`
  position: absolute;
  top: ${props => (props.top ? 0 : 'auto')};
  bottom: ${props => (props.footer ? 0 : 'auto')};
  height: 12vh;
  width: 100vw;
  transition: all 200ms;
  animation: ${props => (props.top ? 'showAnimatedTop' : 'showAnimatedBottom')}
    1s ease-out;

  background-color: black;

  ${props =>
    props.top
      ? '@keyframes showAnimatedTop'
      : '@keyframes showAnimatedBottom'} {
    0% {
      transform: translateY(${props => props.translateY});
    }

    100% {
      transform: translateY(0px);
    }
  }
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`
