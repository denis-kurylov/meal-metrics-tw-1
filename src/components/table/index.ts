import { Body } from './body'
import { DataCell } from './data-cell'
import { Footer } from './footer'
import { Header } from './header'
import { HeaderCell } from './header-cell'
import { Row } from './row'
import { TableComponent } from './table-component'

export const Table = Object.assign(TableComponent, {
  Body,
  DataCell,
  Footer,
  Header,
  HeaderCell,
  Row,
})
