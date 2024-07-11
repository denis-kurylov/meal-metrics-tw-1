import { FC, PropsWithChildren } from 'react'

type HeaderCellProps = PropsWithChildren

export const HeaderCell: FC<HeaderCellProps> = (props) => {
  const { children } = props

  return <th>{children}</th>
}
