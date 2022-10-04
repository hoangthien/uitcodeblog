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
          { text: "Site Builder", icon: "article", link: "site-builder" },
          { text: "Theme Development", icon: "decorate", link: "theme-development" },
          { text: "Module Development", icon: "software", link: "module-development"},
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
  { text: "About me", icon: "creative", link: "/en/about-me.html" },
  { text: "Contact", icon: "creative", link: "/en/contact.html" },
]);
