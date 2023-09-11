/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.2)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.8)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1.1)",
          },
        },
      },
      colors: {
        primary: "white",
        secondary: "#0a0a0a",
        tertiary: "#505050",
        fourth: "#bfbfbf",
        footer: "#ECECEC",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        landingBG: "#212d53",
        bottomCloud: "#689cc5",
        topHex: "#283b74",
        bottomHex: "#3e4f63",
        topOcean: "#283b74",
        bottomOcean: "#1c4b5b",
        oceanL: "#101085",
        oceanR: "#bf00bf",
        card: "#151b22",
        cardBorder: "#262b32",
        cardTitle: "#ffffff",
        cardBody: "#646b73",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        monoton: ["Monoton", "cursive"],
        sketch: ["Cabin Sketch", "cursive"],
        great: ["Fredericka the Great", "cursive"],

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
  variants: {
    extend: {},
  },
  plugins: [],
};
