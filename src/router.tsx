import { createBrowserRouter, Navigate } from 'react-router-dom'

import { Routes } from './constants/routes'
import { MainLayout } from './layouts/main'

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
        path: Routes.PRODUCTS,
        element: <div>Products</div>,
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
