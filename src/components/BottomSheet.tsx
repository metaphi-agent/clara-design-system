import { clsx } from 'clsx'
import { motion, AnimatePresence, PanInfo } from 'framer-motion'

interface BottomSheetProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
  className?: string
}

export function BottomSheet({
  isOpen,
  onClose,
  children,
  title,
  className
}: BottomSheetProps) {
  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.y > 100 || info.velocity.y > 500) {
      onClose()
    }
  }

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

          {/* Bottom Sheet */}
          <motion.div
            className={clsx(
              'fixed bottom-0 left-0 right-0 z-50',
              'bg-white rounded-t-2xl shadow-xl',
              'max-h-[90vh] overflow-hidden',
              className
            )}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
          >
            {/* Handle */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-10 h-1 rounded-full bg-clara-grey-300" />
            </div>

            {/* Header */}
            {title && (
              <div className="px-4 py-3 border-b border-clara-grey-200">
                <h2 className="text-lg font-semibold text-clara-grey-900 text-center">
                  {title}
                </h2>
              </div>
            )}

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
