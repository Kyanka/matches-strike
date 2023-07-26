/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      ...colors,
      'orange': '#ff8c00',
      'orange_bright': '#f7630c',
      'yellow': '#fce100',
      'white': '#ffffff',
      'black': '#000000',
      'gray': '#a9a9a9'
    },
  },
  plugins: [],
}

