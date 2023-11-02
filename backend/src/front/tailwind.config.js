/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'formula-red' : '#E10600',
        'formula-white' : '#FBFBFB',
        'formula-grey' : '#38383F',
        'formula-grey-second' : '#E3E3E3'
      },
      fontFamily: {
        'titilium' : ['Titillium Web', ...defaultTheme.fontFamily.sans],
        'formulafont' : ['FormulaWide', 'sans'],
        'formulafont-regular' : ['FormulaRegular', 'sans'],
        'formulafont-bold' : ['FormulaBold', 'sans'],
      },
      backgroundImage: {
        'hero' : "url('/public/charles.jpg')",
      }
    },
  },
  plugins: [],
}

