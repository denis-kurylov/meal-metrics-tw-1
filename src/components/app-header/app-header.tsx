import { FC } from 'react'

import { Logo } from './logo'
import { Navigation } from './navigation'

export const AppHeader: FC = () => {
  return (
    <div className='flex h-12 items-center justify-between px-4'>
      <Logo />
      <Navigation />
    </div>
  )
}
