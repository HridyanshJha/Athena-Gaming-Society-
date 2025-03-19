/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-green': '#39FF14',
        'dark-bg': '#0A0A0A',
        'darker-bg': '#050505',
        'card-bg': '#111111',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { 'text-shadow': '0 0 10px #39FF14, 0 0 20px #39FF14, 0 0 30px #39FF14' },
          '100%': { 'text-shadow': '0 0 20px #39FF14, 0 0 30px #39FF14, 0 0 40px #39FF14' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};