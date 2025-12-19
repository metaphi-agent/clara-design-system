import React from 'react';
import './MessageCard.css';
import { Button } from '../Button';

export interface MessageCardProps {
  /** Card headline */
  headline: string;
  /** Card paragraph */
  paragraph?: string;
  /** Show dismiss button */
  dismissButton?: boolean;
  /** Card style */
  style?: 'white' | 'colored';
  /** Artwork position */
  artworkPosition?: 'leading' | 'trailing';
  /** Artwork element */
  artwork?: React.ReactNode;
  /** State */
  state?: 'enabled' | 'loading';
  /** Button text */
  buttonText?: string;
  /** Button click handler */
  onButtonClick?: () => void;
  /** Dismiss handler */
  onDismiss?: () => void;
}

export const MessageCard: React.FC<MessageCardProps> = ({
  headline,
  paragraph,
  dismissButton = false,
  style = 'white',
  artworkPosition = 'trailing',
  artwork,
  state = 'enabled',
  buttonText,
  onButtonClick,
  onDismiss,
}) => {
  const classes = [
    'clara-message-card',
    `clara-message-card--${style}`,
    `clara-message-card--artwork-${artworkPosition}`,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      {artworkPosition === 'leading' && artwork && (
        <div className="clara-message-card__artwork">{artwork}</div>
      )}
      <div className="clara-message-card__content">
        <div className="clara-message-card__text">
          <h4 className="clara-message-card__headline">{headline}</h4>
          {paragraph && <p className="clara-message-card__paragraph">{paragraph}</p>}
        </div>
        {buttonText && (
          <Button
            variant="secondary"
            size="sm"
            onClick={onButtonClick}
            loading={state === 'loading'}
          >
            {buttonText}
          </Button>
        )}
      </div>
      {artworkPosition === 'trailing' && artwork && (
        <div className="clara-message-card__artwork">{artwork}</div>
      )}
      {dismissButton && (
        <button className="clara-message-card__dismiss" onClick={onDismiss} aria-label="Dismiss">
          ×
        </button>
      )}
    </div>
  );
};
