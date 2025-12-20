import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'

export type NudgeType = 'primary' | 'secondary'

interface NudgeProps {
  type?: NudgeType
  title: string
  description?: string
  onClick?: () => void
  className?: string
}

export function Nudge({
  type = 'primary',
  title,
  description,
  onClick,
  className
}: NudgeProps) {
  if (type === 'primary') {
    return (
      <motion.button
        className={clsx(
          'flex items-center gap-3 w-full p-4 rounded-2xl',
          'bg-gradient-to-r from-clara-blue-500 to-clara-blue-600',
          'text-white text-left',
          'hover:from-clara-blue-600 hover:to-clara-blue-700',
          'transition-all duration-200 shadow-md hover:shadow-lg',
          className
        )}
        onClick={onClick}
        whileTap={{ scale: 0.98 }}
      >
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-semibold">{title}</h4>
          {description && (
            <p className="text-xs text-white/80 mt-0.5">{description}</p>
          )}
        </div>
        <ArrowRight className="w-5 h-5 flex-shrink-0" />
      </motion.button>
    )
  }

  // Secondary nudge
  return (
    <motion.button
      className={clsx(
        'flex items-center gap-3 w-full p-4 rounded-2xl',
        'bg-clara-grey-100 border border-clara-grey-200',
        'text-left',
        'hover:bg-clara-grey-200',
        'transition-all duration-200',
        className
      )}
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
    >
      <div className="w-10 h-10 rounded-full bg-clara-blue-100 flex items-center justify-center flex-shrink-0">
        <Sparkles className="w-5 h-5 text-clara-blue-500" />
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-semibold text-clara-grey-900">{title}</h4>
        {description && (
          <p className="text-xs text-clara-grey-500 mt-0.5">{description}</p>
        )}
      </div>
      <ArrowRight className="w-5 h-5 text-clara-grey-400 flex-shrink-0" />
    </motion.button>
  )
}
