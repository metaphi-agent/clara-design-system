import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import { Plus, ChevronRight } from 'lucide-react'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary'
export type ButtonState = 'default' | 'pressed' | 'disabled'
export type ButtonSize = 'lg' | 'sm'

interface ButtonProps {
  variant?: ButtonVariant
  state?: ButtonState
  size?: ButtonSize
  leftIcon?: boolean
  rightIcon?: boolean
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export function Button({
  variant = 'primary',
  state = 'default',
  size = 'lg',
  leftIcon = false,
  rightIcon = false,
  children,
  onClick,
  className
}: ButtonProps) {
  const isDisabled = state === 'disabled'

  const baseClasses = clsx(
    'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    size === 'lg' ? 'px-6 py-3 text-base rounded-full' : 'px-4 py-2 text-sm rounded-full',
    className
  )

  const variantClasses = {
    primary: clsx(
      'text-white',
      state === 'default' && 'bg-gradient-to-b from-[#4187FF] to-[#2472F8] hover:from-[#2472F8] hover:to-[#1A5CD4] shadow-md hover:shadow-lg focus:ring-clara-blue-500',
      state === 'pressed' && 'bg-gradient-to-b from-[#2472F8] to-[#1A5CD4] shadow-inner',
      state === 'disabled' && 'bg-clara-grey-300 cursor-not-allowed opacity-50'
    ),
    secondary: clsx(
      'text-clara-blue-500',
      state === 'default' && 'bg-clara-blue-100 hover:bg-clara-blue-200 focus:ring-clara-blue-300',
      state === 'pressed' && 'bg-clara-blue-200',
      state === 'disabled' && 'bg-clara-grey-100 text-clara-grey-400 cursor-not-allowed'
    ),
    tertiary: clsx(
      state === 'default' && 'text-clara-blue-500 hover:bg-clara-blue-100 focus:ring-clara-blue-200',
      state === 'pressed' && 'text-clara-blue-700 bg-clara-blue-100',
      state === 'disabled' && 'text-clara-grey-400 cursor-not-allowed'
    )
  }

  return (
    <motion.button
      className={clsx(baseClasses, variantClasses[variant])}
      onClick={onClick}
      disabled={isDisabled}
      whileTap={!isDisabled ? { scale: 0.98 } : undefined}
      whileHover={!isDisabled ? { scale: 1.02 } : undefined}
    >
      {leftIcon && <Plus className={size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />}
      {children}
      {rightIcon && <ChevronRight className={size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />}
    </motion.button>
  )
}
