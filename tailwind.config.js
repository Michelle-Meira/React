/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vinho-escuro': '#5B2A3A',
        'vinho-claro': '#7C3A4F',
      },
    },
  },
  plugins: [],
}