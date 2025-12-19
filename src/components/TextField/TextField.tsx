import React from 'react';
import './TextField.css';

export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Label text */
  label?: string;
  /** Helper text below input */
  helperText?: string;
  /** Error message */
  error?: string;
  /** Input size */
  size?: 'sm' | 'md' | 'lg';
  /** Full width */
  fullWidth?: boolean;
  /** Left icon */
  leftIcon?: React.ReactNode;
  /** Right icon */
  rightIcon?: React.ReactNode;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      helperText,
      error,
      size = 'md',
      fullWidth = false,
      leftIcon,
      rightIcon,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const containerClasses = [
      'clara-textfield',
      fullWidth && 'clara-textfield--full-width',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const inputClasses = [
      'clara-textfield__input',
      `clara-textfield__input--${size}`,
      error && 'clara-textfield__input--error',
      leftIcon && 'clara-textfield__input--with-left-icon',
      rightIcon && 'clara-textfield__input--with-right-icon',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={containerClasses}>
        {label && <label className="clara-textfield__label">{label}</label>}
        <div className="clara-textfield__wrapper">
          {leftIcon && <span className="clara-textfield__icon-left">{leftIcon}</span>}
          <input
            ref={ref}
            className={inputClasses}
            disabled={disabled}
            {...props}
          />
          {rightIcon && <span className="clara-textfield__icon-right">{rightIcon}</span>}
        </div>
        {error && <span className="clara-textfield__error">{error}</span>}
        {helperText && !error && <span className="clara-textfield__helper">{helperText}</span>}
      </div>
    );
  }
);

TextField.displayName = 'TextField';
