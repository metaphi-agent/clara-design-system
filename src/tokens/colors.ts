/**
 * Clara Design System - Color Tokens
 * Based on Figma design system colors
 */

export const colors = {
  // Primary colors
  primary: '#83AFFB',
  primaryHover: '#6A9BE8',
  primaryPressed: '#5287D5',
  
  // Background colors
  backgroundPrimary: '#FFFFFF',
  backgroundSecondary: '#F8F8F8',
  backgroundTertiary: '#F0F0F0',
  
  // Neutrals/Greys
  grey100: '#F7F7F7',
  grey200: '#E8E8E8',
  grey300: '#D9D9D9',
  grey400: '#C4C4C4',
  grey500: '#9E9E9E',
  grey600: '#757575',
  grey700: '#595959',
  grey800: '#3D3D3D',
  grey900: '#1F1F1F',
  
  // Semantic colors
  success: '#4CAF50',
  warning: '#FF9800',
  error: '#F44336',
  info: '#2196F3',
  
  // Button specific
  buttonPrimaryActive: '#83AFFB',
  buttonPrimaryPressed: '#5287D5',
  buttonSecondaryActive: '#F8F8F8',
  buttonSecondaryPressed: '#E0E0E0',
  buttonTertiaryActive: 'transparent',
  
  // Text colors
  textPrimary: '#1F1F1F',
  textSecondary: '#595959',
  textTertiary: '#9E9E9E',
  textOnPrimary: '#FFFFFF',
  
  // Border colors
  border: '#E8E8E8',
  borderFocus: '#83AFFB',
  
  // Overlay
  overlay: 'rgba(0, 0, 0, 0.56)',
} as const;

export type ColorToken = keyof typeof colors;
