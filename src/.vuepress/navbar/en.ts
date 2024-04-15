import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  {
    text: "Blog",
    icon: "edit",
    prefix: "/en/category/",
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
          { text: "Twig", icon: "edit", link: "Twig" },
        ],
      },
    ],
  },
  { text: "About me", icon: "circle-info", link: "/en/about-me.html" },
  { text: "Contact", icon: "address-book", link: "/en/contact.html" },
]);
