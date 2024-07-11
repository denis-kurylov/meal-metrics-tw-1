import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { UiButton } from '../ui-button'

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
      <NavLink to={path}>
        {({ isActive }) => (
          <UiButton
            variant='text'
            data-active={isActive}
          >
            {title}
          </UiButton>
        )}
      </NavLink>
    </li>
  )
}
