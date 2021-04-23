import * as S from 'styles/globals'

import {Navigation} from 'components'

export default function Info(): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.Title>
          <p className="page-title">Info</p>
          <p className="page-subtitle">About us | Work | Contact</p>
        </S.Title>
      </S.Wrapper>
      <Navigation isHome={false} />
    </>
  )
}
