/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        very_dark_gray: "#18171f",
        dark_gray: '#24232c',
        gray: "#817092",
        light_gray: "#e6e5ea",
        neon_green: "#a4ffaf",
        red: '#f64a4a',
        orange: '#fb7c58',
        yellow: '#f8cd65',
      },
      fontFamily: {
        jetBrainsMono_Bold: ["jetBrainsMono-Bold", "sans-serif"],
        jetBrainsMono_BoldItalic: ["jetBrainsMono-BoldItalic", "sans-serif"],
        jetBrainsMono_Italic: ["jetBrainsMono-Italic", "sans-serif"],
        jetBrainsMono_Variable: ["jetBrainsMono-Variable", "sans-serif"],

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