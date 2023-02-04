import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, viNavbar } from "./navbar/index.js";
import { enSidebar, viSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://uitcode.com",
  author: {
    name: "Mr. Hoang Thien",
    url: "https://www.youtube.com/c/HoangThienUITCODE",
  },
  iconAssets: "iconfont",
  logo: "/logo.png",
  repo: "https://github.com/hoangthien/uitcodeblog",
  docsDir: "uitcodeblog",
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],
  blog: {
    medias: {
      Email: "hoangthien.uit@gmail.com",
      Youtube: "https://www.youtube.com/c/HoangThienUITCODE",
    },
  },
  locales: {
    "/": {
      navbar: viNavbar,
      sidebar: viSidebar,
      footer: "UITCODE - Share to be shared",
      displayFooter: true,
      blog: {
        description: "Drupal Developer",
        intro: "/cv.html",
      },
    },
    "/en/": {
      navbar: enNavbar,
      sidebar: enSidebar,
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
      excerptLength: 200,
    },
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
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
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
  },
});
