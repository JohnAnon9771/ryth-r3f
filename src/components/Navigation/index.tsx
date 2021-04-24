import Link from 'next/link'
import {useRouter} from 'next/router'

import * as S from './style'

export default function Navigation(): JSX.Element {
  const router = useRouter()
  return (
    <>
      {router.route === '/' ? (
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
