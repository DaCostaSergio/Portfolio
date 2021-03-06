

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
    extend: {
    fontFamily: {
      'Baunk' : ['Baunk','sans-serif']
      },
    },
  },
  plugins: [],
}