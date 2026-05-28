import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand core
        ceres: {
          black:    '#050508',
          surface:  '#0D0D14',
          border:   '#1A1A2E',
          blue:     '#0EA5E9',
          'blue-dark': '#0284C7',
          'blue-glow': '#38BDF8',
          gold:     '#F59E0B',
          'gold-light': '#FCD34D',
          red:      '#EF4444',
          'red-dark': '#DC2626',
        },
        // Text scale
        text: {
          primary: '#F1F5F9',
          secondary: '#94A3B8',
          muted: '#475569',
          accent: '#0EA5E9',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-bebas)', 'Impact', 'sans-serif'],
        mono: ['var(--font-space-grotesk)', 'monospace'],
      },
      fontSize: {
        'hero':  ['clamp(3rem, 8vw, 8rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display': ['clamp(2rem, 5vw, 5rem)', { lineHeight: '1', letterSpacing: '-0.01em' }],
        'title': ['clamp(1.5rem, 3vw, 3rem)', { lineHeight: '1.1' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '100': '25rem',
        '120': '30rem',
        '140': '35rem',
        '160': '40rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'noise': "url('/noise.png')",
        'hero-glow': 'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(14, 165, 233, 0.15), transparent)',
        'gold-glow': 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(245, 158, 11, 0.12), transparent)',
      },
      animation: {
        'fade-in':        'fadeIn 0.6s ease-out forwards',
        'fade-up':        'fadeUp 0.6s ease-out forwards',
        'fade-down':      'fadeDown 0.6s ease-out forwards',
        'slide-in-left':  'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'scale-in':       'scaleIn 0.4s ease-out forwards',
        'glow-pulse':     'glowPulse 3s ease-in-out infinite',
        'marquee':        'marquee 30s linear infinite',
        'marquee-reverse':'marqueeReverse 30s linear infinite',
        'float':          'float 6s ease-in-out infinite',
        'shimmer':        'shimmer 2s linear infinite',
        'scan-line':      'scanLine 4s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      boxShadow: {
        'blue-glow':  '0 0 30px rgba(14, 165, 233, 0.3)',
        'blue-glow-lg': '0 0 60px rgba(14, 165, 233, 0.25)',
        'gold-glow':  '0 0 30px rgba(245, 158, 11, 0.3)',
        'red-glow':   '0 0 30px rgba(239, 68, 68, 0.3)',
        'inner-glow': 'inset 0 0 30px rgba(14, 165, 233, 0.1)',
        'card':       '0 4px 24px rgba(0, 0, 0, 0.5)',
        'card-hover': '0 8px 40px rgba(0, 0, 0, 0.7), 0 0 30px rgba(14, 165, 233, 0.15)',
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      screens: {
        'xs': '480px',
        '3xl': '1920px',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
}

export default config
