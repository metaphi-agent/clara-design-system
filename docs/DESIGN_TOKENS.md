# Design Tokens Reference

Complete reference for all design tokens extracted from the Clara Design System Figma file.

## Colors

All colors are extracted from Figma color styles with their corresponding style IDs.

### Primary Colors

```css
--clara-primary: #83AFFB;
--clara-primary-hover: #6A9BE8;
--clara-primary-pressed: #5287D5;
```

**Figma Reference**: Style ID `278:3530`

### Background Colors

```css
--clara-background-primary: #FFFFFF;   /* Style ID: 228:1167 */
--clara-background-secondary: #F8F8F8;
--clara-background-tertiary: #F0F0F0;
--clara-background-light: #D9EDF1;
```

### Text Colors

```css
--clara-text-primary: #1F1F1F;
--clara-text-secondary: #595959;       /* Style ID: 219:2 */
--clara-text-tertiary: #9E9E9E;
--clara-text-on-primary: #FFFFFF;
```

### Neutrals (Greys)

```css
--clara-grey-100: #F7F7F7;
--clara-grey-200: #E8E8E8;
--clara-grey-300: #D9D9D9;
--clara-grey-400: #C4C4C4;
--clara-grey-500: #9E9E9E;
--clara-grey-600: #757575;
--clara-grey-700: #595959;  /* Used for sub-headings */
--clara-grey-800: #3D3D3D;
--clara-grey-900: #1F1F1F;
```

### Semantic Colors

```css
--clara-success: #4CAF50;
--clara-warning: #FF9800;
--clara-error: #F44336;
--clara-info: #2196F3;
```

### Button Colors

```css
/* Primary Button */
--clara-button-primary-active: #83AFFB;    /* Style ID: 278:3530 */
--clara-button-primary-pressed: #5287D5;   /* Style ID: 278:3545 */

/* Secondary Button */
--clara-button-secondary-active: #F8F8F8;  /* Style ID: 278:3560 */
--clara-button-secondary-pressed: #E0E0E0; /* Style ID: 278:3558 */

/* Icon Button */
--clara-button-icon-secondary: #F8F8F8;
```

### Border Colors

```css
--clara-border: #E8E8E8;
--clara-border-card: #E8E8E8;
--clara-border-focus: #83AFFB;
```

---

## Typography

All typography tokens match Figma text styles with their style IDs.

### Font Families

```css
--clara-font-family-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--clara-font-family-secondary: 'Source Serif 4', Georgia, serif;
```

### Font Sizes

```css
--clara-font-size-xs: 10px;
--clara-font-size-sm: 12px;
--clara-font-size-md: 14px;
--clara-font-size-lg: 16px;
--clara-font-size-xl: 20px;
--clara-font-size-xxl: 24px;
--clara-font-size-3xl: 32px;
--clara-font-size-4xl: 40px;
--clara-font-size-5xl: 48px;
```

### Font Weights

```css
--clara-font-weight-regular: 400;
--clara-font-weight-medium: 500;
--clara-font-weight-semibold: 600;
--clara-font-weight-bold: 700;
```

### Typography Scales

#### Headings

```css
/* Heading XXL - Style ID: 179:8 */
font-size: 48px;
font-weight: 700;
line-height: 1.2;

/* Heading XL - Style ID: 179:9 */
font-size: 40px;
font-weight: 700;
line-height: 1.2;

/* Heading L - Style ID: 179:11 */
font-size: 32px;
font-weight: 700;
line-height: 1.2;
```

#### Sub-headings

```css
/* Sub-heading M - Style ID: 179:22 */
font-size: 14px;
font-weight: 500;
line-height: 1.4;

/* Sub-heading L Semibold - Style ID: 179:23 */
font-size: 16px;
font-weight: 600;
line-height: 1.4;

/* Sub-heading L Regular - Style ID: 179:24 */
font-size: 16px;
font-weight: 400;
line-height: 1.4;
```

#### Body Text

```css
/* Body S - Style ID: 179:28 */
font-size: 12px;
font-weight: 400;
line-height: 1.5;

/* Body M - Style ID: 179:30 */
font-size: 14px;
font-weight: 400;
line-height: 1.5;

/* Body L - Style ID: 179:29 */
font-size: 16px;
font-weight: 400;
line-height: 1.5;
```

#### Labels

```css
/* Label XS - Style ID: 179:31 */
font-size: 10px;
font-weight: 400;
line-height: 1.4;

/* Label S Semibold - Style ID: 179:32 */
font-size: 12px;
font-weight: 600;
line-height: 1.4;

/* Label S Regular - Style ID: 179:33 */
font-size: 12px;
font-weight: 400;
line-height: 1.4;
```

---

## Spacing

```css
--clara-spacing-xs: 4px;
--clara-spacing-sm: 8px;
--clara-spacing-md: 12px;
--clara-spacing-lg: 16px;
--clara-spacing-xl: 20px;
--clara-spacing-xxl: 24px;
--clara-spacing-3xl: 32px;
--clara-spacing-4xl: 40px;
--clara-spacing-5xl: 48px;
--clara-spacing-6xl: 64px;
--clara-spacing-7xl: 80px;
--clara-spacing-8xl: 100px;
--clara-spacing-9xl: 120px;
```

---

## Shadows

Shadows extracted from Figma effect styles.

### Standard Shadows

```css
/* Shallow (most common) - Style ID: 228:1168 */
--clara-shadow-shallow: 0px 4px 16px rgba(0, 0, 0, 0.12);

/* Medium */
--clara-shadow-medium: 0px 8px 24px rgba(0, 0, 0, 0.16);

/* Deep */
--clara-shadow-deep: 0px 16px 48px rgba(0, 0, 0, 0.20);
```

**Usage**: Use `shallow` for most components (cards, buttons), `medium` for modals, `deep` for bottom sheets.

### Button Shadows

```css
/* Primary Button Active - Style ID: 278:3531 */
--clara-shadow-button-primary-active: 0px 4px 16px rgba(131, 175, 251, 0.3);

/* Primary Button Pressed - Style ID: 278:3546 */
--clara-shadow-button-primary-pressed: 0px 2px 8px rgba(82, 135, 213, 0.4);
```

---

## Border Radius

```css
--clara-radius-none: 0px;
--clara-radius-sm: 4px;
--clara-radius-md: 8px;
--clara-radius-lg: 12px;
--clara-radius-xl: 16px;
--clara-radius-xxl: 32px;
--clara-radius-3xl: 34px;
--clara-radius-round: 9999px;  /* Fully rounded */
```

**Usage**:
- Cards: `12px` (lg)
- Buttons: `8px` (md) to `12px` (lg)
- Text fields: `16px` (xl)
- Icon buttons (round): `9999px` (round)
- Bottom sheets: `16px` (xl) on top corners

---

## Usage in JavaScript/TypeScript

### Import Tokens

```tsx
import {
  colors,
  typography,
  spacing,
  shadows,
  radius,
} from '@clara/design-system';

// Use in inline styles
const MyComponent = () => (
  <div style={{
    color: colors.textPrimary,
    padding: spacing.lg,
    borderRadius: radius.lg,
    boxShadow: shadows.shallow,
  }}>
    Content
  </div>
);
```

### Use with Styled Components

```tsx
import styled from 'styled-components';
import { colors, spacing } from '@clara/design-system';

const StyledCard = styled.div`
  background-color: ${colors.backgroundPrimary};
  padding: ${spacing.xl};
  border-radius: ${radius.lg};
  box-shadow: ${shadows.shallow};
`;
```

### Use with Tailwind (Custom Config)

```js
// tailwind.config.js
import { colors, spacing } from '@clara/design-system';

module.exports = {
  theme: {
    extend: {
      colors: {
        clara: colors,
      },
      spacing: spacing,
    },
  },
};
```

---

## Figma Mapping

All tokens are extracted from the [Clara Design System Figma file](https://www.figma.com/design/kOGAOM7xCcnGancqjYSfGD/Clara-Design-System).

| Token Type | Figma Canvas | Key Style IDs |
|------------|--------------|---------------|
| Colors | Colors | 228:1167, 219:2, 246:1682 |
| Typography | Typography | 179:8-179:33, 179:60-179:61 |
| Shadows | - | 228:1168, 278:3531, 278:3546 |
| Button Styles | Core Components | 278:3530, 278:3545, 278:3558, 278:3560 |

---

## Customization Example

```css
/* custom-theme.css */
:root {
  /* Brand colors */
  --clara-primary: #FF6B6B;
  --clara-primary-hover: #EE5A52;
  
  /* Custom spacing scale */
  --clara-spacing-custom: 18px;
  
  /* Custom shadow */
  --clara-shadow-custom: 0px 6px 20px rgba(255, 107, 107, 0.25);
}
```

Import after Clara styles:

```tsx
import '@clara/design-system/dist/styles.css';
import './custom-theme.css';
```
