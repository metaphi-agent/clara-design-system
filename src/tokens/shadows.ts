/**
 * Clara Design System - Shadow Tokens
 */

export const shadows = {
  none: 'none',
  shallow: '0px 4px 16px rgba(0, 0, 0, 0.12)',
  medium: '0px 8px 24px rgba(0, 0, 0, 0.16)',
  deep: '0px 16px 48px rgba(0, 0, 0, 0.20)',
  buttonPrimary: '0px 2px 8px rgba(131, 175, 251, 0.4)',
  buttonPressed: 'inset 0px 2px 4px rgba(0, 0, 0, 0.1)',
} as const;

export type Shadow = keyof typeof shadows;
