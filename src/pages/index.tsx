import Head from 'next/head'

import * as S from 'styles/pages/home'

import {Navigation} from 'components'

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Home | Ryth Solutions</title>
      </Head>
      <S.Container>
        <div className="titles">
          <p className="page-title">Ryth Solutions</p>
          <p className="sub-title">Web | Mobile | Back-end</p>
        </div>
        <Navigation isHome />
      </S.Container>
    </>
  )
}
