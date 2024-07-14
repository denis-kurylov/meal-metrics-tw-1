import { FC } from 'react'

import { ProductsTable } from './components/products-table'
import { Toolbar } from './components/toolbar'

export const ProductsPage: FC = () => {
  return (
    <div>
      <h2 className='mb-4 text-2xl font-black uppercase text-slate-500'>
        Products
      </h2>
      <Toolbar />
      <ProductsTable />
    </div>
  )
}
