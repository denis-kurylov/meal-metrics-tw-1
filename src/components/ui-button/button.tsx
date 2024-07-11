import { ComponentProps, FC } from 'react'
import { Button } from '@headlessui/react'

import { cn } from '@/utils/cn'

interface UiButtonProps extends ComponentProps<typeof Button> {
  variant?: 'solid' | 'text'
  className?: string
  children?: React.ReactNode
}

export const UiButton: FC<UiButtonProps> = (props) => {
  const { variant = 'solid', className, children, ...restProps } = props

  return (
    <Button
      className={cn(
        'px-3 py-2 text-xs font-semibold uppercase duration-200 ease-in-out hover:opacity-75',
        {
          'text-slate-500 data-[active=true]:text-slate-700':
            variant === 'text',
          'bg-blue-500 text-slate-100 data-[active=true]:bg-blue-700':
            variant === 'solid',
        },
        className,
      )}
      {...restProps}
    >
      {children}
    </Button>
  )
}
