/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        nav: "#E4E2DD",
        brown: "#DDBB99",
        a_w: "#FFE4C4"
      }
    },
  },
  plugins: [],
}

