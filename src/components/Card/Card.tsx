import React from 'react';
import './Card.css';

export interface CardProps {
  /** Card title */
  title: string;
  /** Card subtitle */
  subtitle?: string;
  /** Show image */
  showImage?: boolean;
  /** Image source */
  imageSrc?: string;
  /** Show tags */
  showTags?: boolean;
  /** Tags array */
  tags?: string[];
  /** Card content */
  children?: React.ReactNode;
  /** On click handler */
  onClick?: () => void;
  /** Custom class name */
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  showImage = false,
  imageSrc,
  showTags = false,
  tags = [],
  children,
  onClick,
  className = '',
}) => {
  const classes = [
    'clara-card',
    onClick && 'clara-card--clickable',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} onClick={onClick}>
      {showImage && imageSrc && (
        <div className="clara-card__image">
          <img src={imageSrc} alt={title} />
        </div>
      )}
      <div className="clara-card__content">
        <div className="clara-card__header">
          <h3 className="clara-card__title">{title}</h3>
          {subtitle && <p className="clara-card__subtitle">{subtitle}</p>}
        </div>
        {showTags && tags.length > 0 && (
          <div className="clara-card__tags">
            {tags.map((tag, index) => (
              <span key={index} className="clara-card__tag">
                {tag}
              </span>
            ))}
          </div>
        )}
        {children && <div className="clara-card__body">{children}</div>}
      </div>
    </div>
  );
};
