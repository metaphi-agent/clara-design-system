import { clsx } from 'clsx'
import { Award, Stethoscope } from 'lucide-react'

export type TagType = 'bestseller' | 'doctors-choice'

interface TagProps {
  type?: TagType
  className?: string
}

export function Tag({ type = 'bestseller', className }: TagProps) {
  const config = {
    bestseller: {
      icon: Award,
      label: 'Bestseller',
      bgColor: 'bg-clara-yellow-100',
      textColor: 'text-clara-yellow-700',
      borderColor: 'border-clara-yellow-200'
    },
    'doctors-choice': {
      icon: Stethoscope,
      label: "Doctor's Choice",
      bgColor: 'bg-clara-green-100',
      textColor: 'text-clara-green-700',
      borderColor: 'border-clara-green-200'
    }
  }

  const { icon: Icon, label, bgColor, textColor, borderColor } = config[type]

  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border',
        bgColor,
        textColor,
        borderColor,
        className
      )}
    >
      <Icon className="w-3.5 h-3.5" />
      {label}
    </span>
  )
}
