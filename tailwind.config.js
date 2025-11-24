/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kz-gold': '#D4AF37',       // Золото
        'kz-gold-light': '#F3E5AB', // Светлое золото
        'kz-blue': '#1A2E35',       // Темно-синий (камзол)
        'kz-burgundy': '#58111A',   // Бордовый
        'kz-beige': '#F9F5F0',      // Фон
      },
      fontFamily: {
        'serif': ['"Cormorant Garamond"', 'serif'],
        'sans': ['"Montserrat"', 'sans-serif'],
      },
      backgroundImage: {
        'ornament': "url('https://www.transparenttextures.com/patterns/arabesque.png')",
      }
    },
  },
  plugins: [],
}