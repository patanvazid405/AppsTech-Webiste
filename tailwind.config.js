/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        void: 'rgb(var(--void) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        surface2: 'rgb(var(--surface2) / <alpha-value>)',
        edge: 'rgb(var(--edge) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        ink2: 'rgb(var(--ink2) / <alpha-value>)',
        ink3: 'rgb(var(--ink3) / <alpha-value>)',
        brand: {
          DEFAULT: '#5B5FEF',
          50: '#EEF0FE',
          100: '#DBDDFD',
          200: '#B7BBFB',
          300: '#8F95F7',
          400: '#6F73F2',
          500: '#5B5FEF',
          600: '#4744D6',
          700: '#3934AC',
          800: '#2C2985',
          900: '#211F63',
        },
        gold: {
          DEFAULT: '#F5B93D',
          400: '#F8CB6B',
          500: '#F5B93D',
          600: '#DE9E1E',
        },
        teal: {
          DEFAULT: '#2FD9C4',
          400: '#5CE6D5',
          500: '#2FD9C4',
          600: '#1FB8A5',
        },
      },
      backgroundImage: {
        'grad-brand': 'linear-gradient(135deg, #6F73F2 0%, #5B5FEF 45%, #3F3DBF 100%)',
        'grad-gold': 'linear-gradient(135deg, #F8CB6B 0%, #F5B93D 100%)',
        'grad-mesh': 'radial-gradient(60% 50% at 15% 0%, rgba(111,115,242,.20) 0%, transparent 60%), radial-gradient(50% 40% at 85% 15%, rgba(47,217,196,.14) 0%, transparent 60%)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(111,115,242,.18), 0 16px 60px -18px rgba(91,95,239,.7)',
        card: '0 1px 0 rgba(255,255,255,.04) inset, 0 20px 60px -30px rgba(15, 23, 42, .8)',
      },
      borderRadius: {
        xl2: '1.25rem',
        '3xl': '1.75rem',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-rev': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        marquee: 'marquee 42s linear infinite',
        'marquee-rev': 'marquee-rev 48s linear infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
};
