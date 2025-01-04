/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-text': 'linear-gradient(45deg, #00d2ff, #3a47d5, #6b8cce)',
      },
      backgroundSize: {
        '300%': '300%',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      },
      animation: {
        'gradient-shift': 'gradient-shift 3s ease infinite',
      }
    },
  },
  plugins: [],
} 