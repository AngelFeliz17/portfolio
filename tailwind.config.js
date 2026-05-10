/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['Syne', '"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#0c0f14',
          900: '#121822',
          850: '#161d2a',
          800: '#1c2535',
        },
        accent: {
          DEFAULT: '#2dd4bf',
          muted: '#14b8a6',
          dim: '#0d9488',
        },
        flare: '#fbbf24',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.55s ease-out forwards',
        float: 'float 8s ease-in-out infinite',
        shimmer: 'shimmer 12s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(16px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(2%, -3%) scale(1.02)' },
          '66%': { transform: 'translate(-2%, 2%) scale(0.98)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, rgba(12,15,20,0.92), rgba(12,15,20,0.98)), radial-gradient(ellipse 80% 50% at 50% -20%, rgba(45,212,191,0.15), transparent)',
        'accent-gradient': 'linear-gradient(135deg, #2dd4bf 0%, #22d3ee 50%, #fbbf24 100%)',
      },
    },
  },
  plugins: [],
}
