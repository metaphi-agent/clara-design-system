import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import { X, Loader2 } from 'lucide-react'
import { Button } from './Button'

export type MessageCardStyle = 'white' | 'blue' | 'dark'
export type MessageCardState = 'enabled' | 'loading'

interface MessageCardProps {
  headline: string
  paragraph?: string
  style?: MessageCardStyle
  state?: MessageCardState
  showDismiss?: boolean
  showArtwork?: boolean
  artworkUrl?: string
  primaryAction?: {
    label: string
    onClick: () => void
  }
  secondaryAction?: {
    label: string
    onClick: () => void
  }
  onDismiss?: () => void
  className?: string
}

export function MessageCard({
  headline,
  paragraph,
  style = 'white',
  state = 'enabled',
  showDismiss = false,
  showArtwork = false,
  artworkUrl,
  primaryAction,
  secondaryAction,
  onDismiss,
  className
}: MessageCardProps) {
  const styleClasses = {
    white: 'bg-white border border-clara-grey-200',
    blue: 'bg-clara-blue-100 border border-clara-blue-200',
    dark: 'bg-clara-grey-900 border border-clara-grey-800'
  }

  const textClasses = {
    white: {
      headline: 'text-clara-grey-900',
      paragraph: 'text-clara-grey-600'
    },
    blue: {
      headline: 'text-clara-blue-900',
      paragraph: 'text-clara-blue-700'
    },
    dark: {
      headline: 'text-white',
      paragraph: 'text-clara-grey-300'
    }
  }

  const isLoading = state === 'loading'

  return (
    <motion.div
      className={clsx(
        'relative p-4 rounded-xl shadow-sm',
        styleClasses[style],
        className
      )}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {showDismiss && (
        <button
          onClick={onDismiss}
          className={clsx(
            'absolute top-3 right-3 p-1 rounded-full transition-colors',
            style === 'dark'
              ? 'hover:bg-clara-grey-800 text-clara-grey-400'
              : 'hover:bg-clara-grey-100 text-clara-grey-500'
          )}
        >
          <X className="w-4 h-4" />
        </button>
      )}

      <div className="flex items-start gap-4">
        <div className="flex-1">
          <h3 className={clsx('text-base font-semibold', textClasses[style].headline)}>
            {headline}
          </h3>
          {paragraph && (
            <p className={clsx('text-sm mt-1', textClasses[style].paragraph)}>
              {paragraph}
            </p>
          )}

          {(primaryAction || secondaryAction) && (
            <div className="flex items-center gap-3 mt-4">
              {primaryAction && (
                <Button
                  variant={style === 'dark' ? 'secondary' : 'primary'}
                  size="sm"
                  onClick={primaryAction.onClick}
                  state={isLoading ? 'disabled' : 'default'}
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    primaryAction.label
                  )}
                </Button>
              )}
              {secondaryAction && (
                <Button
                  variant="tertiary"
                  size="sm"
                  onClick={secondaryAction.onClick}
                  state={isLoading ? 'disabled' : 'default'}
                >
                  {secondaryAction.label}
                </Button>
              )}
            </div>
          )}
        </div>

        {showArtwork && artworkUrl && (
          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
            <img src={artworkUrl} alt="" className="w-full h-full object-cover" />
          </div>
        )}
      </div>
    </motion.div>
  )
}
