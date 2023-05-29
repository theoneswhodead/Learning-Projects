/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        cyan: "hsl(180, 66%, 49%)",
        cyan_hover: "#9BE3E2",
        violet: 'hsl(257, 27%, 26%)',
        red: "hsl(0, 87%, 67%)",
        gray: "hsl(0, 0%, 75%)",
        grayish_violet: 'hsl(257, 7%, 63%)',
        dark_blue: 'hsl(255, 11%, 22%)',
        dark_violet: 'hsl(260, 8%, 14%)',
        background: '#F0F1F6',
        footer: '#232027',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
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