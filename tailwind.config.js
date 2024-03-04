/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem"  ,
      marginTop: "2rem" ,
     
    },
  extend: {
    colors: {
      "btn": "var(--button-span)",
      "text": "#ffff",
      "  bg-shoe": "#f1f1f1",
    }
  },
  },
  plugins: [],
}

