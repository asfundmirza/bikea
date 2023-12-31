/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        customGreen: "#B6F2CA",
        buttonGreen: "#6BDC92",
      },
      fontFamily: {
        'heading' : " Bebas Neue ",
        'body' : " Montserrat  "
      }
    },
  },
  plugins: [],
};
