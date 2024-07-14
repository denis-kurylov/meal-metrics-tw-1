import { IProduct } from '@/types/product'

import { api } from './api-base'

const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], void>({
      query: () => 'products',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Products' as const, id })),
              { type: 'Products', id: 'LIST' },
            ]
          : [{ type: 'Products', id: 'LIST' }],
    }),
    updateProduct: builder.mutation<
      void,
      { id: string; changes: Partial<IProduct> }
    >({
      query: ({ id, changes }) => ({
        url: `products/${id}`,
        method: 'PATCH',
        body: changes,
      }),
      invalidatesTags: [{ type: 'Products', id: 'LIST' }],
    }),
  }),
})

export const { useGetProductsQuery, useUpdateProductMutation } = productsApi
