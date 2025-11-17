/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBlue: {
          500: '#1e40af',
          600: '#1e3a8a',
          700: '#1d4ed8',
          800: '#1e3a8a',  // This is your navbar color
          900: '#1e3a8a',
        }
      }
    },
  },
  plugins: [],
}