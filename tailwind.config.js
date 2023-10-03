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
      colors: {
        // dark mode
        darkdark: "#0A0A0A",
        darklight: "#F2F2F2",
        darkheading: "#E6E6E6",
        darkheading2: "#BFBFBF",
        darktext: "#8C8C8C",
        darkhighlight: "#191919",
        // light mode
        lightdark: "#121212",
        lightlight: "#EDEDED",
        lightheading: "#EDEDED",
        lighttext: "#333333",
        lightheading: "#CCCCCC",
      },
      fontFamily: {
        head: ["var(--font-cardo)"],
        serif: ["var(--font-bellefair)"],
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
