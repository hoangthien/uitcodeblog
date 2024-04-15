import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    "",
    // {
    //   icon: "creative",
    //   text: "Guide",
    //   prefix: "guide/",
    //   link: "guide/",
    //   children: "structure",
    // },
    {
      text: "Web Development",
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
