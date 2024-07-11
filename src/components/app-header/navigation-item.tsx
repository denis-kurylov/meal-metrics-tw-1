import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { cn } from '@/utils/cn'

import { NavigationDataItem } from './types'

interface NavigationItemProps {
  navItem: NavigationDataItem
}

export const NavigationItem: FC<NavigationItemProps> = (props) => {
  const {
    navItem: { title, path },
  } = props

  return (
    <li key={path}>
      <NavLink
        to={path}
        className={({ isActive }) =>
          cn(
            'rounded px-3 py-2 text-xs font-semibold uppercase text-slate-500 duration-300 hover:text-blue-500',
            {
              'text-slate-700': isActive,
            },
          )
        }
      >
        {title}
      </NavLink>
    </li>
  )
}
