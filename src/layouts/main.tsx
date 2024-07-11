import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { AppHeader } from '@/components/app-header'

export const MainLayout: FC = () => {
  return (
    <>
      <AppHeader />
      <div className='container mt-8'>
        <Outlet />
      </div>
    </>
  )
}
