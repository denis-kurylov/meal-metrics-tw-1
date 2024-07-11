import { FC, PropsWithChildren } from 'react'

type TableComponentProps = PropsWithChildren

export const TableComponent: FC<TableComponentProps> = (props) => {
  const { children } = props

  return (
    <table className='w-full table-fixed border border-slate-200'>
      {children}
    </table>
  )
}
