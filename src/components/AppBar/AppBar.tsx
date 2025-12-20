import React from 'react';
import './AppBar.css';

export interface AppBarProps {
  /** Title text */
  title?: string;
  /** Left icon/button */
  leftIcon?: React.ReactNode;
  /** Show second left icon */
  leftIcon2?: boolean;
  /** Right action button/CTA */
  cta?: React.ReactNode;
  /** Show CTA */
  showCta?: boolean;
  /** Variant */
  variant?: 'page-header' | 'navigation';
  /** Additional class name */
  className?: string;
}

/**
 * App Bar component from Figma Clara Design System
 * Component ID: 246:3520 (Property 1=Page header)
 */
export const AppBar: React.FC<AppBarProps> = ({
  title,
  leftIcon,
  leftIcon2 = false,
  cta,
  showCta = true,
  variant = 'page-header',
  className = '',
}) => {
  const classes = [
    'clara-app-bar',
    `clara-app-bar--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={classes}>
      <div className="clara-app-bar__left">
        {leftIcon && <div className="clara-app-bar__icon">{leftIcon}</div>}
        {leftIcon2 && <div className="clara-app-bar__icon">{/* Second icon */}</div>}
        {title && <h1 className="clara-app-bar__title">{title}</h1>}
      </div>
      {showCta && cta && <div className="clara-app-bar__cta">{cta}</div>}
    </header>
  );
};

AppBar.displayName = 'AppBar';