/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        logo_red: "#ff0000",
        logo_yellow: "#ffa000",
        logo_green: "#00b000",
        logo_blue: "#0055ff",
        logo_purple: "#9000ff",
      },
    },
  },
  plugins: [],
};
