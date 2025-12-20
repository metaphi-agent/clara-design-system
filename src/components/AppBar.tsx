import { clsx } from 'clsx'
import { ArrowLeft, MoreVertical } from 'lucide-react'

export type AppBarVariant = 'logo-header' | 'page-header'

interface AppBarProps {
  variant?: AppBarVariant
  title?: string
  subtitle?: string
  showBackButton?: boolean
  showCTA?: boolean
  ctaLabel?: string
  onBack?: () => void
  onCTA?: () => void
  className?: string
}

export function AppBar({
  variant = 'logo-header',
  title = 'Clara',
  subtitle,
  showBackButton = false,
  showCTA = true,
  ctaLabel = 'Action',
  onBack,
  onCTA,
  className
}: AppBarProps) {
  if (variant === 'logo-header') {
    return (
      <header
        className={clsx(
          'flex items-center justify-between px-4 py-3 bg-white border-b border-clara-grey-200',
          className
        )}
      >
        <div className="flex items-center gap-3">
          {showBackButton && (
            <button
              onClick={onBack}
              className="p-2 rounded-full hover:bg-clara-grey-100 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-clara-grey-700" />
            </button>
          )}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-clara-blue-400 to-clara-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-lg font-semibold text-clara-grey-900">{title}</span>
          </div>
        </div>
        {showCTA && (
          <button
            onClick={onCTA}
            className="p-2 rounded-full hover:bg-clara-grey-100 transition-colors"
          >
            <MoreVertical className="w-5 h-5 text-clara-grey-700" />
          </button>
        )}
      </header>
    )
  }

  // Page header variant
  return (
    <header
      className={clsx(
        'flex items-center justify-between px-4 py-3 bg-white',
        'bg-gradient-to-b from-white to-transparent',
        className
      )}
    >
      <div className="flex items-center gap-3">
        {showBackButton && (
          <button
            onClick={onBack}
            className="p-2 rounded-full hover:bg-clara-grey-100 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-clara-grey-700" />
          </button>
        )}
        <div>
          <h1 className="text-lg font-semibold text-clara-grey-900">{title}</h1>
          {subtitle && (
            <p className="text-xs text-clara-grey-500">{subtitle}</p>
          )}
        </div>
      </div>
      {showCTA && (
        <button
          onClick={onCTA}
          className="px-4 py-2 rounded-full bg-clara-blue-500 text-white text-sm font-medium hover:bg-clara-blue-600 transition-colors"
        >
          {ctaLabel}
        </button>
      )}
    </header>
  )
}
