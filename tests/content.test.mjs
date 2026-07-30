import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import test from "node:test";

const lessonDirectory = new URL("../src/content/lessons/", import.meta.url);
const exemplarSections = [
  "## 今回の場面",
  "## 今回できるようになること",
  "## まず簡単に説明",
  "## もう少し正確に",
  "## 操作前",
  "## 一緒に操作",
  "## 操作直後の確認",
  "## 初心者が迷いやすいポイント",
  "## 自分でやってみる",
  "## 確認問題",
  "## 対応するGitコマンド",
  "## できるようになったこと",
  "## 次のレッスンへ"
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
    assert.match(source, /^duration:\s*".+"/m);
    assert.match(source, /^prerequisite:\s*".+"/m);
    assert.match(source, /^interfaces:\s*$/m);
    assert.match(source, /^commandOptional:\s*true$/m);
    assert.match(source, /^draft:\s*false$/m);
  }
});

test("Lesson 0から2は実践教材の標準構成を満たす", async () => {
  const lessons = (await lessonSources()).slice(0, 3);
  for (const { name, source } of lessons) {
    for (const section of exemplarSections) {
      assert.ok(source.includes(section), `${name} に ${section} がありません`);
    }
    assert.ok(source.includes("<CheckList"), `${name} に操作直後の確認がありません`);
    assert.ok(source.includes("<QuestionList"), `${name} に迷いやすいポイントがありません`);
    assert.ok(source.includes("<PracticeTask"), `${name} に自習課題がありません`);
    assert.ok(source.includes("<CommandGuide"), `${name} に任意コマンド解説がありません`);
    assert.equal((source.match(/<Quiz/g) ?? []).length, 3, `${name} の確認問題は3問必要です`);
    for (const kind of ['kind="用語"', 'kind="状態判断"', 'kind="次の操作"']) {
      assert.ok(source.includes(kind), `${name} に ${kind} の問題がありません`);
    }
  }
});

test("各Lessonに状態図、確認問題、コマンド補足がある", async () => {
  const lessons = await lessonSources();
  for (const { name, source } of lessons) {
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
