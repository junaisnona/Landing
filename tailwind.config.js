/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '250px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        "primary-color": "#08979C",
        "blur-color": "rgb(255,255,255,0.4)",
        "black-opacity": "rgba(0, 0, 0, 0.5)",
        "swiper-bg-color": "#DFEFE7"
      },
      transitionDelay: {
        '2000': "2000ms",
      },
    },
  },
  plugins: [],
};
