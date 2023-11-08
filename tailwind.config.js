const colors = require('tailwindcss/colors')
delete colors.lightBlue
delete colors.warmGray
delete colors.trueGray
delete colors.coolGray
delete colors.blueGray
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{html,vue,js,ts,jsx,tsx}'],
  theme: {
    extend: { colors },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
