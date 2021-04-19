import * as S from 'styles/pages/home'

export default function Home(): JSX.Element {
  return (
    <S.Container>
      <S.BlackBar top translateY="-100px" />
      <h2>Hello world</h2>
      <S.BlackBar footer translateY="100px" />
    </S.Container>
  )
}
