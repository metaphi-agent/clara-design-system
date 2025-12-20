import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import { Send, Paperclip, Image, Mic } from 'lucide-react'
import { useState, useRef } from 'react'

export type TextFieldState = 'default' | 'focused' | 'typing' | 'disabled' | 'upload-media'

interface TextFieldProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  onSend?: () => void
  onAttach?: () => void
  state?: TextFieldState
  showAttachButton?: boolean
  showMediaButton?: boolean
  showVoiceButton?: boolean
  className?: string
}

export function TextField({
  placeholder = 'Ask me anything...',
  value = '',
  onChange,
  onSend,
  onAttach,
  state = 'default',
  showAttachButton = true,
  showMediaButton = true,
  showVoiceButton = true,
  className
}: TextFieldProps) {
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const isDisabled = state === 'disabled'
  const isTyping = state === 'typing' || value.length > 0
  const currentState = isFocused ? 'focused' : state

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey && onSend) {
      e.preventDefault()
      onSend()
    }
  }

  if (state === 'upload-media') {
    return (
      <div
        className={clsx(
          'flex flex-col items-center justify-center gap-4 p-8 rounded-2xl',
          'bg-clara-blue-100 border-2 border-dashed border-clara-blue-300',
          'cursor-pointer hover:bg-clara-blue-200 transition-colors',
          className
        )}
        onClick={onAttach}
      >
        <div className="w-16 h-16 rounded-full bg-clara-blue-500 flex items-center justify-center">
          <Image className="w-8 h-8 text-white" />
        </div>
        <div className="text-center">
          <p className="text-sm font-semibold text-clara-grey-900">Upload Media</p>
          <p className="text-xs text-clara-grey-500 mt-1">Click to browse or drag and drop</p>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      className={clsx(
        'flex items-center gap-2 px-4 py-3 rounded-2xl transition-all duration-200',
        'bg-white border',
        currentState === 'default' && 'border-clara-grey-200',
        currentState === 'focused' && 'border-clara-blue-500 shadow-md',
        currentState === 'typing' && 'border-clara-blue-500',
        isDisabled && 'bg-clara-grey-100 border-clara-grey-200 cursor-not-allowed',
        className
      )}
      initial={false}
      animate={{
        boxShadow: isFocused ? '0 4px 12px rgba(32, 113, 249, 0.15)' : '0 0 0 transparent'
      }}
    >
      {showAttachButton && (
        <button
          onClick={onAttach}
          disabled={isDisabled}
          className={clsx(
            'p-2 rounded-full transition-colors',
            isDisabled
              ? 'text-clara-grey-300 cursor-not-allowed'
              : 'text-clara-grey-500 hover:bg-clara-grey-100 hover:text-clara-grey-700'
          )}
        >
          <Paperclip className="w-5 h-5" />
        </button>
      )}

      <input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={handleKeyDown}
        disabled={isDisabled}
        className={clsx(
          'flex-1 text-sm outline-none bg-transparent',
          'placeholder:text-clara-grey-400',
          isDisabled && 'cursor-not-allowed text-clara-grey-400'
        )}
      />

      <div className="flex items-center gap-1">
        {showMediaButton && (
          <button
            onClick={onAttach}
            disabled={isDisabled}
            className={clsx(
              'p-2 rounded-full transition-colors',
              isDisabled
                ? 'text-clara-grey-300 cursor-not-allowed'
                : 'text-clara-grey-500 hover:bg-clara-grey-100 hover:text-clara-grey-700'
            )}
          >
            <Image className="w-5 h-5" />
          </button>
        )}

        {showVoiceButton && !isTyping && (
          <button
            disabled={isDisabled}
            className={clsx(
              'p-2 rounded-full transition-colors',
              isDisabled
                ? 'text-clara-grey-300 cursor-not-allowed'
                : 'text-clara-grey-500 hover:bg-clara-grey-100 hover:text-clara-grey-700'
            )}
          >
            <Mic className="w-5 h-5" />
          </button>
        )}

        {isTyping && (
          <motion.button
            onClick={onSend}
            disabled={isDisabled}
            className={clsx(
              'p-2 rounded-full transition-colors',
              isDisabled
                ? 'bg-clara-grey-200 text-clara-grey-400 cursor-not-allowed'
                : 'bg-clara-blue-500 text-white hover:bg-clara-blue-600'
            )}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Send className="w-5 h-5" />
          </motion.button>
        )}
      </div>
    </motion.div>
  )
}
