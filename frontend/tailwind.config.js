/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg": "#e9d8a6",
        "primary": "#02AABD",
        "secondary": "#00CDAC",
        "gray-white": "#b2b7bb",
      }
    },
  },
  plugins: [],
}