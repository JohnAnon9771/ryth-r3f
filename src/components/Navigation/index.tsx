import Link from 'next/link'

import * as S from './style'

interface Props {
  isHome: boolean
}

export default function Navigation({isHome}: Props): JSX.Element {
  return (
    <>
      {isHome ? (
        <S.NavigationHome>
          <Link href="/work">
            <a>Work</a>
          </Link>
          <Link href="/info">
            <a>Info</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </S.NavigationHome>
      ) : (
        <S.NavigationOtherPages>
          <Link href="/">
            <a>Home</a>
          </Link>
          <span>|</span>
          <Link href="/work">
            <a>Work</a>
          </Link>
          <span>|</span>
          <Link href="/info">
            <a>Info</a>
          </Link>
          <span>|</span>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </S.NavigationOtherPages>
      )}
    </>
  )
}
