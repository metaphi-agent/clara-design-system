import React, { useEffect } from 'react';
import './BottomSheet.css';

export interface BottomSheetProps {
  /** Whether the bottom sheet is open */
  open: boolean;
  /** Callback when the bottom sheet should close */
  onClose?: () => void;
  /** Content of the bottom sheet */
  children: React.ReactNode;
  /** Additional class name */
  className?: string;
  /** Show overlay */
  showOverlay?: boolean;
}

/**
 * Bottom Sheet component from Figma Clara Design System
 * Component ID: 271:3443 (Frame 2147238506)
 */
export const BottomSheet: React.FC<BottomSheetProps> = ({
  open,
  onClose,
  children,
  className = '',
  showOverlay = true,
}) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  const classes = [
    'clara-bottom-sheet',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      {showOverlay && (
        <div
          className="clara-bottom-sheet__overlay"
          onClick={onClose}
        />
      )}
      <div className={classes}>
        <div className="clara-bottom-sheet__handle" />
        <div className="clara-bottom-sheet__content">{children}</div>
      </div>
    </>
  );
};

BottomSheet.displayName = 'BottomSheet';