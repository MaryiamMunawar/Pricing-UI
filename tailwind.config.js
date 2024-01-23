/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      inter:["inter", "sans-serif"],
      
    },
    extend: {
      colors:{
        listColor:  "#2D3748",
      }
    },
  },
  plugins: [],
}

