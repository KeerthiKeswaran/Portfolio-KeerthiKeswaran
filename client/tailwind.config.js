/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        jet: '#0D0D0D',
        charcoal: '#1E1E1E',
        'cyan-glow': '#00FFFF',
        'teal-glow': '#00CED1',
        'electric-blue': '#007BFF',
        'ghost-white': '#F8F8FF',
        'dim-gray': '#A9A9A9'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 15px #00CED1' },
          '100%': { boxShadow: '0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 30px #00CED1' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      }
    },
  },
  plugins: [],
};