module.exports = {
  content: [
    './public/**/*.html',
	  './public/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1280px'},
      // => @media (max-width: 1280px) { ... }

      'lg': {'max': '1024px'},
      // => @media (max-width: 1024px) { ... }

      'md': {'max': '900px'},
      // => @media (max-width: 900px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      zIndex: {
        '99': '99',
      },
      height: {
        '144': '36rem',
      },
      width: {
        '144': '36rem',
        '71': '17.75rem',
      },
    },
  },
  plugins: [],
}
