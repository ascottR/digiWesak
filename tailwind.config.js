/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "charcoal-blue": "#2d3561",
        "fuzzy-wuzzy": "#c05c7e",
        "coral-pink": "#f3826f",
        "mellow-apricot": "#ffb961",
        teal: "#008080",
        coral: "#FF7F50",
        yellrange: "#ffd73e33", // Note: This color includes transparency
      },
    },
  },
  plugins: [],
};
