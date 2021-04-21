import Link from 'next/link'
import {useRouter} from 'next/router'

import * as S from './style'

export default function Navigation(): JSX.Element {
  const router = useRouter()
  return (
    <S.Container>
      {router.route !== '/' && (
        <Link href="/">
          <a>Home</a>
        </Link>
      )}
      <Link href="/work">
        <a>Work</a>
      </Link>
      <Link href="/info">
        <a>Info</a>
      </Link>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
    </S.Container>
  )
}
