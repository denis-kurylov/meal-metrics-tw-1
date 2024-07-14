import { createBrowserRouter, Navigate } from 'react-router-dom'

import { Routes } from './constants/routes'
import { MainLayout } from './layouts/main'
import { ProductsPage } from './pages/products'

export const router = createBrowserRouter([
  {
    path: Routes.ROOT,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={Routes.PLAN_LIST} />,
      },
      {
        path: Routes.PROFILE,
        element: <div>Profile</div>,
      },
      {
        path: Routes.PRODUCT_LIST,
        element: <ProductsPage />,
      },
      {
        path: Routes.PLAN_LIST,
        element: <div>Plan List</div>,
      },
      {
        path: Routes.PLAN_DETAILS,
        element: <div>Plan Details</div>,
      },
    ],
  },
  {
    path: Routes.NOT_FOUND,
    element: <Navigate to={Routes.PLAN_LIST} />,
  },
])
