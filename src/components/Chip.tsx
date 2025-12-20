import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

interface ChipProps {
  selected?: boolean
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export function Chip({
  selected = false,
  children,
  onClick,
  className
}: ChipProps) {
  return (
    <motion.button
      className={clsx(
        'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-clara-blue-300',
        selected
          ? 'bg-clara-blue-500 text-white shadow-md'
          : 'bg-clara-grey-100 text-clara-grey-700 hover:bg-clara-grey-200',
        className
      )}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
    >
      {selected && <Check className="w-4 h-4" />}
      {children}
    </motion.button>
  )
}
