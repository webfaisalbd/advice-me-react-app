/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '400px',
      md: '600px',
      lg: '800px',
      xl: '1000px',
    },
    fontFamily: {
      julee: ['Julee', 'cursive'],
      climate: ['Climate Crisis', 'cursive']
    }
  },
  plugins: [],
}
