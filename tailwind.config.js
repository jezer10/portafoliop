const defaultTheme = require("tailwindcss/defaultTheme")
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        acumin: ["'Acumin'", ...defaultTheme.fontFamily.sans],
        'billion-dreams': ["'Billion Dreams'", ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}