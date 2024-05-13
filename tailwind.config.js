/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        pacifico: 'Pacifico',
        pop: 'Mochiy Pop P One'
      }
    },
  },
  plugins: [],
}