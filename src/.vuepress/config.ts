import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  dest: "docs",
  locales: {
    "/": {
      lang: "vi-VN",
      title: "UITCODE",
      description: "Share to be shared",
    },
    // "/en/": {
    //   lang: "en-US",
    //   title: "UITCODE",
    //   description: "Share to be shared",
    // },
  },

  theme,

  // Enable it with pwa
  shouldPrefetch: false,
});
