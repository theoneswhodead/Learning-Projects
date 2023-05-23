/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        dark_cyan: "hsl(180, 29%, 50%)",
        background: 'hsl(180, 52%, 96%)',
        tables: "hsl(180, 31%, 95%)",
        grayish_cyan: "hsl(180, 8%, 52%)",
        dark_grayish_cyan: "hsl(180, 14%, 20%)",
      },
      fontFamily: {
        spartan: ["League Spartan", "sans-serif"],
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