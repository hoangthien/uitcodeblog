import { navbar } from "vuepress-theme-hope";

export const viNavbar = navbar([
  "/",
  {
    text: "Blog",
    icon: "edit",
    prefix: "/category/",
    children: [
      {
        text: "Drupal Development",
        children: [
          { text: "Site Builder", icon: "article", link: "site-builder" },
          { text: "Theme Development", icon: "decorate", link: "theme-development" },
          { text: "Module Development", icon: "software", link: "module-development"},
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
