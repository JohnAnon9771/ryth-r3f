import * as S from 'styles/pages/home'

import {Bars, Navigation} from 'components'

export default function Home(): JSX.Element {
  return (
    <S.Container>
      <Bars position="top" />
      <div className="titles">
        <p className="page-title">Ryth Solutions</p>
        <p className="sub-title">Web | Mobile | Back-end</p>
      </div>
      <Navigation />
      <Bars position="bottom" />
    </S.Container>
  )
}
