/**
 * Clara Design System - Border Radius Tokens
 */

export const radius = {
  none: '0px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  xxl: '32px',
  round: '9999px',
} as const;

export type Radius = keyof typeof radius;
