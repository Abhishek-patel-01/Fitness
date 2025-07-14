/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF2625",
        secondary: "#FF6551",
        dark: "#1A1A1A",
        light: "#F5F5F5",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        title: ["Montserrat", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
