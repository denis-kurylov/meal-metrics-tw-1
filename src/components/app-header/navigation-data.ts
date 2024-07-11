import { Routes } from '@/constants/routes'

import { NavigationDataItem } from './types'

export const navigationData: NavigationDataItem[] = [
  {
    title: 'Plans',
    path: Routes.PLAN_LIST,
  },
  {
    title: 'Products',
    path: Routes.PRODUCT_LIST,
  },
  {
    title: 'Profile',
    path: Routes.PROFILE,
  },
]
