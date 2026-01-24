/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add your DevUP Brand Colors here!
        'dev-blue': '#043694',
        'dev-green': '#59B948',
      },
    },
  },
  plugins: [],
}