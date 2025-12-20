import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import { Plus, Minus, ShoppingCart } from 'lucide-react'
import { Tag, TagType } from './Tag'

interface CardProps {
  title: string
  subtitle?: string
  description?: string
  price?: string
  originalPrice?: string
  image?: string
  tags?: TagType[]
  showImage?: boolean
  showTags?: boolean
  showSubheading?: boolean
  variant?: 'vertical' | 'horizontal' | 'routine'
  state?: 'default' | 'added'
  quantity?: number
  onAdd?: () => void
  onRemove?: () => void
  className?: string
}

export function Card({
  title,
  subtitle,
  description,
  price,
  originalPrice,
  image,
  tags = [],
  showImage = true,
  showTags = true,
  showSubheading = true,
  variant = 'vertical',
  state = 'default',
  quantity = 0,
  onAdd,
  onRemove,
  className
}: CardProps) {
  const isAdded = state === 'added' || quantity > 0

  if (variant === 'horizontal') {
    return (
      <motion.div
        className={clsx(
          'flex items-center gap-4 p-4 bg-white rounded-xl border border-clara-grey-200',
          'hover:shadow-md transition-shadow duration-200',
          className
        )}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {showImage && image && (
          <div className="w-20 h-20 rounded-lg bg-clara-grey-100 overflow-hidden flex-shrink-0">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          {showTags && tags.length > 0 && (
            <div className="flex gap-2 mb-2">
              {tags.map((tag, index) => (
                <Tag key={index} type={tag} />
              ))}
            </div>
          )}
          <h3 className="text-sm font-semibold text-clara-grey-900 truncate">{title}</h3>
          {showSubheading && subtitle && (
            <p className="text-xs text-clara-grey-500 mt-0.5">{subtitle}</p>
          )}
          {price && (
            <div className="flex items-center gap-2 mt-2">
              <span className="text-sm font-bold text-clara-grey-900">{price}</span>
              {originalPrice && (
                <span className="text-xs text-clara-grey-400 line-through">{originalPrice}</span>
              )}
            </div>
          )}
        </div>
        <div className="flex-shrink-0">
          {isAdded ? (
            <div className="flex items-center gap-2 bg-clara-blue-100 rounded-full px-2 py-1">
              <button
                onClick={onRemove}
                className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-clara-blue-500 hover:bg-clara-blue-50"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-sm font-semibold text-clara-blue-500 min-w-[20px] text-center">
                {quantity}
              </span>
              <button
                onClick={onAdd}
                className="w-6 h-6 rounded-full bg-clara-blue-500 flex items-center justify-center text-white hover:bg-clara-blue-600"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={onAdd}
              className="w-8 h-8 rounded-full bg-clara-blue-500 flex items-center justify-center text-white hover:bg-clara-blue-600 transition-colors"
            >
              <Plus className="w-5 h-5" />
            </button>
          )}
        </div>
      </motion.div>
    )
  }

  if (variant === 'routine') {
    return (
      <motion.div
        className={clsx(
          'p-4 bg-white rounded-xl border border-clara-grey-200',
          'hover:shadow-md transition-shadow duration-200',
          className
        )}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {showImage && image && (
          <div className="w-full h-32 rounded-lg bg-clara-grey-100 overflow-hidden mb-3">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
        )}
        <h3 className="text-sm font-semibold text-clara-grey-900">{title}</h3>
        {description && (
          <p className="text-xs text-clara-grey-500 mt-1 line-clamp-2">{description}</p>
        )}
        {price && (
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-clara-grey-900">{price}</span>
              {originalPrice && (
                <span className="text-xs text-clara-grey-400 line-through">{originalPrice}</span>
              )}
            </div>
            <button
              onClick={onAdd}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-clara-blue-500 text-white text-xs font-medium hover:bg-clara-blue-600 transition-colors"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              Add
            </button>
          </div>
        )}
      </motion.div>
    )
  }

  // Vertical variant (default)
  return (
    <motion.div
      className={clsx(
        'p-4 bg-white rounded-xl border border-clara-grey-200',
        'hover:shadow-md transition-shadow duration-200',
        'w-[180px]',
        className
      )}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {showImage && image && (
        <div className="w-full h-32 rounded-lg bg-clara-grey-100 overflow-hidden mb-3">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      {showTags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-2">
          {tags.map((tag, index) => (
            <Tag key={index} type={tag} />
          ))}
        </div>
      )}
      <h3 className="text-sm font-semibold text-clara-grey-900 line-clamp-2">{title}</h3>
      {showSubheading && subtitle && (
        <p className="text-xs text-clara-grey-500 mt-0.5">{subtitle}</p>
      )}
      {price && (
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm font-bold text-clara-grey-900">{price}</span>
          {originalPrice && (
            <span className="text-xs text-clara-grey-400 line-through">{originalPrice}</span>
          )}
        </div>
      )}
      <div className="mt-3">
        {isAdded ? (
          <div className="flex items-center justify-center gap-2 bg-clara-blue-100 rounded-full px-3 py-1.5">
            <button
              onClick={onRemove}
              className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-clara-blue-500 hover:bg-clara-blue-50"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="text-sm font-semibold text-clara-blue-500 min-w-[20px] text-center">
              {quantity}
            </span>
            <button
              onClick={onAdd}
              className="w-6 h-6 rounded-full bg-clara-blue-500 flex items-center justify-center text-white hover:bg-clara-blue-600"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <button
            onClick={onAdd}
            className="w-full py-2 rounded-full bg-clara-blue-500 text-white text-sm font-medium hover:bg-clara-blue-600 transition-colors flex items-center justify-center gap-1"
          >
            <Plus className="w-4 h-4" />
            Add
          </button>
        )}
      </div>
    </motion.div>
  )
}
