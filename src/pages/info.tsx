import Head from 'next/head'

import * as S from 'styles/globals'

export default function Info(): JSX.Element {
  return (
    <>
      <Head>
        <title>Info | Ryth Solutions</title>
      </Head>
      <S.Wrapper>
        <S.Title>
          <p className="page-title">Info</p>
          <p className="page-subtitle">About us | Work | Contact</p>
        </S.Title>
      </S.Wrapper>
    </>
  )
}
