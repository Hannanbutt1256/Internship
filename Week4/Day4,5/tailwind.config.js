// tailwind.config.js
module.exports = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust according to your project's file structure
  ],
  theme: {
    extend: {
      colors: {
        // Background color
        lightGray: "#F9F9F9",
        lightBeige: "#FAFAFA",

        // Text contrast color
        charcoal: "#333333",

        // Accent colors
        softBlue: "#4A90E2",
        warmOrange: "#FF6F61",
        mintGreen: "#2ECC71",
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"], // Set Montserrat as the default sans font
      },
    },
  },
  plugins: [],
};
