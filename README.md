# Clara Design System

<div align="center">

[![npm version](https://img.shields.io/npm/v/@clara/design-system.svg)](https://www.npmjs.com/package/@clara/design-system)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A comprehensive React component library based on the [Clara Design System Figma file](https://www.figma.com/design/kOGAOM7xCcnGancqjYSfGD/Clara-Design-System).

[Quick Start](#-quick-start) • [Components](#-components) • [Preview](#-local-preview) • [Documentation](#-documentation)

</div>

---

## 🎯 Try it Locally

**Run the interactive preview to see all components:**

### Mac/Linux
```bash
git clone https://github.com/metaphi-agent/clara-design-system.git
cd clara-design-system
chmod +x setup-preview.sh
./setup-preview.sh
```

### Windows
```cmd
git clone https://github.com/metaphi-agent/clara-design-system.git
cd clara-design-system
setup-preview.bat
```

**Opens at**: http://localhost:5173

See **[QUICK_START.md](QUICK_START.md)** for detailed instructions.

---

## ✨ Features

- 🎨 **Figma-first**: Components directly mapped from Figma design system
- 💪 **Type-safe**: Full TypeScript support with comprehensive type definitions
- 🎭 **Customizable**: Design tokens for easy theming
- 📦 **Tree-shakeable**: Import only what you need
- 📚 **Storybook**: Interactive component documentation
- ♻️ **React 18**: Built with modern React best practices

## 🚀 Installation

```bash
npm install @clara/design-system
# or
yarn add @clara/design-system
# or
pnpm add @clara/design-system
```

## 📝 Usage

### Basic Setup

```tsx
import { Button, Card, TextField } from '@clara/design-system';
import '@clara/design-system/dist/styles.css';

function App() {
  return (
    <div>
      <Button variant="primary" size="lg">
        Click me
      </Button>
    </div>
  );
}
```

## 🧩 Components

### Button

Fully featured button component with multiple variants and states.

**Figma Reference**: Component ID `246:2914`

```tsx
import { Button } from '@clara/design-system';

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="tertiary">Tertiary</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// States
<Button loading>Loading...</Button>
<Button disabled>Disabled</Button>

// With icons
<Button leftIcon={<Icon />}>With Icon</Button>
<Button fullWidth>Full Width</Button>
```

**Props**:
- `variant`: `'primary' | 'secondary' | 'tertiary'` - Button style variant
- `size`: `'sm' | 'md' | 'lg'` - Button size
- `loading`: `boolean` - Show loading spinner
- `disabled`: `boolean` - Disable the button
- `leftIcon`, `rightIcon`: `ReactNode` - Add icons
- `fullWidth`: `boolean` - Make button full width

---

### IconButton

Compact icon-only button for actions.

**Figma Reference**: Component ID `246:3454`

```tsx
import { IconButton } from '@clara/design-system';

<IconButton variant="primary">✓</IconButton>
<IconButton variant="secondary">✎</IconButton>
<IconButton shape="square">×</IconButton>
```

---

### Card

Flexible card component for content display.

**Figma Reference**: Component ID `262:1502`

```tsx
import { Card } from '@clara/design-system';

<Card
  title="Card Title"
  subtitle="Optional subtitle"
  showImage
  showTags
  image="/path/to/image.jpg"
/>
```

---

### TextField

Input field with label and helper text support.

**Figma Reference**: Component ID `381:3624`

```tsx
import { TextField } from '@clara/design-system';

<TextField
  label="Email"
  placeholder="Enter your email"
  helperText="We'll never share your email"
  error="Invalid email format"
/>
```

---

### MessageCard

Alert/notification card with multiple layouts.

**Figma Reference**: Component ID `246:2101`

```tsx
import { MessageCard } from '@clara/design-system';

<MessageCard
  layout="headline-paragraph"
  style="white"
  showDismiss
>
  Your changes have been saved successfully.
</MessageCard>
```

---

### Chat

Chat message component for conversational interfaces.

**Figma Reference**: Component ID `246:3021`

```tsx
import { Chat } from '@clara/design-system';

<Chat
  type="response"
  avatar={<img src="/avatar.jpg" />}
  showFooter
  footer={<div>Actions</div>}
>
  Hello! How can I help you today?
</Chat>
```

---

### AppBar

Top navigation bar with title and actions.

**Figma Reference**: Component ID `246:3520`

```tsx
import { AppBar } from '@clara/design-system';

<AppBar
  title="Page Title"
  leftIcon={<BackIcon />}
  cta={<Button size="sm">Action</Button>}
  showCta
/>
```

---

### BottomSheet

Modal bottom sheet for mobile-first interfaces.

**Figma Reference**: Component ID `271:3443`

```tsx
import { BottomSheet } from '@clara/design-system';
import { useState } from 'react';

function Example() {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Sheet</Button>
      <BottomSheet
        open={open}
        onClose={() => setOpen(false)}
        showOverlay
      >
        <h3>Sheet Content</h3>
        <p>Your content here</p>
      </BottomSheet>
    </>
  );
}
```

---

## 🎨 Design Tokens

The design system uses CSS custom properties for theming. All tokens are extracted from the Figma file.

### Colors

```css
:root {
  /* Primary */
  --clara-primary: #83AFFB;
  --clara-primary-hover: #6A9BE8;
  --clara-primary-pressed: #5287D5;
  
  /* Background */
  --clara-background-primary: #FFFFFF;
  --clara-background-secondary: #F8F8F8;
  
  /* Text */
  --clara-text-primary: #1F1F1F;
  --clara-text-secondary: #595959;
  
  /* Greys */
  --clara-grey-700: #595959;
  --clara-grey-300: #D9D9D9;
}
```

See **[docs/DESIGN_TOKENS.md](docs/DESIGN_TOKENS.md)** for complete token reference.

---

## 👁️ Local Preview

Run the interactive preview to explore all components:

```bash
# Quick setup
./setup-preview.sh  # Mac/Linux
setup-preview.bat   # Windows

# Manual setup
npm install && npm run build
cd example && npm install && npm run dev
```

The preview includes:
- ✅ All components with interactive demos
- 🎨 Design tokens visualization
- 📋 Figma component IDs
- 🔄 Hot reload for instant updates

**Preview URL**: http://localhost:5173

---

## 📚 Documentation

- **[Integration Guide](docs/INTEGRATION_GUIDE.md)**: Setup for Vite, Next.js, CRA, Remix
- **[Design Tokens](docs/DESIGN_TOKENS.md)**: Complete token reference
- **[QUICK_START.md](QUICK_START.md)**: Local preview setup

---

## 📖 Storybook

Explore components interactively:

```bash
npm run storybook
```

Opens at `http://localhost:6006` with all components documented.

---

## 🛠️ Development

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Watch mode for development
npm run dev

# Run Storybook
npm run storybook

# Build Storybook
npm run build-storybook
```

---

## 🔗 Figma Integration

This library is directly derived from the Clara Design System Figma file:

**Figma File**: [Clara Design System](https://www.figma.com/design/kOGAOM7xCcnGancqjYSfGD/Clara-Design-System)

All components include Figma component IDs in their documentation for easy reference.

### Design Token Mapping

- **Colors**: Extracted from Figma color styles (IDs: 228:1167, 219:2, etc.)
- **Typography**: Based on Figma text styles (IDs: 179:8-179:33, etc.)
- **Shadows**: From Figma effect styles (ID: 228:1168)
- **Components**: Direct implementations of Figma components

---

## 📝 TypeScript Support

Full TypeScript support with comprehensive type definitions:

```tsx
import type { ButtonProps, CardProps } from '@clara/design-system';

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

---

## 🤝 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

---

## 📄 License

MIT © Clara Design Team

---

## 🔍 Quick Reference

| Component | Figma ID | Description |
|-----------|----------|-------------|
| Button | 246:2914 | Primary, secondary, tertiary buttons |
| IconButton | 246:3454 | Icon-only circular buttons |
| Card | 262:1502 | Content cards with optional media |
| TextField | 381:3624 | Text input with validation |
| MessageCard | 246:2101 | Alert/notification cards |
| Chat | 246:3021 | Chat message bubbles |
| AppBar | 246:3520 | Top navigation bar |
| BottomSheet | 271:3443 | Modal bottom sheet |

---

<div align="center">

Made with ❤️ by the Clara Design Team

[Documentation](https://github.com/metaphi-agent/clara-design-system) • [Report Bug](https://github.com/metaphi-agent/clara-design-system/issues) • [Request Feature](https://github.com/metaphi-agent/clara-design-system/issues)

</div>
