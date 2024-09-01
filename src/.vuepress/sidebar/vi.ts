import { sidebar } from "vuepress-theme-hope";

export const viSidebar = sidebar({
  "/": [
    "",
    {
      text: "Site Builder",
      icon: "gear",
      prefix: "drupal/site-builder",
      collapsible: true,
      children: [
        { text: "1. Sử dụng view", link: "su-dung-view.md"},
      ]
    },
    {
      text: "Theming",
      icon: "wand-magic-sparkles",
      prefix: "drupal/theming",
      collapsible: true,
      children: [
        { text: "1. Template twig", link: "template-twig.md"},
      ]
    },
    {
      text: "Module Development",
      icon: "cubes",
      prefix: "drupal/module-development",
      collapsible: true,
      children: [
        { text: "1. Khởi tạo module", link: "khoi-tao-module.md"},
        { text: "2. Form API và cách sử dụng", link: "form-api-va-cach-su-dung.md"},
        { text: "3. Form validate", link: "form-validate.md"},
      ]
    },
  ],
});
