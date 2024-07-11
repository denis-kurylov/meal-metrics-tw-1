import { FC, PropsWithChildren } from 'react'

type DataCellProps = PropsWithChildren

export const DataCell: FC<DataCellProps> = (props) => {
  const { children } = props

  return <td>{children}</td>
}
