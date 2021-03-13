module.exports = {
  purge: [],
  //@todo test purge
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/js/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        padding: '1rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
