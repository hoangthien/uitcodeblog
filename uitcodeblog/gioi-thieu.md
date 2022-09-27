---
home: true
icon: home
title: Giới thiệu
# heroImage: /logo.svg
heroText: Giới thiệu
tagline: A vuepress theme with tons of features✨
actions:
  - text: Get Started 💡
    link: /guide/
    type: primary

  - text: Config 🛠
    link: /config/

  - text: Online Demo 🪀
    link: https://stackblitz.com/fork/vuepress-theme-hope

features:
  - title: Slide page
    icon: slides
    details: Adding slide pages to display things you like
    link: /guide/layout/slides

  - title: Layout enhancement
    icon: layout
    details: Adding breadcrumb, footer, improved navbar, improved page nav and etc.
    link: /guide/layout/

  - title: Pageviews and comments
    icon: comment
    details: Start pageview statistics and comment support with Waline
    link: /guide/feature/comment.html

---

## 🛠Install

Create a vuepress-theme-hope project in `[dir]` directory under the current project:

::: code-tabs#shell

@tab pnpm

```bash
pnpm create vuepress-theme-hope@next [dir]
```

@tab npm

```bash
npm init vuepress-theme-hope@next [dir]
```

:::

## 🚀Usage

::: code-tabs#language

@tab TS

```ts
// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  theme: hopeTheme({
    // your theme config here
  }),
});
```

@tab JS

```js
// .vuepress/config.js
import { hopeTheme } from "vuepress-theme-hope";

export default {
  theme: hopeTheme({
    // your theme config here
  }),
};
```