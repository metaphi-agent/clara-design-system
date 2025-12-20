# Quick Start Guide - Local Preview

Get the Clara Design System preview running locally in 3 simple steps.

## Option 1: Automated Setup (Recommended)

### Mac/Linux

```bash
chmod +x setup-preview.sh
./setup-preview.sh
```

### Windows

```cmd
setup-preview.bat
```

The script will:
1. Build the design system package
2. Install preview app dependencies  
3. Start the development server

**Preview opens at**: http://localhost:5173

---

## Option 2: Manual Setup

### Step 1: Build the Design System

```bash
npm install
npm run build
```

### Step 2: Install Preview Dependencies

```bash
cd example
npm install
```

### Step 3: Start Development Server

```bash
npm run dev
```

**Preview opens at**: http://localhost:5173

---

## What You'll See

The preview app includes:

### 🏠 Hero Section
- Welcome banner with primary actions

### 💻 Components Showcase
- **Buttons**: All variants, sizes, states, and icon combinations
- **Icon Buttons**: Round and square shapes
- **Cards**: Multiple configurations
- **Text Fields**: With labels, validation, and error states
- **Message Cards**: Notification components
- **Chat**: Conversational UI with bot and user messages
- **Bottom Sheet**: Interactive modal demo

### 🎨 Design Tokens
- **Color Palette**: Visual color swatches with hex codes
- **Spacing Scale**: Interactive spacing demo

### 📝 Code References
- Each component includes its Figma Component ID
- Direct links to Figma source file

---

## Features

- 🔥 **Hot Reload**: Changes update instantly
- 📱 **Responsive**: Works on mobile and desktop
- ⚡ **Fast**: Built with Vite
- 🎮 **Interactive**: Click, type, and interact with components

---

## Keyboard Shortcuts

- `Ctrl/Cmd + C`: Stop the server
- Refresh browser to see component updates

---

## Troubleshooting

### Port 5173 Already in Use

Run on a different port:

```bash
npm run dev -- --port 3000
```

### Build Errors

Clean and rebuild:

```bash
cd ..
npm run clean
npm run build
cd example
npm install
npm run dev
```

### Components Not Rendering

Ensure the design system is built:

```bash
cd ..
npm run build
cd example
npm run dev
```

---

## Next Steps

1. ✅ Preview running locally
2. 🔍 Explore all components
3. 📋 Read the [Integration Guide](docs/INTEGRATION_GUIDE.md)
4. 🎨 Check out [Design Tokens](docs/DESIGN_TOKENS.md)
5. 🚀 Integrate into your project

---

## Need Help?

- **GitHub**: [Report an issue](https://github.com/metaphi-agent/clara-design-system/issues)
- **Documentation**: [Full README](README.md)
- **Figma**: [Design System Source](https://www.figma.com/design/kOGAOM7xCcnGancqjYSfGD/Clara-Design-System)

---

## Development Tips

### Edit Components

Modify `example/src/App.tsx` to customize the preview.

### Add New Demos

```tsx
// In example/src/App.tsx
<section className="section">
  <h2>Your Component</h2>
  <YourComponent prop="value" />
</section>
```

### Styling

Edit `example/src/App.css` to change preview styles.

### Hot Reload

Changes to `src/App.tsx` or `src/App.css` reload instantly!
