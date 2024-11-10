/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        r: '#ff0000',
        y: '#ffa000',
        g: '#00b000',
        b: '#0055ff',
        p: '#9000ff',
      }
    }
  },
  plugins: [],
}

