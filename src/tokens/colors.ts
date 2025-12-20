/**
 * Clara Design System - Color Tokens
 * Extracted from Figma Clara Design System
 * Source: https://www.figma.com/design/kOGAOM7xCcnGancqjYSfGD/Clara-Design-System
 */

export const colors = {
  // Primary Brand Color
  primary: '#83AFFB',
  primaryHover: '#6A9BE8',
  primaryPressed: '#5287D5',
  
  // Background colors (from Figma styles)
  backgroundPrimary: '#FFFFFF', // Style ID: 228:1167
  backgroundSecondary: '#F8F8F8',
  backgroundTertiary: '#F0F0F0',
  backgroundLight: '#D9EDF1', // Light blue background
  
  // Neutrals/Greys (from Figma)
  grey100: '#F7F7F7',
  grey200: '#E8E8E8',
  grey300: '#D9D9D9',
  grey400: '#C4C4C4',
  grey500: '#9E9E9E',
  grey600: '#757575',
  grey700: '#595959', // Style ID: 219:2 - Used for sub-headings
  grey800: '#3D3D3D',
  grey900: '#1F1F1F',
  
  // Semantic colors
  success: '#4CAF50',
  warning: '#FF9800',
  error: '#F44336',
  info: '#2196F3',
  
  // Button specific (from Figma button styles)
  buttonPrimaryActive: '#83AFFB', // Style ID: 278:3530
  buttonPrimaryPressed: '#5287D5', // Style ID: 278:3545
  buttonSecondaryActive: '#F8F8F8', // Style ID: 278:3560
  buttonSecondaryPressed: '#E0E0E0', // Style ID: 278:3558
  buttonTertiaryActive: 'transparent',
  buttonIconSecondary: '#F8F8F8',
  
  // Text colors
  textPrimary: '#1F1F1F',
  textSecondary: '#595959',
  textTertiary: '#9E9E9E',
  textOnPrimary: '#FFFFFF',
  textButtonSecondary: '#83AFFB', // Style ID: 179:60
  textButtonPrimary: '#FFFFFF', // Style ID: 179:61
  textButtonTertiary: '#595959', // Style ID: 246:7422
  
  // Border colors
  border: '#E8E8E8',
  borderCard: '#E8E8E8',
  borderFocus: '#83AFFB',
  
  // Overlay
  overlay: 'rgba(0, 0, 0, 0.56)',
  
  // Primitives
  white: '#FFFFFF', // Style ID: 246:1682
  black: '#000000',
} as const;

export type ColorToken = keyof typeof colors;

// CSS Custom Properties helper
export const colorToCssVar = (token: ColorToken): string => {
  return `var(--clara-${token.replace(/([A-Z])/g, '-$1').toLowerCase()})`;
};