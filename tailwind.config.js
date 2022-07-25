/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'sm': '600px',
      // => @media (min-width: 640px) { ... } 
  
      'md': '768px',
      // => @media (min-width: 768px) { ... }
  
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
  
      'xl': '1320px',
      // => @media (min-width: 1320px) { ... }
      '2xl': '1500px',
      // => @media (min-width: 1440px) { ... }
      '3xl': '1740px'
    },
      fontFamily: {
        sans: 
          'Roboto',
      },
  },
  
  plugins: [],
}
