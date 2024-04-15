/** @type {import('tailwindcss').Config} */
import DefaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "Poppins": ["Poppins", ...DefaultTheme.fontFamily.sans],
        "Montserrat": ["Montserrat", ...DefaultTheme.fontFamily.sans],
      },
    },
    colors:{
      'bg-blue':'#5035F1',
      'dark-blue':'#0C0E2B',
      'btn-bg':'#5035F1',
      'blue-text':'#5863F8',
      'white': '#ffffff',
      'black': '#000',
      'bg-dark':'#171139',
      'bg-dark-grey':'#EEEBFF99',
      'bg-light-grey':'#EEEBFF',
      'dark-text':'#1C3554',
      'dark-blue-text':'#1C3554',
      'light-blue':'#4586D6',
      'orange':'#F08200',
      'green': '#008847'
    },
  },
  plugins: [require("daisyui")],
}
  