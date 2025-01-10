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
        // make sure output to final dist/ after build
        about: resolve(__dirname, "/pages/about.html"),
        demo: resolve(__dirname, "/pages/demo/index.html"),
        tsGreeter: resolve(__dirname, "/pages/ts-greeter/greeter.html"),
        customComponent: resolve(
          __dirname,
          "/pages/custom-component/index.html"
        ),
      },
    },
  },
  // https://vite.dev/config/server-options.html
  server: {
    open: true,
  },
});
