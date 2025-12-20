import React from 'react';
import './Chat.css';

export interface ChatProps {
  /** Chat type */
  type?: 'request' | 'response';
  /** Show media */
  showMedia?: boolean;
  /** Show footer */
  showFooter?: boolean;
  /** Show title and bullet */
  showTitleBullet?: boolean;
  /** Message content */
  children: React.ReactNode;
  /** Avatar */
  avatar?: React.ReactNode;
  /** Footer content */
  footer?: React.ReactNode;
  /** Media content */
  media?: React.ReactNode;
  /** Additional class name */
  className?: string;
}

/**
 * Chat component from Figma Clara Design System
 * Component ID: 246:3021 (Type=Response)
 */
export const Chat: React.FC<ChatProps> = ({
  type = 'response',
  showMedia = false,
  showFooter = false,
  showTitleBullet = false,
  children,
  avatar,
  footer,
  media,
  className = '',
}) => {
  const classes = [
    'clara-chat',
    `clara-chat--${type}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      {avatar && <div className="clara-chat__avatar">{avatar}</div>}
      <div className="clara-chat__content">
        {showTitleBullet && <div className="clara-chat__title-bullet" />}
        <div className="clara-chat__message">{children}</div>
        {showMedia && media && <div className="clara-chat__media">{media}</div>}
        {showFooter && footer && <div className="clara-chat__footer">{footer}</div>}
      </div>
    </div>
  );
};

Chat.displayName = 'Chat';