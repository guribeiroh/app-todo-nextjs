/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cores primárias
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        // Tema escuro
        dark: {
          100: '#121212',
          200: '#1e1e1e',
          300: '#2d2d2d',
          400: '#3b3b3b',
          500: '#515151',
          600: '#6a6a6a',
          700: '#8e8e8e',
          800: '#a0a0a0'
        },
        // Tons de cinza personalizados
        gray: {
          750: '#313b4f',
          850: '#1a2234',
          950: '#0f172a',
        },
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
        'pulse-slow': 'pulse 3s infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      borderWidth: {
        '1': '1px',
      },
      opacity: {
        '15': '0.15',
        '35': '0.35',
        '65': '0.65',
        '85': '0.85',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-roboto-mono)', 'monospace'],
        display: ['var(--font-poppins)', 'sans-serif'],
      },
      screens: {
        '3xl': '1920px',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}