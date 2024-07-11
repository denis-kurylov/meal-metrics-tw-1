import { FC, PropsWithChildren } from 'react'

type HeaderProps = PropsWithChildren

export const Header: FC<HeaderProps> = (props) => {
  const { children } = props

  return <thead>{children}</thead>
}
