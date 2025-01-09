import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./pages/**/*.html", "./src/**/*.{js,ts}"],
  // content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: {
      colors: {
        // orange-like from phoenix default
        // brand: "#FD4F00",
        // Indigo 300 from https://tailwindcss.com/docs/customizing-colors
        brand: "#a5b4fc",
      },
    },
  },
  plugins: [],
} satisfies Config;
