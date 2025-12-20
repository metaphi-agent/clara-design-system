# Clara Design System

A comprehensive React component library extracted from Figma, built with TypeScript and Tailwind CSS.

## Features

- 12+ reusable React components
- Design tokens (colors, typography, spacing, shadows)
- TypeScript support with full type definitions
- Tailwind CSS v4 integration
- Framer Motion animations
- Accessible by default

## Components

### Buttons
- `Button` - Primary, Secondary, Tertiary variants with states
- `IconButton` - Icon-only buttons with multiple shapes

### Inputs
- `TextField` - Chat-style input with media upload support
- `Chip` - Selectable filter chips

### Cards
- `Card` - Product cards (vertical, horizontal, routine variants)
- `MessageCard` - Notification/alert cards

### Chat
- `ChatBubble` - User and response chat bubbles
- `MediaUpload` - File upload with progress states

### Navigation
- `AppBar` - Header navigation (logo and page variants)

### Overlays
- `Modal` - Dialog modals
- `BottomSheet` - Mobile-friendly bottom sheets

### Miscellaneous
- `Tag` - Product tags (Bestseller, Doctor's Choice)
- `Nudge` - Call-to-action nudges

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Design Tokens

### Colors

The design system includes a comprehensive color palette:

- **Blue** (Primary): 100-900 shades
- **Grey** (Neutral): 50-900 shades
- **Red**: 100-900 shades
- **Orange**: 100-900 shades
- **Yellow**: 100-900 shades
- **Green**: 100-900 shades
- **Purple**: 100-900 shades

### Typography

- Font Family: Inter
- Font Sizes: 10px - 56px
- Font Weights: Regular (400), Medium (500), Semibold (600), Bold (700)

### Spacing

4px, 8px, 12px, 16px, 24px, 32px, 48px

### Border Radius

SM (4px), MD (8px), LG (12px), XL (16px), 2XL (24px), Full (9999px)

## Usage

```tsx
import { Button, Card, TextField } from './components'

function App() {
  return (
    <div>
      <Button variant="primary">Get Started</Button>
      <Card
        title="Product Name"
        price="$29.99"
        tags={['bestseller']}
      />
      <TextField placeholder="Search..." />
    </div>
  )
}
```

## License

MIT
