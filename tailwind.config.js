const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-light": "#f89f1e",
        "primary-dark": "#e2711d",
      },
      fontFamily: {
        acumin: ["'Acumin'", ...defaultTheme.fontFamily.sans],
        "billion-dreams": ["'Billion Dreams'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
