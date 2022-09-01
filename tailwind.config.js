/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#08979C",
        "blur-color": "rgb(255,255,255,0.4)",
      },
      transitionDelay: {
        2000: "2000ms",
      },
    },
  },
  plugins: [],
};
