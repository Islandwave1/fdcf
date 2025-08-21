
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        iwBlue: "#0077B6",
        iwTeal: "#00A86B",
        iwNavy: "#0B1020"
      },
      boxShadow: {
        glass: "0 8px 30px rgba(0,0,0,0.2)"
      }
    },
  },
  plugins: [],
}
