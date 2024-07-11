import { FC } from 'react'

import { navigationData } from './navigation-data'
import { NavigationItem } from './navigation-item'

export const Navigation: FC = () => {
  return (
    <ul className='flex items-center'>
      {navigationData.map((item) => (
        <NavigationItem
          key={item.path}
          navItem={item}
        />
      ))}
    </ul>
  )
}
