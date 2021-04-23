import * as S from 'styles/globals'

import {Navigation} from 'components'

export default function Blog(): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.Title>
          <p className="page-title">Blog</p>
          <p className="page-subtitle">React | Next.js | JavaScript</p>
        </S.Title>
      </S.Wrapper>
      <Navigation isHome={false} />
    </>
  )
}
