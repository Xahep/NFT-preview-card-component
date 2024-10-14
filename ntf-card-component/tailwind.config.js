/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: 'hsl(217, 54%, 11%)',
        card: 'hsl(216, 50%, 16%)',
        gray: 'hsl(215, 51%, 70%)',
        cyan: 'hsl(178, 100%, 50%)',
        line: 'hsl(215, 32%, 27%)',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
