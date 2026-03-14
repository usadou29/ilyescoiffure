/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'barber': {
          900: '#0a0a0a',
          800: '#141414',
          700: '#1a1a1a',
          600: '#2a2a2a',
          500: '#3a3a3a',
          gold: '#c9a962',
          'gold-light': '#d4b978',
          'gold-dark': '#a88b4a',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
