/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,jsx,js,ts,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        'zis-theme': {
          primary: '#f97d30',
          secondary: '#F9D548',
          accent: '#ED1D26',
          neutral: '#1d283a',
          'base-100': '#fff',
          info: '#0ca6e9',
          success: '#62B363',
          warning: '#f4c152',
          error: '#fb6f84',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
