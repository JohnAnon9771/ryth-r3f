import {AppProps} from 'next/app'

import GlobalStyle from 'styles/globals'

export default function MyApp({Component, pageProps}: AppProps): JSX.Element {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}
