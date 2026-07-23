import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("GitHub Pagesのbase pathと必須スクリプトが設定されている", async () => {
  const astroConfig = await readFile(new URL("../astro.config.mjs", import.meta.url), "utf8");
  const packageJson = JSON.parse(
    await readFile(new URL("../package.json", import.meta.url), "utf8")
  );
  assert.match(astroConfig, /base:\s*"\/git-guidebook"/);
  for (const script of [
    "dev",
    "build",
    "preview",
    "format",
    "format:check",
    "lint",
    "typecheck",
    "test"
  ]) {
    assert.ok(packageJson.scripts[script], `${script} scriptがありません`);
  }
});

test("アクセシビリティの基本CSSを備える", async () => {
  const css = await readFile(new URL("../src/styles/global.css", import.meta.url), "utf8");
  assert.match(css, /:focus-visible/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /@media print/);
  assert.match(css, /\.visually-hidden/);
});

test("主要レイアウトにランドマークとLesson本文構造がある", async () => {
  const baseLayout = await readFile(
    new URL("../src/layouts/BaseLayout.astro", import.meta.url),
    "utf8"
  );
  const lessonLayout = await readFile(
    new URL("../src/layouts/LessonLayout.astro", import.meta.url),
    "utf8"
  );
  for (const element of ["<header", "<nav", "<main", "<footer"]) {
    assert.ok(baseLayout.includes(element), `${element} ランドマークがありません`);
  }
  assert.match(baseLayout, /class="skip-link"/);
  assert.match(lessonLayout, /<article/);
  assert.match(lessonLayout, /aria-label="パンくず"/);
  assert.match(lessonLayout, /role="progressbar"/);
});

test("Pages workflowはmainへのpushと手動実行に対応する", async () => {
  const workflow = await readFile(
    new URL("../.github/workflows/deploy-pages.yml", import.meta.url),
    "utf8"
  );
  assert.match(workflow, /branches: \[main\]/);
  assert.match(workflow, /workflow_dispatch:/);
  assert.match(workflow, /actions\/deploy-pages@v4/);
});
