import { FC, PropsWithChildren } from 'react'

type DataCellProps = PropsWithChildren

export const DataCell: FC<DataCellProps> = (props) => {
  const { children } = props

  return <td className='h-8 text-center text-sm text-slate-600'>{children}</td>
}
