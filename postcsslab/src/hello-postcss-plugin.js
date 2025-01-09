// src/plugins/hello-postcss-plugin.mjs

/**
 * 这是一个最简单的 PostCSS 插件，演示如何使用 PostCSS 插件 API。
 */
export default function helloPostCSSPlugin(options = {}) {
  console.log("Hello from PostCSS Plugin!");

  return {
    postcssPlugin: "hello-postcss-plugin",
    Once(css) {
      // 遍历 CSS 的所有规则
      css.walkRules((rule) => {
        // 对每个选择器都加上一个注释
        rule.prepend({
          text: "/* Hello, PostCSS Plugin! */",
        });
      });
    },
  };
}

// 为了让 PostCSS 识别它是一个插件，添加该属性
helloPostCSSPlugin.postcss = true;

export { helloPostCSSPlugin };
