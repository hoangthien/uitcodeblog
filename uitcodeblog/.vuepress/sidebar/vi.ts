import { sidebar } from "vuepress-theme-hope";

export const viSidebar = sidebar({
  "/": [
    "",
    // {
    //   icon: "creative",
    //   text: "Guide",
    //   prefix: "guide/",
    //   link: "guide/",
    //   children: "structure",
    // },
    {
      text: "Lập trình web",
      icon: "note",
      prefix: "blog/",
      children: "structure",
      // children: [
      //   {
      //     text: "Drupal Development",
      //     icon: "note",
      //     collapsable: true,
      //     children: [
      //       "services-and-dependency-injection",
      //       "dependency-injection-in-controller"
      //     ],
      //   },
      // ],
    },
  ],
});
