# Clara Design System - Integration Guide

Complete guide to integrating the Clara Design System into your codebase.

## Table of Contents

- [Quick Start](#quick-start)
- [Installation Methods](#installation-methods)
- [Setup in Different Frameworks](#setup-in-different-frameworks)
- [Theming & Customization](#theming--customization)
- [TypeScript Configuration](#typescript-configuration)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

---

## Quick Start

### 1. Install the Package

```bash
npm install @clara/design-system
```

### 2. Import Styles

Add this to your main entry point (e.g., `main.tsx`, `App.tsx`, or `index.js`):

```tsx
import '@clara/design-system/dist/styles.css';
```

### 3. Use Components

```tsx
import { Button, Card } from '@clara/design-system';

function App() {
  return (
    <div>
      <Card title="Welcome">
        <Button variant="primary">Get Started</Button>
      </Card>
    </div>
  );
}
```

---

## Installation Methods

### NPM

```bash
npm install @clara/design-system
```

### Yarn

```bash
yarn add @clara/design-system
```

### PNPM

```bash
pnpm add @clara/design-system
```

### From GitHub

```bash
npm install github:metaphi-agent/clara-design-system
```

---

## Setup in Different Frameworks

### React with Vite

**1. Install**
```bash
npm install @clara/design-system
```

**2. Import in `main.tsx`**
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@clara/design-system/dist/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

**3. Use in Components**
```tsx
import { Button } from '@clara/design-system';

export default function App() {
  return <Button variant="primary">Click me</Button>;
}
```

---

### React with Create React App

**1. Install**
```bash
npm install @clara/design-system
```

**2. Import in `index.js`**
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@clara/design-system/dist/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

### Next.js (App Router)

**1. Install**
```bash
npm install @clara/design-system
```

**2. Import in `app/layout.tsx`**
```tsx
import '@clara/design-system/dist/styles.css';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

**3. Use in any component**
```tsx
import { Button } from '@clara/design-system';

export default function Home() {
  return <Button variant="primary">Home Button</Button>;
}
```

---

### Next.js (Pages Router)

**1. Install**
```bash
npm install @clara/design-system
```

**2. Import in `pages/_app.tsx`**
```tsx
import type { AppProps } from 'next/app';
import '@clara/design-system/dist/styles.css';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```

---

### Remix

**1. Install**
```bash
npm install @clara/design-system
```

**2. Import in `app/root.tsx`**
```tsx
import type { LinksFunction } from '@remix-run/node';
import claraStyles from '@clara/design-system/dist/styles.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: claraStyles },
];

export default function App() {
  return (
    <html>
      <head>
        <Links />
      </head>
      <body>
        <Outlet />
      </body>
    </html>
  );
}
```

---

## Theming & Customization

### Override CSS Variables

Create your own theme by overriding CSS custom properties:

```css
/* custom-theme.css */
:root {
  /* Override primary color */
  --clara-primary: #FF6B6B;
  --clara-primary-hover: #EE5A52;
  --clara-primary-pressed: #DC4C41;
  
  /* Override spacing */
  --clara-spacing-lg: 20px;
  
  /* Override typography */
  --clara-font-family-primary: 'Roboto', sans-serif;
}
```

Import after the Clara styles:

```tsx
import '@clara/design-system/dist/styles.css';
import './custom-theme.css';
```

### Dark Mode Example

```css
/* dark-theme.css */
[data-theme='dark'] {
  --clara-background-primary: #1F1F1F;
  --clara-background-secondary: #2A2A2A;
  --clara-text-primary: #FFFFFF;
  --clara-text-secondary: #B0B0B0;
  --clara-border: #3D3D3D;
}
```

```tsx
// Toggle dark mode
function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      darkMode ? 'dark' : 'light'
    );
  }, [darkMode]);
  
  return (
    <div>
      <Button onClick={() => setDarkMode(!darkMode)}>
        Toggle Dark Mode
      </Button>
    </div>
  );
}
```

---

## TypeScript Configuration

### Recommended `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "strict": true
  }
}
```

### Type Imports

```tsx
import type { ButtonProps, CardProps } from '@clara/design-system';

// Create custom button wrapper
const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};

// Type-safe props
interface CustomCardProps extends CardProps {
  customProp?: string;
}
```

---

## Best Practices

### 1. Import Only What You Need

```tsx
// ✅ Good - Tree-shakeable
import { Button, Card } from '@clara/design-system';

// ❌ Avoid - Imports everything
import * as Clara from '@clara/design-system';
```

### 2. Use Design Tokens

```tsx
import { colors, spacing } from '@clara/design-system';

const CustomComponent = () => (
  <div style={{
    padding: spacing.lg,
    backgroundColor: colors.backgroundPrimary,
  }}>
    Content
  </div>
);
```

### 3. Consistent Styling

Use Clara components for consistency:

```tsx
// ✅ Good
<Button variant="primary">Submit</Button>

// ❌ Avoid custom buttons when Clara has one
<button className="my-custom-button">Submit</button>
```

### 4. Accessibility

All components include proper ARIA attributes:

```tsx
<Button aria-label="Close dialog" onClick={handleClose}>
  ×
</Button>
```

---

## Troubleshooting

### Styles Not Loading

**Problem**: Components render but have no styling.

**Solution**: Ensure you've imported the CSS file:

```tsx
import '@clara/design-system/dist/styles.css';
```

---

### TypeScript Errors

**Problem**: `Cannot find module '@clara/design-system'`

**Solution**: Install type definitions:

```bash
npm install --save-dev @types/react @types/react-dom
```

---

### CSS Variables Not Working

**Problem**: Custom theme variables not applying.

**Solution**: Import your custom CSS **after** Clara styles:

```tsx
import '@clara/design-system/dist/styles.css'; // First
import './custom-theme.css'; // Second
```

---

### Build Errors with Vite

**Problem**: `Failed to resolve import`

**Solution**: Ensure `vite.config.ts` is properly configured:

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@clara/design-system'],
  },
});
```

---

### Fonts Not Loading

**Problem**: Typography looks wrong.

**Solution**: The Inter font loads automatically from Google Fonts. If blocked, install locally:

```bash
npm install @fontsource/inter
```

```tsx
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
```

---

## Need Help?

- **GitHub Issues**: [Report a bug](https://github.com/metaphi-agent/clara-design-system/issues)
- **Documentation**: [Full docs](https://github.com/metaphi-agent/clara-design-system)
- **Figma Source**: [Clara Design System](https://www.figma.com/design/kOGAOM7xCcnGancqjYSfGD/Clara-Design-System)

---

## Next Steps

1. ✅ Install the package
2. ✅ Import styles
3. ✅ Use components
4. 📖 Explore [Storybook](../README.md#storybook) for interactive docs
5. 🎨 Customize with [design tokens](../README.md#design-tokens)
6. 🚀 Build your application!
