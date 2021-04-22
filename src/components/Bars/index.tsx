import {useRouter} from 'next/router'

import {animated, useSpring} from '@react-spring/web'

interface Props {
  position: 'top' | 'bottom'
}

export default function Bars({position}: Props): JSX.Element {
  const router = useRouter()
  const {transform} = useSpring({
    transform:
      position === 'top'
        ? router.route !== '/'
          ? 'translateY(calc(-50vh * 1))'
          : 'translateY(calc(-50vh * 0.8))'
        : router.route !== '/'
        ? 'translateY(calc(50vh * 1))'
        : 'translateY(calc(50vh * 0.8))',
    from: {
      transform: 'translateY(0px)',
    },
  })

  return <animated.div className={`bar ${position}`} style={{transform}} />
}
