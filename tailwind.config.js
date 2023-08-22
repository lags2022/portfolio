/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        darkblue: "#479aff",
        light: "#f5f5f5",
        lightblue: "#3178c6",
        darkhover:"#2f538e",
        primary: "#B63E96",
        primaryDark: "#58E6D9",
      },
      screens: {
        xs: "475px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
