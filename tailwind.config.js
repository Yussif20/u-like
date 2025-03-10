/** @type {import('tailwindcss').Config} */
export default {
content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      blue: '#0d6efd',
      indigo: '#6610f2',
      purple: '#6f42c1',
      pink: '#d63384',
      red: '#dc3545',
      orange: '#fd7e14',
      yellow: '#ffc107',
      green: '#198754',
      teal: '#20c997',
      cyan: '#0dcaf0',
      white: '#fff',
      gray: '#6c757d',
      'gray-dark': '#343a40',
      primary: '#0d6efd',
      secondary: '#6c757d',
      success: '#198754',
      info: '#0dcaf0',
      warning: '#ffc107',
      danger: '#dc3545',
      light: '#f8f9fa',
      dark: '#212529',
    },
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(-100deg, #553BB5, #7763C4)',
      },
    },
  },
  plugins: [],
};