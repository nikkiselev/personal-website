module.exports = {
  //@todo test purge
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/js/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        padding: '1.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
