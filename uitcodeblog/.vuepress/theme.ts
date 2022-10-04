import { hopeTheme } from "vuepress-theme-hope";
import * as navbar from "./navbar/index.js";
import * as sidebar from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://uitcode.com",
  author: {
    name: "Mr. Hoang Xuan Thien",
    url: "https://www.youtube.com/c/HoangThienUITCODE",
  },
  iconAssets: "iconfont",
  logo: "/logo.png",
  repo: "https://github.com/hoangthien/uitcodeblog",
  docsDir: "demo/src",
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],
  blog: {
    medias: {
      Email: "hoangthien.uit@gmail.com",
      Youtube: "https://www.youtube.com/c/HoangThienUITCODE",
    },
  },
  locales: {
    "/": {
      navbar: navbar.vi,
      sidebar: sidebar.vi,
      footer: "UITCODE - Share to be shared",
      displayFooter: true,
      blog: {
        description: "Drupal Developer",
        intro: "/cv.html",
      },
    },
    "/en/": {
      navbar: navbar.en,
      sidebar: sidebar.en,
      footer: "UITCODE - Share to be shared",
      displayFooter: true,
      blog: {
        description: "Drupal Developer",
        intro: "/cv.html",
      },
    },
  },
  encrypt: {
    config: {
      "/cv.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imageSize: true,
      include: true,
      lazyLoad: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommanded",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommanded",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tex: true,
      vpre: true,
      vuePlayground: true,
    },
  },
});
