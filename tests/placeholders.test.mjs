import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import test from "node:test";

const lessonDirectory = new URL("../src/content/lessons/", import.meta.url);
const requestFile = new URL("../docs/SCREENSHOT_REQUESTS.md", import.meta.url);
const requiredProps = [
  "filename",
  "title",
  "description",
  "requiredState",
  "capture",
  "crop",
  "exclude",
  "altDraft",
  "priority"
];

test("全Placeholderに必須項目があり、依頼一覧とファイル名が一致する", async () => {
  const lessonNames = (await readdir(lessonDirectory)).filter((name) => name.endsWith(".mdx"));
  const source = (
    await Promise.all(lessonNames.map((name) => readFile(new URL(name, lessonDirectory), "utf8")))
  ).join("\n");
  const blocks = [...source.matchAll(/<ScreenshotPlaceholder[\s\S]*?\/>/g)].map(
    (match) => match[0]
  );
  assert.equal(blocks.length, 9);

  const placeholderNames = [];
  for (const block of blocks) {
    for (const prop of requiredProps) {
      assert.match(block, new RegExp(`\\b${prop}=`), `Placeholderに${prop}がありません`);
    }
    const filename = block.match(/\bfilename="([^"]+)"/)?.[1];
    assert.ok(filename, "Placeholderのfilenameを取得できません");
    placeholderNames.push(filename);
  }

  const requestSource = await readFile(requestFile, "utf8");
  const requestNames = [...requestSource.matchAll(/^## (lesson-[^\s]+\.png)$/gm)].map(
    (match) => match[1]
  );

  assert.deepEqual([...placeholderNames].sort(), [...requestNames].sort());
  assert.equal(new Set(placeholderNames).size, placeholderNames.length);
  assert.match(requestSource, /依頼総数: 9/);
  assert.match(requestSource, /必須: 9/);
});
