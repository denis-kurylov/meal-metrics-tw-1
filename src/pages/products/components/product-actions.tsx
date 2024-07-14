import { FC } from 'react'

import { UiButton } from '@/components/ui-button'

export const ProductActions: FC = () => {
  return (
    <div className='flex items-center justify-center gap-2'>
      <UiButton
        variant='text'
        className='p-0 text-blue-500'
      >
        Edit
      </UiButton>
      <UiButton
        variant='text'
        className='p-0 text-blue-500'
      >
        Delete
      </UiButton>
    </div>
  )
}
