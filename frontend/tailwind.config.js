/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1a3c2e',
        'primary-dark': '#0d2418',
        'primary-light': '#2a5c46',
        accent: '#e8a020',
        'accent-light': '#f5c84a',
        cream: '#f8f5f0',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


