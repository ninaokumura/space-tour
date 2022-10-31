/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { dark: "#0B0D17", lilac: "#D0D6F9", light: "#FFFFFF" },
      fontFamily: {
        bellefair: "'Bellefair', serif",
        barlow: "'Barlow Condensed', sans-serif",
      },
      backgroundImage: {
        "home-mobile": "url('/assets/home/background-home-mobile.jpg')",
        "home-mobile": "url('/assets/home/background-home-tablet.jpg')",
        "home-desktop": "url('/assets/home/background-home-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
