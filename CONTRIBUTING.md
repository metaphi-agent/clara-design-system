# Contributing to Clara Design System

Thank you for your interest in contributing to the Clara Design System!

## Development Setup

1. Clone the repository:
```bash
git clone https://github.com/metaphi-agent/clara-design-system.git
cd clara-design-system
```

2. Install dependencies:
```bash
npm install
```

3. Start development:
```bash
npm run dev
```

## Adding a New Component

1. Create a new directory in `src/components/`
2. Add the component files:
   - `ComponentName.tsx` - React component
   - `ComponentName.css` - Styles
   - `index.ts` - Exports
3. Follow the existing component patterns
4. Export from `src/index.ts`

## Design Tokens

All design tokens should be defined in `src/tokens/` and exposed as CSS variables in `src/styles/global.css`.

## Code Style

- Use TypeScript
- Follow the existing code style
- Use meaningful component and prop names
- Add JSDoc comments for props

## Testing

Before submitting a PR, ensure:
- Components build without errors
- All props are typed correctly
- CSS follows the BEM naming convention

## Pull Request Process

1. Create a feature branch from `main`
2. Make your changes
3. Update documentation if needed
4. Submit a PR with a clear description

## Questions?

Feel free to open an issue for any questions or suggestions!
