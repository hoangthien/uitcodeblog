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
          { text: "Drupal 8", icon: "edit", link: "drupal-8" },
          { text: "Drupal 9", icon: "edit", link: "drupal-9" },
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
