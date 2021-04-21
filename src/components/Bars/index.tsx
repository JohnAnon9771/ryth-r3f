import {memo} from 'react'

import {animated, useSpring} from '@react-spring/web'

interface Props {
  position: 'top' | 'bottom'
}

function Bars({position}: Props): JSX.Element {
  const {transform} = useSpring({
    transform: position === 'top' ? 'translateY(-285px)' : 'translateY(285px)',
    from: {
      transform: 'translateY(0px)',
    },
  })
  return <animated.div className={`bar ${position}`} style={{transform}} />
}

export default memo(Bars)
