/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        Orange: 'hsl(26, 100%, 55%)',
        Pale_orange: 'hsl(25, 100%, 94%)',
        Very_dark_blue: 'hsl(220, 13%, 13%)',
        Dark_grayish_blue: 'hsl(219, 9%, 45%)',
        Grayish_blue: 'hsl(220, 14%, 75%)',
        Light_grayish_blue: 'hsl(223, 64%, 98%)',
        border: 'hsl(219, 35%, 92%)',
        White: 'hsl(0, 0%, 100%)',
        Black: 'hsl(0, 0%, 0%)'
      },
      fontFamily: {
        Kumbh_Sans: ["Kumbh Sans", "sans-serif"],
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