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
          { text: "Site Builder", icon: "newspaper", link: "site-builder" },
          { text: "Theme Development", icon: "palette", link: "theme-development" },
          { text: "Module Development", icon: "cubes", link: "module-development"},
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
  { text: "Giới thiệu", icon: "circle-info", link: "/gioi-thieu.html" },
  { text: "Liên hệ", icon: "address-book", link: "/lien-he.html" },
]);
