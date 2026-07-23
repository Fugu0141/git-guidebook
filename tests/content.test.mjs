import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import test from "node:test";

const lessonDirectory = new URL("../src/content/lessons/", import.meta.url);
const requiredSections = [
  "## なぜ",
  "## 操作前の状態",
  "## 操作後の状態",
  "## 内部で起きたこと",
  "## よくある失敗",
  "## 対応するGitコマンド"
];

async function lessonSources() {
  const names = (await readdir(lessonDirectory)).filter((name) => name.endsWith(".mdx")).sort();
  return Promise.all(
    names.map(async (name) => ({
      name,
      source: await readFile(new URL(name, lessonDirectory), "utf8")
    }))
  );
}

test("Lesson 0から11までが連番で公開される", async () => {
  const lessons = await lessonSources();
  assert.equal(lessons.length, 12);
  const numbers = lessons.map(({ source }) => Number(source.match(/^lesson:\s*(\d+)/m)?.[1]));
  assert.deepEqual(
    numbers,
    Array.from({ length: 12 }, (_, index) => index)
  );
  for (const { source } of lessons) {
    assert.match(source, /^title:\s*".+"/m);
    assert.match(source, /^description:\s*".+"/m);
    assert.match(source, /^goals:\s*$/m);
    assert.match(source, /^draft:\s*false$/m);
  }
});

test("各Lessonに標準構成、状態図、確認問題、コマンド補足がある", async () => {
  const lessons = await lessonSources();
  for (const { name, source } of lessons) {
    for (const section of requiredSections) {
      assert.ok(source.includes(section), `${name} に ${section} がありません`);
    }
    assert.ok(source.includes("<StateDiagram"), `${name} に状態図がありません`);
    assert.ok(source.includes("<Quiz"), `${name} に確認問題がありません`);
    assert.ok(
      source.includes("```bash") || source.includes("対応する基本Gitコマンドはありません"),
      `${name} にコマンド補足がありません`
    );
  }
});

test("重要用語を区別する説明が教材内にある", async () => {
  const all = (await lessonSources()).map(({ source }) => source).join("\n");
  for (const term of ["作業フォルダ", "ローカルリポジトリ", "リモートリポジトリ"]) {
    assert.ok(all.includes(term), `${term} の説明がありません`);
  }
  assert.ok(all.includes("Commitはアップロードではありません"));
  assert.ok(all.includes("Pull Requestは提案"));
  assert.ok(all.includes("Mergeで"));
});
