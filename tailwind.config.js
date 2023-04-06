/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "creamy-white": "#FFFDE4",
      },
    },
  },
  plugins: [],
};
