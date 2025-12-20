import React from 'react';
import './IconButton.css';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button type/variant */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /** Button state */
  state?: 'default' | 'hover' | 'pressed' | 'disabled';
  /** Button shape */
  shape?: 'round' | 'square';
  /** Icon content */
  children: React.ReactNode;
}

/**
 * Icon Button component from Figma Clara Design System
 * Component ID: 246:3454 (Type=Secondary, State=Default, Shape=Round)
 */
export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      variant = 'secondary',
      state = 'default',
      shape = 'round',
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const classes = [
      'clara-icon-button',
      `clara-icon-button--${variant}`,
      `clara-icon-button--${shape}`,
      `clara-icon-button--${state}`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';