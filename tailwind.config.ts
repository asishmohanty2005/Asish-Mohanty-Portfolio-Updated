import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: { ink: '#050609', panel: '#0b0d12', electric: '#7c8cff', cyan: '#61dafb' },
      fontFamily: { sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'] },
      animation: { float: 'float 6s ease-in-out infinite', 'spin-slow': 'spin 14s linear infinite' },
      keyframes: { float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } } }
    }
  },
  plugins: []
};
export default config;
