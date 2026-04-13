# Frangnanceline - React Vite App

A modern React application built with Vite, TypeScript, and Tailwind CSS.

## Project Structure

```
src/
├── components/        # Reusable React components
│   ├── Header.tsx
│   └── Button.tsx
├── data/             # Data files and constants
│   └── sampleData.ts
├── assets/           # Static assets (images, fonts, etc.)
├── App.tsx           # Main App component
├── main.tsx          # Entry point
└── index.css         # Global styles with Tailwind CSS
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Technologies

- **Vite** - Next generation frontend tooling
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS & Autoprefixer** - CSS processing

## Tailwind CSS

Tailwind CSS is already configured and ready to use. You can use utility classes directly in your components:

```tsx
<div className="flex items-center justify-between p-4 bg-blue-600 text-white rounded-lg">
  Content here
</div>
```

## Adding New Components

1. Create a new file in `src/components/`
2. Use TypeScript for type safety
3. Export as default
4. Import and use in other components

Example:
```tsx
// src/components/Card.tsx
export default function Card({ title, children }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-bold">{title}</h2>
      {children}
    </div>
  );
}
```

## Managing Data

Place data constants and types in `src/data/`. This keeps your components clean and makes data management easier:

```tsx
// src/data/api.ts
export const API_ENDPOINTS = {
  users: '/api/users',
  products: '/api/products',
};
```

## Assets

Place images, fonts, and other static assets in `src/assets/`:
```tsx
import logo from '../assets/logo.png';
```

## Building for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder, ready for deployment.

---

**Happy coding!** 🚀

## ESLint Configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
