import { FC, PropsWithChildren } from 'react'

type TableComponentProps = PropsWithChildren

export const TableComponent: FC<TableComponentProps> = (props) => {
  const { children } = props

  return <table>{children}</table>
}
