/**
 * Clara Design System - Typography Tokens
 * Based on Figma design system typography
 */

export const typography = {
  fontFamily: {
    primary: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    secondary: 'Source Serif 4, Georgia, serif',
  },
  
  fontSize: {
    xs: '10px',
    sm: '12px',
    md: '14px',
    lg: '16px',
    xl: '20px',
    xxl: '24px',
    '3xl': '32px',
    '4xl': '40px',
  },
  
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  lineHeight: {
    tight: 1.2,
    normal: 1.4,
    relaxed: 1.5,
    loose: 1.6,
  },
  
  // Text styles from Figma
  styles: {
    headingXXL: {
      fontSize: '40px',
      fontWeight: 600,
      lineHeight: 1.2,
      fontFamily: 'primary',
    },
    headingXL: {
      fontSize: '32px',
      fontWeight: 600,
      lineHeight: 1.2,
      fontFamily: 'primary',
    },
    headingL: {
      fontSize: '24px',
      fontWeight: 600,
      lineHeight: 1.2,
      fontFamily: 'primary',
    },
    subheadingL: {
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: 1.4,
      fontFamily: 'primary',
    },
    subheadingM: {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: 1.4,
      fontFamily: 'primary',
    },
    bodyL: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: 1.5,
      fontFamily: 'primary',
    },
    bodyM: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.5,
      fontFamily: 'primary',
    },
    bodyS: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: 1.5,
      fontFamily: 'primary',
    },
    labelS: {
      fontSize: '12px',
      fontWeight: 600,
      lineHeight: 1.4,
      fontFamily: 'primary',
    },
    labelXS: {
      fontSize: '10px',
      fontWeight: 600,
      lineHeight: 1.4,
      fontFamily: 'primary',
    },
  },
} as const;

export type FontSize = keyof typeof typography.fontSize;
export type FontWeight = keyof typeof typography.fontWeight;
export type TextStyle = keyof typeof typography.styles;
