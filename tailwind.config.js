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
        darkbg: "#0A0A0A",
        darktitle: "#F2F2F2",
        darkheading: "#BFBFBF",
        darktext: "#8C8C8C",
        darkhighlight: "#191919",
        // light mode
        lightbg: "#EDEDED",
        lighttitle: "#0D0D0D",
        lightheading: "#404040",
        lighttext: "#5E5E5E",
        lighthighlight: "#D9D9D9",
      },
      fontFamily: {
        head: ["var(--font-cardo)"],
        serif: ["var(--font-bellefair)"],
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
