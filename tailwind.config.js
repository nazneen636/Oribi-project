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
     'one': 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    },
    extend: {},
  },
  plugins: [],
}