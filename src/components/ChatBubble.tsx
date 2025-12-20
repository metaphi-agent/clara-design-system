import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import { ThumbsUp, ThumbsDown, Copy, Share2 } from 'lucide-react'

export type ChatType = 'user' | 'response'

interface ChatBubbleProps {
  type?: ChatType
  message: string
  title?: string
  bullets?: string[]
  showMedia?: boolean
  mediaUrl?: string
  showFooter?: boolean
  timestamp?: string
  className?: string
}

export function ChatBubble({
  type = 'response',
  message,
  title,
  bullets,
  showMedia = false,
  mediaUrl,
  showFooter = false,
  timestamp,
  className
}: ChatBubbleProps) {
  if (type === 'user') {
    return (
      <motion.div
        className={clsx('flex justify-end', className)}
        initial={{ opacity: 0, y: 10, x: 20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
      >
        <div className="max-w-[85%] px-4 py-3 rounded-2xl rounded-tr-sm bg-clara-blue-500 text-white">
          <p className="text-sm">{message}</p>
          {timestamp && (
            <p className="text-xs text-white/70 mt-1 text-right">{timestamp}</p>
          )}
        </div>
      </motion.div>
    )
  }

  // Response type
  return (
    <motion.div
      className={clsx('flex justify-start', className)}
      initial={{ opacity: 0, y: 10, x: -20 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
    >
      <div className="max-w-[85%]">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-clara-blue-400 to-clara-blue-600 flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-xs">C</span>
          </div>
          <div className="flex-1">
            <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-clara-grey-100">
              {title && (
                <h4 className="text-sm font-semibold text-clara-grey-900 mb-2">{title}</h4>
              )}
              <p className="text-sm text-clara-grey-700">{message}</p>

              {bullets && bullets.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-clara-grey-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-clara-blue-500 mt-1.5 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

              {showMedia && mediaUrl && (
                <div className="mt-3 rounded-lg overflow-hidden">
                  <img src={mediaUrl} alt="Media" className="w-full h-auto" />
                </div>
              )}
            </div>

            {showFooter && (
              <div className="flex items-center gap-2 mt-2 px-2">
                <button className="p-1.5 rounded-full hover:bg-clara-grey-100 text-clara-grey-400 hover:text-clara-grey-600 transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                </button>
                <button className="p-1.5 rounded-full hover:bg-clara-grey-100 text-clara-grey-400 hover:text-clara-grey-600 transition-colors">
                  <ThumbsDown className="w-4 h-4" />
                </button>
                <button className="p-1.5 rounded-full hover:bg-clara-grey-100 text-clara-grey-400 hover:text-clara-grey-600 transition-colors">
                  <Copy className="w-4 h-4" />
                </button>
                <button className="p-1.5 rounded-full hover:bg-clara-grey-100 text-clara-grey-400 hover:text-clara-grey-600 transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
                {timestamp && (
                  <span className="text-xs text-clara-grey-400 ml-auto">{timestamp}</span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
