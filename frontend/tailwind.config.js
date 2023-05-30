/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
        sansPro: ["Source Sans Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
