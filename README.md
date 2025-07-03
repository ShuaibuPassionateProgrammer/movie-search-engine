
# 🎬 movie-search-engine

A powerful and modern movie search engine that helps you discover films with ease. Built with **React**, **TypeScript**, and **Vite** for optimal performance and developer experience.

![Last Updated](https://img.shields.io/badge/Last%20Updated-2025--07--01-blue)
[![Author](https://img.shields.io/badge/Author-ShuaibuPassionateProgrammer-green)](https://github.com/ShuaibuPassionateProgrammer)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)

## 🚀 Features

- **Instant Movie Search** - Find movies in real-time as you type
- **Detailed Movie Information** - Access comprehensive movie details
- **Responsive Design** - Perfect viewing on any device
- **Type-Safe Codebase** - Built with TypeScript for reliability
- **Modern Development** - Powered by Vite for lightning-fast development

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: [Your CSS solution - e.g., Tailwind, Styled-components]
- **State Management**: [Your state management solution - e.g., Redux, Zustand]
- **API Integration**: [Movie API being used - e.g., TMDB, OMDB]

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/ShuaibuPassionateProgrammer/movie-search-engine.git
   cd movie-search-engine
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Add your API keys and configuration
   ```

3. **Install dependencies**
   ```bash
   npm install   # or yarn install
   ```

4. **Start development server**
   ```bash
   npm run dev   # or yarn dev
   ```

Visit `http://localhost:5173` to see your app in action! 🎉

## 📖 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run format` - Format code with Prettier

## 🔧 Configuration

### Vite Plugins

Choose your preferred React refresh plugin:

- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)**
  - Uses Babel
  - Better compatibility
  - More transformation options

- **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc)**
  - Uses SWC
  - Faster compilation
  - Lower memory usage

### ESLint Setup

Enhanced type-aware configuration:

```js
// eslint.config.js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      // Uncomment for stricter rules:
      // ...tseslint.configs.strictTypeChecked,
      // ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

### React-Specific Linting

Enhance React code quality with:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

## 📱 Screenshots

[Add screenshots of your application here]

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Movie data provided by [Your API Provider]
- Icons from [Your Icon Source]
- [Any other acknowledgments]

---

## ⚡ Performance Tips

- Enable tree shaking in production builds
- Implement lazy loading for routes
- Use React.memo() for expensive components
- Optimize images and assets

---

<p align="center">
Made with ❤️ by <a href="https://github.com/ShuaibuPassionateProgrammer">ShuaibuPassionateProgrammer</a>
<br>
Last updated: 2025-07-01
</p>
