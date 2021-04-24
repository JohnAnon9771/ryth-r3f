import Head from 'next/head'

import * as S from 'styles/globals'

export default function Work(): JSX.Element {
  return (
    <>
      <Head>
        <title>Work | Ryth Solutions</title>
      </Head>
      <S.Wrapper>
        <S.Title>
          <p className="page-title">Work</p>
          <p className="page-subtitle">
            Projects | Colaborations | Explorations
          </p>
        </S.Title>
      </S.Wrapper>
    </>
  )
}
