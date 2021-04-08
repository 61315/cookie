module.exports = {
  purge: [
    './index.html',
    './public/**/*.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: theme => ({
        'pattern': "url(require('./src/assets/images/image_bg.gif'))",
        'container': "url('./src/assets/images/image_container.png')",
        'cookie': "url('./src/assets/images/image_cookie.png')",
        'cookie-alt': "url('./src/assets/images/image_cookie_alt.png')",
        'slip': "url('./src/assets/images/image_slip.png')",
       }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
