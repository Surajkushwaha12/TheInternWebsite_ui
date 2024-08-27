/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutralSilver: "#F5F7FA",
        neutralDGrey: "#4D4D4D",
        brandPrimary: "#4CAF4F",
        neutralGrey: "#717171",
        gray900: "#18191F",
        gold: "#D4AF37",
        darkGold: "#BFA55B",
        cream: "#fefaf1",
      },

    },
  },
  plugins: [],
}