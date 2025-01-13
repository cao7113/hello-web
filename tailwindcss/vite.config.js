import { defineConfig } from "vite";
import { resolve } from "path";
import * as glob from "glob";

export default defineConfig({
  // https://vite.dev/config/shared-options.html#apptype
  clearScreen: false,
  appType: "mpa",
  // https://vite.dev/config/build-options.html
  build: {
    assetsDir: "assets",
    // https://rollupjs.org/configuration-options/
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        ...Object.fromEntries(
          glob
            .sync("pages/**/*.html")
            .map((file) => [
              file.replace(/^pages\//, "").replace(/\.html$/, ""),
              resolve(__dirname, file),
            ])
        ),
      },
    },
  },
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
});
