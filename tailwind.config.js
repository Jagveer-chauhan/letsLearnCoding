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
      },
    },
    colors:{
      'bg-blue':'#5035F1',
      'dark-blue':'#0C0E2B',
      'btn-bg':'#5035F1',
      'blue-text':'#5863F8',
      'white': '#fff',
      'black': '#000',
    },
  },
  plugins: [require("daisyui")],
}
  