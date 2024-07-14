import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { useGetProductsQuery, useUpdateProductMutation } from '@/api/products'
import { UiButton } from '@/components/ui-button'
import { UiInput } from '@/components/ui-input'
import { UiTable } from '@/components/ui-table'
import { IProduct } from '@/types/product'

const columnHelper = createColumnHelper<IProduct>()

type ProductFormFields = Pick<IProduct, 'name' | 'fats' | 'carbs' | 'proteins'>

export const ProductsTable: FC = () => {
  const {
    register,
    handleSubmit,
    reset: resetForm,
  } = useForm<ProductFormFields>()
  const [updateProduct] = useUpdateProductMutation()

  const { data: products = [] } = useGetProductsQuery()

  const [idToEdit, setIdToEdit] = useState<string | null>(null)

  const handleStartEdit = (id: string) => {
    resetForm()
    setIdToEdit(id)
  }

  const handleEndEdit = () => {
    setIdToEdit(null)
  }

  const handleSave: SubmitHandler<ProductFormFields> = (
    formData: ProductFormFields,
  ) => {
    const product = products.find((product) => product.id === idToEdit)
    if (!product || !idToEdit) return

    const changes = { ...formData }

    const formDataKeys = Object.keys(formData) as (keyof ProductFormFields)[]
    formDataKeys.forEach((key) => {
      const formValue = formData[key]
      const productValue = product[key]

      if (formValue === productValue) delete changes[key]
    })

    void updateProduct({ id: idToEdit, changes })
    handleEndEdit()
  }

  const columns = [
    columnHelper.accessor('name', {
      header: 'Name',
      cell: (info) => {
        const { id } = info.row.original
        const value = info.getValue()
        if (id !== idToEdit) return value

        return (
          <UiInput
            type='text'
            defaultValue={value}
            className='h-6 w-full border border-slate-400'
            {...register('name', { required: true })}
          />
        )
      },
    }),
    columnHelper.accessor('fats', {
      header: 'Fats',
      cell: (info) => {
        const { id } = info.row.original
        const value = info.getValue()
        if (id !== idToEdit) return value

        return (
          <UiInput
            type='number'
            defaultValue={value}
            className='h-6 w-full border border-slate-400'
            {...register('fats', { required: true, valueAsNumber: true })}
          />
        )
      },
      meta: {
        cellClassName: 'text-center',
      },
    }),
    columnHelper.accessor('proteins', {
      header: 'Proteins',
      cell: (info) => {
        const { id } = info.row.original
        const value = info.getValue()
        if (id !== idToEdit) return value

        return (
          <UiInput
            type='number'
            defaultValue={value}
            className='h-6 w-full border border-slate-400'
            {...register('proteins', { required: true, valueAsNumber: true })}
          />
        )
      },
      meta: {
        cellClassName: 'text-center',
      },
    }),
    columnHelper.accessor('carbs', {
      header: 'Carbs',
      cell: (info) => {
        const { id } = info.row.original
        const value = info.getValue()
        if (id !== idToEdit) return value

        return (
          <UiInput
            type='number'
            defaultValue={value}
            className='h-6 w-full border border-slate-400'
            {...register('carbs', { required: true, valueAsNumber: true })}
          />
        )
      },
      meta: {
        cellClassName: 'text-center',
      },
    }),
    columnHelper.display({
      id: 'energy',
      header: 'Energy',
      cell: (info) => {
        const { id, fats, proteins, carbs } = info.row.original
        if (id === idToEdit) return null
        return fats * 9 + proteins * 4 + carbs * 4
      },
      meta: {
        cellClassName: 'text-center',
      },
    }),
    columnHelper.display({
      id: 'actions',
      header: 'Actions',
      cell: (info) => {
        const { id } = info.row.original
        const isEditing = id === idToEdit

        return (
          <div className='flex items-center justify-center gap-2'>
            {isEditing ? (
              <>
                <UiButton
                  variant='text'
                  className='p-0 text-blue-500'
                  onClick={handleEndEdit}
                >
                  Cancel
                </UiButton>
                <UiButton
                  variant='text'
                  className='p-0 text-blue-500'
                  onClick={handleSubmit(handleSave)}
                >
                  Save
                </UiButton>
              </>
            ) : (
              <UiButton
                variant='text'
                className='p-0 text-blue-500'
                onClick={() => handleStartEdit(id)}
              >
                Edit
              </UiButton>
            )}
          </div>
        )
      },
      meta: {
        cellClassName: 'text-center',
      },
    }),
  ]

  const table = useReactTable({
    columns,
    data: products,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <form>
      <UiTable>
        <UiTable.Header>
          {table.getHeaderGroups().map((headerGroup) => (
            <UiTable.Row key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <UiTable.HeaderCell key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </UiTable.HeaderCell>
              ))}
            </UiTable.Row>
          ))}
        </UiTable.Header>
        <UiTable.Body>
          {table.getRowModel().rows.map((row) => (
            <UiTable.Row key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <UiTable.DataCell
                  key={cell.id}
                  className={cell.column.columnDef.meta?.cellClassName}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </UiTable.DataCell>
              ))}
            </UiTable.Row>
          ))}
        </UiTable.Body>
      </UiTable>
    </form>
  )
}
