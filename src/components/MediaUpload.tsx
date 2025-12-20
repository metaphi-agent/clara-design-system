import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import { FileText, Image as ImageIcon, X, Loader2, Check } from 'lucide-react'

export type MediaState = 'loading' | 'uploaded' | 'chat'
export type MediaType = 'pdf' | 'image'

interface MediaUploadProps {
  state?: MediaState
  mediaType?: MediaType
  fileName?: string
  fileSize?: string
  previewUrl?: string
  progress?: number
  onRemove?: () => void
  className?: string
}

export function MediaUpload({
  state = 'loading',
  mediaType = 'image',
  fileName = 'file.jpg',
  fileSize = '2.4 MB',
  previewUrl,
  progress = 0,
  onRemove,
  className
}: MediaUploadProps) {
  const Icon = mediaType === 'pdf' ? FileText : ImageIcon

  if (state === 'chat') {
    // Compact chat version
    return (
      <div
        className={clsx(
          'inline-flex items-center gap-2 px-3 py-2 rounded-xl',
          'bg-clara-grey-100 border border-clara-grey-200',
          className
        )}
      >
        {previewUrl && mediaType === 'image' ? (
          <img
            src={previewUrl}
            alt={fileName}
            className="w-10 h-10 rounded-lg object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-lg bg-clara-blue-100 flex items-center justify-center">
            <Icon className="w-5 h-5 text-clara-blue-500" />
          </div>
        )}
        <div className="text-left">
          <p className="text-xs font-medium text-clara-grey-900 truncate max-w-[120px]">
            {fileName}
          </p>
          <p className="text-xs text-clara-grey-500">{fileSize}</p>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      className={clsx(
        'relative p-4 rounded-xl',
        'bg-white border border-clara-grey-200',
        className
      )}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      {onRemove && (
        <button
          onClick={onRemove}
          className="absolute top-2 right-2 p-1 rounded-full bg-clara-grey-100 hover:bg-clara-grey-200 transition-colors"
        >
          <X className="w-4 h-4 text-clara-grey-500" />
        </button>
      )}

      <div className="flex items-start gap-3">
        {/* Preview */}
        {previewUrl && mediaType === 'image' ? (
          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
            <img
              src={previewUrl}
              alt={fileName}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-16 h-16 rounded-lg bg-clara-blue-100 flex items-center justify-center flex-shrink-0">
            <Icon className="w-8 h-8 text-clara-blue-500" />
          </div>
        )}

        {/* Info */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-clara-grey-900 truncate">
            {fileName}
          </p>
          <p className="text-xs text-clara-grey-500 mt-0.5">{fileSize}</p>

          {/* Progress */}
          {state === 'loading' && (
            <div className="mt-2">
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1.5 bg-clara-grey-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-clara-blue-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <Loader2 className="w-4 h-4 text-clara-blue-500 animate-spin" />
              </div>
              <p className="text-xs text-clara-grey-500 mt-1">
                Uploading... {progress}%
              </p>
            </div>
          )}

          {/* Uploaded state */}
          {state === 'uploaded' && (
            <div className="flex items-center gap-1.5 mt-2 text-clara-green-600">
              <Check className="w-4 h-4" />
              <span className="text-xs font-medium">Uploaded</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
