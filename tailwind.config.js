const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        pignus: {
          100: "#e6f8d5",
          200: "#c9ef9b",
          300: "#abe762",
          400: "#8dde28",
          500: "#7eca27",
          600: "#70b222",
          700: "#629a1c",
          800: "#548116",
          900: "#46690f",
        },
      },
      pignusBlue: {
        100: "#e0eaf6",
        200: "#b3cbe8",
        300: "#80aad9",
        400: "#4b8acb",
        500: "#2e6db2",
        600: "#254d8a",
        700: "#1c3663",
        800: "#13213c",
        900: "#0a0d15",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
