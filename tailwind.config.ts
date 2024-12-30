import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
      },
      colors: {
        primary: '#6E683B',
        secondary: '#E88FB9',
        textPrimary: '#212636',
        tableBrownText: '#A18233',
        tableGreenText: '#33A13F',
      },
      backgroundColor: {
        light_brown: '#F0DFCC',
        containerBgColor: '#F2F5F6',
        tablePink: '#F0E1EA',
        tableBrown: '#F0DFCC66',

        tableGreen: '#DBFCDF',
      },
      keyframes: {
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
        'slide-in': 'slideIn 0.5s ease-in-out',
        'slide-out': 'slideOut 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};
export default config;
