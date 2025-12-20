/**
 * Clara Design System - Shadow Tokens
 * Based on Figma effect styles
 * Style ID: 228:1168 - Shallow/Shallow below
 */

export const shadows = {
  // Main shadow used most of the time (Style ID: 228:1168)
  shallow: '0px 4px 16px rgba(0, 0, 0, 0.12)',
  
  // Additional shadow variants
  medium: '0px 8px 24px rgba(0, 0, 0, 0.16)',
  deep: '0px 16px 48px rgba(0, 0, 0, 0.20)',
  
  // Button shadows (from Figma button styles)
  buttonPrimaryActive: '0px 4px 16px rgba(131, 175, 251, 0.3)', // Style ID: 278:3531
  buttonPrimaryPressed: '0px 2px 8px rgba(82, 135, 213, 0.4)', // Style ID: 278:3546
  
  // Inner shadows from Figma
  innerShallow: 'inset 0px 0.56px 20px rgba(210, 230, 235, 0.2), inset 0px 0.75px 15px rgba(85, 173, 235, 0.18), inset 0px -0.75px 5.8px rgba(35, 36, 36, 0.18)',
  
  none: 'none',
} as const;

export type ShadowToken = keyof typeof shadows;