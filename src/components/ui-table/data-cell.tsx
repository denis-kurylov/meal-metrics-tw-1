import { FC, PropsWithChildren } from 'react'

import { cn } from '@/utils/cn'

type DataCellProps = PropsWithChildren<{ className?: string }>

export const DataCell: FC<DataCellProps> = (props) => {
  const { className, children } = props

  return (
    <td className={cn('h-8 px-4 text-sm text-slate-600', className)}>
      {children}
    </td>
  )
}
