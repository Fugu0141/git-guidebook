import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://fugu0141.github.io",
  base: "/git-guidebook",
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: true
    }
  },
  vite: {
    build: {
      sourcemap: false
    }
  }
});
