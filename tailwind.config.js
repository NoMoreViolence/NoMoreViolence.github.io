/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '360px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1920px',

      // aliases
      tablet: '768px', // for md
      desktop: '1280px', // for xl

      // helpers
      portrait: { raw: '(orientation: portrait)' },
      landscape: { raw: '(orientation: landscape)' },
    },
    zIndex: {
      '-1': '-1',
      0: 0,
      1: 1,
      overlay: 2,
      dialog: 3,
      popover: 4,
      alert: 5,
      loading: 6,
    },
    extend: {
      colors: {
        primary: {
          100: '#DEDEFE',
          200: '#BEBEFE',
          300: '#9E9DFE',
          400: '#8685FD',
          500: '#5E5DFC',
          600: '#4443D8',
          700: '#2F2EB5',
          800: '#1E1D92',
          900: '#121178',
        },
        intent: {
          success: {
            100: '#F4FCCB',
            200: '#E7F999',
            300: '#D0ED64',
            400: '#B5DB3C',
            500: '#92C407',
            600: '#78A805',
            700: '#618D03',
            800: '#4B7102',
            900: '#3B5E01',
          },
          info: {
            100: '#CBFEFD',
            200: '#98FAFE',
            300: '#65EDFE',
            400: '#3FDBFD',
            500: '#00BDFC',
            600: '#0093D8',
            700: '#006EB5',
            800: '#004E92',
            900: '#003878',
          },
          warning: {
            100: '#FFF8D7',
            200: '#FFF0B0',
            300: '#FFE588',
            400: '#FFDB6B',
            500: '#FFCA3A',
            600: '#DBA62A',
            700: '#B7851D',
            800: '#936612',
            900: '#7A500B',
          },
          danger: {
            100: '#FFE9D6',
            200: '#FFCEAD',
            300: '#FFAD83',
            400: '#FF8D65',
            500: '#FF5832',
            600: '#DB3824',
            700: '#B71E19',
            800: '#930F15',
            900: '#7A0916',
          },
        },
        background: '#e9f1fc',
      },
    },
  },
  plugins: [],
};
