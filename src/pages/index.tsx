import * as S from 'styles/pages/home'

import {Navigation} from 'components'

export default function Home(): JSX.Element {
  return (
    <S.Container>
      <div className="titles">
        <p className="page-title">Ryth Solutions</p>
        <p className="sub-title">Web | Mobile | Back-end</p>
      </div>
      <Navigation />
    </S.Container>
  )
}
