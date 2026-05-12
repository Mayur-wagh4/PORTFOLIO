/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#334155",
        tertiary: "#f7fbff",
        "black-100": "#0f172a",
        "black-200": "#020617",
        "white-100": "#ffffff",
      },
      boxShadow: {
        card: "0px 35px 120px -15px rgba(14, 165, 233, 0.20)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};