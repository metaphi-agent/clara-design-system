import React from 'react';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /** Button size */
  size?: 'sm' | 'md' | 'lg';
  /** Icon on the left */
  leftIcon?: React.ReactNode;
  /** Icon on the right */
  rightIcon?: React.ReactNode;
  /** Loading state */
  loading?: boolean;
  /** Full width */
  fullWidth?: boolean;
  /** Children */
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      leftIcon,
      rightIcon,
      loading = false,
      fullWidth = false,
      disabled,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const classes = [
      'clara-button',
      `clara-button--${variant}`,
      `clara-button--${size}`,
      fullWidth && 'clara-button--full-width',
      loading && 'clara-button--loading',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <span className="clara-button__spinner" />}
        {!loading && leftIcon && <span className="clara-button__icon-left">{leftIcon}</span>}
        <span className="clara-button__text">{children}</span>
        {!loading && rightIcon && <span className="clara-button__icon-right">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
