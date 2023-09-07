/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        customGreen: "#B6F2CA",
        buttonGreen: "#6BDC92",
      },
    },
  },
  plugins: [],
};
