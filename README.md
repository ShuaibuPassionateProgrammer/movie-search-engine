
# mivie-search-engine

A powerful, minimal, and modern movie search engine built with **React**, **TypeScript**, and **Vite**.

This project leverages Vite for lightning-fast development, React for a robust UI, and TypeScript for type safety. Hot Module Replacement (HMR) is enabled by default for an instant feedback loop.

---

## Why Vite + React + TypeScript?

- **Instant dev server start**
- **Blazing fast HMR** for real-time feedback
- **Type safety** with TypeScript
- **Extensible ESLint setup** to ensure code quality

---

## Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/ShuaibuPassionateProgrammer/movie-search-engine.git
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the dev server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

---

## Official Vite Plugins for React

Choose one of these plugins for Fast Refresh support:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)  
  Uses [Babel](https://babeljs.io/) for Fast Refresh and JSX transformation.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc)  
  Uses [SWC](https://swc.rs/) for even faster builds and refresh.

---

## Enhancing Your ESLint Configuration

For production-grade applications, it's highly recommended to enable ESLint's type-aware rules. This ensures your codebase follows best practices and leverages TypeScript's full power.

**Example: Type-aware ESLint config**

```js
// eslint.config.js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Replace with type-aware configs:
      ...tseslint.configs.recommendedTypeChecked,
      // For stricter rules:
      // ...tseslint.configs.strictTypeChecked,
      // For style rules:
      // ...tseslint.configs.stylisticTypeChecked,
      // Add other configs if needed...
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

---

## React-Specific Lint Rules

For even better code quality, consider adding these plugins:

- [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) — Advanced linting for React components with TypeScript support.
- [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) — Lint rules specific to React DOM usage.

**Sample integration:**

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      reactX.configs['recommended-typescript'],
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

---

## Tips

- Always keep dependencies up to date!
- Review new ESLint and Vite plugin options for the latest features.
- Contribute or open issues if you find bugs or want new features.

---

**Happy coding! 🎬**
