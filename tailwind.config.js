/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "octo-blue": "#152D35",
        "octo-green": "#03493D",
        "octo-yellow": "#F9F9E0",
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', "sans-serif"],
        space: ['"Space Grotesk"', "sans-serif"],
        archivo: ['"Archivo Black"', "sans-serif"],
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        opensans: ['"Open Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
}
