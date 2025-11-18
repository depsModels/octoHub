/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'octo-blue': '#152D35',
        'octo-green': '#03493D',
        'octo-yellow': '#F9F9E0'
      },
      fontFamily: {
        bebas: ['var(--font-bebas)', 'sans-serif'],
        space: ['var(--font-space)', 'sans-serif'],
        archivo: ['var(--font-archivo)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif']
      }
    }
  },
  plugins: []
};