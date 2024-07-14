import { ComponentProps, forwardRef, InputHTMLAttributes } from 'react'
import { Input } from '@headlessui/react'

type UiInputProps = ComponentProps<typeof Input> &
  InputHTMLAttributes<HTMLInputElement>

export const UiInput = forwardRef<HTMLInputElement, UiInputProps>(
  function UiInput(props, ref) {
    return (
      <Input
        {...props}
        ref={ref}
      />
    )
  },
)
