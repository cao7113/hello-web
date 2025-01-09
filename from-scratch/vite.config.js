import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  // https://vite.dev/config/shared-options.html#apptype
  clearScreen: false,
  appType: "spa",
  // https://vite.dev/config/build-options.html
  build: {
    assetsDir: "assets",
    // https://rollupjs.org/configuration-options/
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        subDemo: resolve(__dirname, "sub-demo/index.html"),
        customComponent: resolve(__dirname, "custom-component/index.html"),
      },
    },
  },
  // https://vite.dev/config/server-options.html
  server: {
    open: true,
  },
});
