/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      'sm': '0px',
      'md': '620px',
      'lg': '1000px',
      'xl':'1280px',
      '2xl':'1920px',
    }
  },
  plugins: [],
}

