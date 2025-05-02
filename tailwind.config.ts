import { type Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  prefix: "",
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        "black-custom": "#1A1919",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
