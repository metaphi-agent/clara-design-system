# Clara Design System - Preview App

Local preview application showcasing all components from the Clara Design System.

## Quick Start

### 1. Install Dependencies

```bash
cd example
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

This will start a Vite development server at `http://localhost:5173`

### 3. Build for Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

## What's Included

The preview app showcases:

### Components
- ✅ **Buttons** - All variants, sizes, and states
- ✅ **Icon Buttons** - Round and square shapes
- ✅ **Cards** - With various configurations
- ✅ **Text Fields** - With labels, errors, and validation
- ✅ **Message Cards** - Notification components
- ✅ **Chat** - Conversational UI elements
- ✅ **App Bar** - Top navigation
- ✅ **Bottom Sheet** - Modal bottom sheets

### Design Tokens
- 🎨 **Colors** - Visual color palette
- 📏 **Spacing** - Spacing scale demo
- ✏️ **Typography** - All text styles
- 🎭 **Shadows** - Shadow variations

## Features

- 🔥 **Hot Module Replacement** - Instant updates during development
- 📱 **Responsive** - Mobile-friendly layout
- 🎨 **Interactive** - All components are interactive
- 📋 **Code References** - Includes Figma component IDs

## Structure

```
example/
├── src/
│   ├── App.tsx          # Main preview app
│   ├── App.css          # Styles
│   └── main.tsx         # Entry point
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
└── package.json         # Dependencies
```

## Customization

Edit `src/App.tsx` to add or modify component demos.

## Troubleshooting

### Port Already in Use

If port 5173 is in use:

```bash
npm run dev -- --port 3000
```

### Dependencies Not Found

Rebuild the parent package:

```bash
cd ..
npm run build
cd example
npm install
```

## Learn More

- [Clara Design System](../README.md)
- [Integration Guide](../docs/INTEGRATION_GUIDE.md)
- [Design Tokens](../docs/DESIGN_TOKENS.md)
- [Figma Source](https://www.figma.com/design/kOGAOM7xCcnGancqjYSfGD/Clara-Design-System)
