// tailwind.config.ts
import { type Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        blueCustom: "#1E3A8A",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
