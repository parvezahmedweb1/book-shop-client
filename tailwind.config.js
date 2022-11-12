/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1.5rem",
        lg: "3rem",
      },
    },
    extend: {
      backgroundColor: {
        btnBg: "#66C5CC",
      },
      colors: {
        main: "hsl(240, 100%, 6%)",
        secondary: "#66C5CC",
      },
    },
  },
  plugins: [],
};
