/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      'sm': '0px',
      'md': '920px',
      'lg': '1280px',
      'xl':'1920px',
      '2xl':'2560px',
    }
  },
  plugins: [],
}

