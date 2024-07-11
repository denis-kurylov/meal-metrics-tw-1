import { FC, PropsWithChildren } from 'react'

type RowProps = PropsWithChildren

export const Row: FC<RowProps> = (props) => {
  const { children } = props

  return <tr>{children}</tr>
}
