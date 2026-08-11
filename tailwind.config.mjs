/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/scripts/**/*.js',
  ],
  safelist: ['is-revealed'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#E5184A',
          maroon: '#840715',
          deep: '#B5123A',
        },
        warm: {
          50: '#FBF7F5',
          100: '#FAF6F3',
          200: '#F3EDE9',
        },
        charcoal: {
          DEFAULT: '#2B2320',
          soft: '#6A6058',
        },
        line: '#E4E4E4',
      },
      fontFamily: {
        display: ['"Fraunces"', '"Noto Sans SC"', 'serif'],
        sans: ['"Inter"', '"Noto Sans SC"', 'sans-serif'],
        zh: ['"Noto Sans SC"', '"Inter"', 'sans-serif'],
      },
      borderRadius: {
        xl2: '20px',
      },
      boxShadow: {
        soft: '0 12px 40px -10px rgba(43, 35, 32, 0.12)',
        card: '0 8px 24px -6px rgba(43, 35, 32, 0.10)',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};
