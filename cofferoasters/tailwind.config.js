/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        dark_cyan: "#0e8784",
        dark_gray: "#333d4b",
        dark_gray_opacity: "rgba(51, 61, 75,0.8)",
        pale_orange: "#fdd6ba",
        cream: "#fefcf7",
        cream_opacity: "rgba(255, 253, 247, 0.8)",
        light_gray: '#F4F1EB',
        gray: "#83888f",
        why: '#2c343e',
        cyan_hover: '#66d2cf',
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};