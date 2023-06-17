/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        white_opacity: 'rgba(255,255,255, 0.1)',
        dark: '#070724',
        gray: "#38384f",
        light_gray: "#838391",
        light_blue: "#419ebb",
        gold: '#eda249',
        violet: '#6f2ed6',
        light_orange: '#d14c32',
        red: '#d83a34',
        orange: '#cd5120',
        sea: '#1ec2a4',
        blue: '#2d68f0',
      },
      fontFamily: {
        antonio: ["Antonio", "sans-serif"],
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