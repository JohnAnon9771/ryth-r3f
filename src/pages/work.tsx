import * as S from 'styles/globals'

import {Navigation} from 'components'

export default function Work(): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.Title>
          <p className="page-title">Work</p>
          <p className="page-subtitle">
            Projects | Colaborations | Explorations
          </p>
        </S.Title>
      </S.Wrapper>
      <Navigation isHome={false} />
    </>
  )
}
