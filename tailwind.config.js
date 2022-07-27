

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)'
    },

    fontSize: {
      '10xl': '10rem'
    },
    extend: {
    fontFamily: {
      'Baunk' : ['Baunk','sans-serif']
      },
      'N27' : ['N27', 'sans-serif']
    },
  },
  plugins: [],
}