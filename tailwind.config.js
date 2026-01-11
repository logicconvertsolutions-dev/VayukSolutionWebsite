
module.exports = {
  theme: {
    extend: {
      colors: {
        background: '#F0FDFA',
        surface: '#FFFFFF',
        brand: '#10B981',
        accent: '#1E1B4B',
        primary: '#064E3B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'spin-slow-reverse': 'spin 15s linear infinite reverse',
        'pulse-slow': 'pulse 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
