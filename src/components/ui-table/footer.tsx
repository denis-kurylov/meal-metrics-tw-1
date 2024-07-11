import { FC, PropsWithChildren } from 'react'

type FooterProps = PropsWithChildren

export const Footer: FC<FooterProps> = (props) => {
  const { children } = props

  return <tfoot>{children}</tfoot>
}
