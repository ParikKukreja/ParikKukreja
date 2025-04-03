/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber': {
          'primary': '#00ffff',
          'secondary': '#00cccc',
          'dark': '#0a0a0a',
          'light': '#ffffff',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { 'box-shadow': '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff' },
          '100%': { 'box-shadow': '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff' },
        },
      },
    },
  },
  plugins: [],
} 