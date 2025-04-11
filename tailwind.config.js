/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
      },
      colors: {
        navbarscolor:"#151515",
        templatebg:"#E3E3E3",
        templatelistbg:"#FAFAFA",
        templateItembg:"#F2F2F2",
        searchColor:"#737373"
      },
    },
  },
  plugins: [],
};
