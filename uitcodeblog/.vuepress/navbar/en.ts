import { navbar } from "vuepress-theme-hope";

export const en = navbar([
  "/en/",
  {
    text: "Blog",
    icon: "edit",
    prefix: "/en/category/",
    children: [
      {
        text: "Drupal Development",
        children: [
          { text: "Theme", icon: "edit", link: "theme" },
          { text: "Module", icon: "edit", link: "module" },
        ],
      },
      {
        text: "Twig",
        children: [
          { text: "Twig", icon: "edit", link: "Twig" },
        ],
      },
    ],
  },
  { text: "About me", icon: "creative", link: "/en/about-me" },
  { text: "Contact", icon: "creative", link: "/en/contact" },
]);
