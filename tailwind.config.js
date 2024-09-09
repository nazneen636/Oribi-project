/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      dmSans:["DM Sans", 'sans-serif']
    },
    boxShadow: {
      'xl': '0 4px 4px rgba(0, 0, 0, 0.5)',
    },
    extend: {},
  },
  plugins: [],
}