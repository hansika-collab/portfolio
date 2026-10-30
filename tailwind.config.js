/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        carbon: {
          950: '#090d12',
          900: '#0d1117', // Primary matte carbon background
          850: '#12171f',
          800: '#161b22', // Card / surface background
          700: '#21262d',
          600: '#30363d', // Border muted
          500: '#484f58',
          400: '#8b949e',
          300: '#c9d1d9',
          100: '#f0f6fc',
        },
        cyber: {
          emerald: '#10b981',
          'emerald-bright': '#34d399',
          'emerald-dark': '#064e3b',
          'emerald-glow': 'rgba(16, 185, 129, 0.35)',
          lime: '#84cc16',
          'lime-bright': '#a3e635',
          'lime-glow': 'rgba(132, 204, 22, 0.35)',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Courier New', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'emerald-glow': '0 0 25px -5px rgba(16, 185, 129, 0.4)',
        'emerald-glow-lg': '0 0 40px -5px rgba(16, 185, 129, 0.5), 0 0 15px rgba(163, 230, 53, 0.3)',
        'lime-glow': '0 0 20px -5px rgba(132, 204, 22, 0.4)',
        'carbon-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'radar-ping': 'radarPing 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'subtle-drift': 'drift 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        radarPing: {
          '75%, 100%': {
            transform: 'scale(2.2)',
            opacity: '0',
          },
        },
        drift: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}

