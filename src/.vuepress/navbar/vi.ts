import { navbar } from "vuepress-theme-hope";

export const viNavbar = navbar([
  "/",
  {
    text: "Drupal",
    icon: "drupal",
    prefix: "/drupal/",
    children: [
      { text: "Site Builder", icon: "gear", link: "site-builder/" },
      { text: "Theming", icon: "wand-magic-sparkles", link: "theming/" },
      { text: "Module Development", icon: "cubes", link: "module-development/"},
    ],
  },
  { text: "Blog", icon: "edit", link: "/blog/" },
  { text: "Giới thiệu", icon: "circle-info", link: "/gioi-thieu.html" },
  { text: "Liên hệ", icon: "address-book", link: "/lien-he.html" },
]);
