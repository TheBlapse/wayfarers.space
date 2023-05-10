/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        head: ["var(--font-cormorant)"],
        serif: ["var(--font-ibarra-real-nova)"],
      },
      // listStyleImage: {
      //   dash: 'url("/images/dash.svg")',
      // },
    },
  },
  plugins: [],
};
