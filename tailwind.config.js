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
        pignusBlue: {
          100: "#d5e0f8",
          200: "#9bbdf0",
          300: "#6289e7",
          400: "#2857de",
          500: "#0a2e59",
          600: "#092854",
          700: "#08224f",
          800: "#071b3a",
          900: "#060e23",
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};
