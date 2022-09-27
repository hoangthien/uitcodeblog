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
          { text: "Drupal 8", icon: "edit", link: "drupal-8" },
          { text: "Drupal 9", icon: "edit", link: "drupal-9" },
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
  { text: "Giới thiệu", icon: "creative", link: "/gioi-thieu.html" },
  { text: "Liên hệ", icon: "creative", link: "/lien-he.html" },
]);
