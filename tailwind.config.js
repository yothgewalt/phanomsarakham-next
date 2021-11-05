const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'gt-walsheim': ['gt-walsheim'],
      'ibm-plex-sans-thai': ['ibm-plex-sans-thai'],
    },
    screens: {
      xx: "400px",
      xs: "540px",
      smd: "670px",
      xxl: "1440px",
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
