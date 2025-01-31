import { defineConfig } from "vite";
// import { resolve } from "path";

export default defineConfig({
  // https://vite.dev/config/shared-options.html#apptype
  clearScreen: false,
  appType: "spa",
  // https://vite.dev/config/build-options.html
  build: {
    assetsDir: "assets",
    // https://rollupjs.org/configuration-options/
    rollupOptions: {
      // input: {
      //   index: resolve(__dirname, "index.html"),
      //   about: resolve(__dirname, "about.html"),
      //   demo: resolve(__dirname, "demo/index.html"),
      // },
    },
  },
  // https://vite.dev/config/server-options.html
  server: {
    open: true,
  },
});
