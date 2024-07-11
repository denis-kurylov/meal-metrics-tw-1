import { FC, PropsWithChildren } from 'react'

type BodyProps = PropsWithChildren

export const Body: FC<BodyProps> = (props) => {
  const { children } = props

  return <tbody>{children}</tbody>
}
