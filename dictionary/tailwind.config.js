/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        black_100: "#050505",
        black_200: '#1f1f1f',
        black_300: "#2d2d2d",
        black_400: "#3a3a3a",
        gray_100: "#757575",
        gray_200: "#393939",
        gray_300: "#f4f4f4",
        white: "#ffffff",
        violet: "#a445ed",
        red: "#ff5252",
        

      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        roboto_mono: ["Roboto Mono", "monospace"],
        roboto_serif: ["Roboto Serif", "serif"],
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