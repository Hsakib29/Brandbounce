/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production'
      ? [
          require('@fullhuman/postcss-purgecss')({
            content: [
              './app/**/*.{js,jsx,ts,tsx}',
              './components/**/*.{js,jsx,ts,tsx}',
              './styles/**/*.{js,jsx,ts,tsx}', // If you have JS/TS files with Tailwind classes
            ],
            safelist: [
              // Add any classes that might be dynamically added or not detected by PurgeCSS
              // Example: 'active', 'show', 'hidden'
            ],
          }),
          require('cssnano')({
            preset: 'default',
          }),
        ]
      : []),
  ],
};

export default config;