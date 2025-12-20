/**
 * Clara Design System - Border Radius Tokens
 * Based on Figma component corner radius
 */

export const radius = {
  none: '0px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  xxl: '32px',
  '3xl': '34px',
  round: '9999px', // Fully rounded
} as const;

export type RadiusToken = keyof typeof radius;