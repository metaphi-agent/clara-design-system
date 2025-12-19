# Clara Design System

A comprehensive React component library based on the Clara Design System Figma file.

## Installation

```bash
npm install @clara/design-system
```

## Usage

```tsx
import { Button, TextField, Card } from '@clara/design-system';
import '@clara/design-system/dist/styles.css';

function App() {
  return (
    <div>
      <Button variant="primary" size="lg">
        Click me
      </Button>
      <TextField placeholder="Enter text..." />
      <Card
        title="Card Title"
        subtitle="Card subtitle"
        showImage
        showTags
      />
    </div>
  );
}
```

## Components

### Buttons
- Primary, Secondary, Tertiary variants
- Multiple sizes (sm, md, lg)
- Icon support
- Loading states

### TextField
- Standard input
- Upload media variant
- Label and helper text

### Card
- Configurable title, subtitle, tags
- Optional image
- Multiple layouts

### Message Card
- Multiple layouts (headline, paragraph)
- Artwork support
- Action buttons

### Chat
- Request and Response types
- Media support
- Footer actions

### Bottom Sheet
- Modal overlay
- Animated entrance
- Customizable content

### App Bar
- Page header variant
- Action buttons
- Back navigation

## Design Tokens

The design system uses CSS variables for theming:

```css
:root {
  /* Colors */
  --clara-primary: #83AFFB;
  --clara-background-primary: #FFFFFF;
  --clara-grey-700: #595959;
  
  /* Typography */
  --clara-font-family: 'Inter', sans-serif;
  --clara-font-size-xs: 10px;
  --clara-font-size-sm: 12px;
  --clara-font-size-md: 14px;
  --clara-font-size-lg: 16px;
  
  /* Spacing */
  --clara-spacing-xs: 4px;
  --clara-spacing-sm: 8px;
  --clara-spacing-md: 12px;
  --clara-spacing-lg: 16px;
}
```

## Development

```bash
# Install dependencies
npm install

# Build
npm run build

# Run Storybook
npm run storybook
```

## License

MIT
