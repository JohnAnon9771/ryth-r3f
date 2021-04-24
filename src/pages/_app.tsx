import {AppProps} from 'next/app'

import {Canvas} from '@react-three/fiber'
import GlobalStyle from 'styles/globals'

import {Bars, Dots, Navigation} from 'components'

export default function MyApp({Component, pageProps}: AppProps): JSX.Element {
  return (
    <>
      <Canvas
        style={{
          position: 'absolute',
          background: '#0a0a0a',
        }}
        camera={{zoom: 40, position: [0, 0, 1]}}
        orthographic
      >
        <Dots />
      </Canvas>
      <Bars position="top" />
      <Component {...pageProps} />
      <Navigation />
      <Bars position="bottom" />
      <GlobalStyle />
    </>
  )
}
