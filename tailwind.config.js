/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors         : { primary: '#3e2511', secondary: 'rgb(242 229 220)' },
      backgroundColor: {
        primary: '#3e2511', secondary: '#251f19', light: '#f3e6dd',
      },

      fontFamily: {
        Amiri    : ['Amiri', 'serif'],
        Cormorant: ['Cormorant SC', 'serif'],
        Tangerine: ['Tangerine', 'serif'],
      },
    },
  },
  plugins: [],
}
