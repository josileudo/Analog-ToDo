/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        320: '75rem'
      }
    },
  },
  plugins: [],
};
