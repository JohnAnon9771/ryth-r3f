import Head from 'next/head'

import * as S from 'styles/globals'

export default function Blog(): JSX.Element {
  return (
    <>
      <Head>
        <title>Blog | Ryth Solutions</title>
      </Head>
      <S.Wrapper>
        <S.Title>
          <p className="page-title">Blog</p>
          <p className="page-subtitle">React | Next.js | JavaScript</p>
        </S.Title>
      </S.Wrapper>
    </>
  )
}
