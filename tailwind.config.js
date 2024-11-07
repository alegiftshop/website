/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      white: '#ffffff',
      red: '#ff0000',
      yellow: '#ffa000',
      green: '#00b000',
      blue: '#0055ff',
      purple: '#9000ff',
      black: '#000000'
    }
  },
  plugins: [],
}

