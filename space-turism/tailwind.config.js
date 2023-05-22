/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        dark: "#0B0D17",
        dark_opacity: 'rgba(255, 255, 255, 0.04)',
        light: "#D0D6F9",
        white: "#ffffff",
        gray: "#383B4B",
        role: '#909296',
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        barlow_condensed: ["Barlow Condensed", "sans-serif"],
        bellefair: ["Bellefair", "serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1440px",
      xl: "1700px",
    },
  },
  plugins: [],
};