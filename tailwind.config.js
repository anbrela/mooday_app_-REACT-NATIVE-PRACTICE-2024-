/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors")


module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./hooks/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      ...colors,
      primary: "#7138f5",
      secondary: "#f5a905",
      tertiary: "#e67ea2",
    },
  },
  plugins: [],
}

