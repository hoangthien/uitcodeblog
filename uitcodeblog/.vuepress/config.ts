import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  dest: "docs",
  locales: {
    "/": {
      lang: "vi-VN",
      title: "UITCODE",
      description: "vuepress-theme-hope",
    },
    "/en/": {
      lang: "en-US",
      title: "UITCODE",
      description: "vuepress-theme-hope",
    },
  },

  theme,
});
