import { clsx } from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Button } from './Button'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
  children?: React.ReactNode
  primaryAction?: {
    label: string
    onClick: () => void
  }
  secondaryAction?: {
    label: string
    onClick: () => void
  }
  className?: string
}

export function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  primaryAction,
  secondaryAction,
  className
}: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className={clsx(
              'fixed left-1/2 top-1/2 z-50 w-[90%] max-w-md',
              'bg-white rounded-2xl shadow-xl',
              className
            )}
            initial={{ opacity: 0, scale: 0.95, x: '-50%', y: '-50%' }}
            animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
            exit={{ opacity: 0, scale: 0.95, x: '-50%', y: '-50%' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-clara-grey-200">
              {title && (
                <h2 className="text-lg font-semibold text-clara-grey-900">{title}</h2>
              )}
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-clara-grey-100 transition-colors ml-auto"
              >
                <X className="w-5 h-5 text-clara-grey-500" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4">
              {description && (
                <p className="text-sm text-clara-grey-600 mb-4">{description}</p>
              )}
              {children}
            </div>

            {/* Footer */}
            {(primaryAction || secondaryAction) && (
              <div className="flex items-center justify-end gap-3 p-4 border-t border-clara-grey-200">
                {secondaryAction && (
                  <Button
                    variant="tertiary"
                    size="sm"
                    onClick={secondaryAction.onClick}
                  >
                    {secondaryAction.label}
                  </Button>
                )}
                {primaryAction && (
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={primaryAction.onClick}
                  >
                    {primaryAction.label}
                  </Button>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
