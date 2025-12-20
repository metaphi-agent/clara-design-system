import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import { Share2, Plus, ArrowRight, X, Scan, MessageCircle, ArrowLeft } from 'lucide-react'

export type IconButtonVariant = 'primary' | 'secondary' | 'tertiary'
export type IconButtonState = 'default' | 'pressed'
export type IconButtonShape = 'round' | 'oval'
export type IconType = 'share' | 'add' | 'arrow' | 'close' | 'scan' | 'chat' | 'back'

interface IconButtonProps {
  variant?: IconButtonVariant
  state?: IconButtonState
  shape?: IconButtonShape
  icon?: IconType
  onClick?: () => void
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const iconMap = {
  share: Share2,
  add: Plus,
  arrow: ArrowRight,
  close: X,
  scan: Scan,
  chat: MessageCircle,
  back: ArrowLeft
}

export function IconButton({
  variant = 'primary',
  state = 'default',
  shape = 'round',
  icon = 'share',
  onClick,
  className,
  size = 'md'
}: IconButtonProps) {
  const Icon = iconMap[icon]

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  }

  const iconSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  }

  const baseClasses = clsx(
    'inline-flex items-center justify-center transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    shape === 'round' ? 'rounded-full' : 'rounded-xl',
    sizeClasses[size],
    className
  )

  const variantClasses = {
    primary: clsx(
      'text-white',
      state === 'default' && 'bg-gradient-to-b from-[#4187FF] to-[#2472F8] hover:from-[#2472F8] hover:to-[#1A5CD4] shadow-md hover:shadow-lg focus:ring-clara-blue-500',
      state === 'pressed' && 'bg-gradient-to-b from-[#2472F8] to-[#1A5CD4] shadow-inner'
    ),
    secondary: clsx(
      'text-clara-blue-500',
      state === 'default' && 'bg-clara-grey-100 hover:bg-clara-grey-200 focus:ring-clara-grey-300',
      state === 'pressed' && 'bg-clara-grey-200'
    ),
    tertiary: clsx(
      state === 'default' && 'text-clara-grey-600 hover:bg-clara-grey-100 focus:ring-clara-grey-200',
      state === 'pressed' && 'text-clara-grey-800 bg-clara-grey-100'
    )
  }

  return (
    <motion.button
      className={clsx(baseClasses, variantClasses[variant])}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
    >
      <Icon className={iconSizeClasses[size]} />
    </motion.button>
  )
}
