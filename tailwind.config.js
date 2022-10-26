/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { dark: "#0B0D17", lilac: "#D0D6F9", light: "#FFFFFF" },
      fontFamily: {
        bellefair: "'Bellefair', serif",
        barlow: "'Barlow Condensed', sans-serif",
      },
    },
  },
  plugins: [],
};
