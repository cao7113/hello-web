// vite auto load postcss config if postcss.config.js file exists through postcss-load-config
// https://vite.dev/guide/features.html#postcss
// https://github.com/postcss/postcss-load-config
// https://github.com/postcss/postcss-load-config?tab=readme-ov-file#ordering
// https://github.com/postcss/postcss?tab=readme-ov-file#usage

// import helloPostCSSPlugin from "./src/hello-postcss-plugin.js";

export default {
  // object plugin, each key represents a plugin
  plugins: {
    // empty {} will use default config, set false to disabled
    // ref https://github.com/postcss/autoprefixer?tab=readme-ov-file#options
    autoprefixer: {
      // https://github.com/postcss/autoprefixer
      // https://autoprefixer.github.io/
      // https://caniuse.com/
      // depends on https://github.com/browserslist/browserslist and configured in `browserslist` file
      // https://github.com/postcss/autoprefixer?tab=readme-ov-file#browsers
    },

    // TODO: Why not works here???
    // helloPostCSSPlugin: {},
  },
};
