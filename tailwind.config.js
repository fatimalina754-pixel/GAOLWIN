/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0a0e1a',
          card: '#111827',
        },
        accent: {
          DEFAULT: '#00ff87',
          hover: '#00cc6c',
        }
      },
      fontFamily: {
        sans: ['Tajawal', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
