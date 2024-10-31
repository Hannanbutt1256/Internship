/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "google-sans": ['"Google Sans"', "sans-serif"],
      },
      colors: {
        "custom-red": "#e31837",
        "custom-blue": "#006491",
        "custom-light-cream": "#FEF5E7",
        "custom-rich-red": "#C0392B",
        "custom-grey": "#2C3E50",
        "custom-yellow": "#F39C12",
        "custom-white": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
