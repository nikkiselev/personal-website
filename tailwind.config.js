module.exports = {
  //@todo test purge
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/js/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      scale: {
        65: '.65',
      },
      container: {
        padding: '1.5rem',
      },

      colors: {
        'light-gray': '#282c35',
        'another-gray': '#363c48',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
