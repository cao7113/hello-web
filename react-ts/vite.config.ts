import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // https://vite.dev/config/shared-options.html#apptype
  clearScreen: false,
  // https://vite.dev/config/server-options.html
  server: {
    open: true,
    // // https://vite.dev/config/server-options.html#server-watch
    // watch: {
    //   ignored: [
    //     "_up/**", // Ignore all files in the "_up" directory
    //     "dist/**", // Ignore all files in the "dist" directory
    //   ],
    // },
  },
  plugins: [react()],
});
