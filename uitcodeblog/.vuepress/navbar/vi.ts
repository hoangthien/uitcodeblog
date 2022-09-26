import { navbar } from "vuepress-theme-hope";

export const vi = navbar([
  "/",
  {
    text: "Blog",
    icon: "edit",
    prefix: "/category/",
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
          { text: "Twig", icon: "edit", link: "twig" },
        ],
      },
    ],
  },
  { text: "Giới thiệu", icon: "creative", link: "/gioi-thieu" },
  { text: "Liên hệ", icon: "creative", link: "/lien-he" },
]);
