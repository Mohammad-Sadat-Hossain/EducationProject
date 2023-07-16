/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'lime-500': '#84CC16',
        'lime-600': '#65A30D',
        'lime-700': '#4D7C0F',
        'dark-green': '#008000'
      },
      fontFamily: {
        'heading': ['Quicksand', 'sans-serif']
      },
      scale:{
        '150': '1.5'
      },
    },
    plugins: [
      require('@tailwindcss/forms')
    ],
  }

}