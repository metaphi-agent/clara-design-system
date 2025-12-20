/**
 * Clara Design System - Spacing Tokens
 * Based on Figma layout spacing
 */

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  xxl: '24px',
  '3xl': '32px',
  '4xl': '40px',
  '5xl': '48px',
  '6xl': '64px',
  '7xl': '80px',
  '8xl': '100px',
  '9xl': '120px',
} as const;

export type SpacingToken = keyof typeof spacing;