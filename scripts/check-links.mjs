import { readdir, readFile, stat } from "node:fs/promises";
import { extname, join, relative, resolve } from "node:path";

const root = resolve("dist");
const base = "/git-guidebook/";
const failures = [];

async function walk(directory) {
  const entries = await readdir(directory);
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry);
    const info = await stat(path);
    if (info.isDirectory()) files.push(...(await walk(path)));
    else files.push(path);
  }
  return files;
}

const files = await walk(root);
const htmlFiles = files.filter((file) => extname(file) === ".html");

for (const htmlFile of htmlFiles) {
  const html = await readFile(htmlFile, "utf8");
  const matches = html.matchAll(/\b(?:href|src)="([^"]+)"/g);

  for (const [, rawTarget] of matches) {
    if (/^(?:https?:|mailto:|tel:|data:|#)/.test(rawTarget)) continue;
    const target = rawTarget.split(/[?#]/)[0];

    if (target.startsWith("/") && !target.startsWith(base)) {
      failures.push(`${relative(root, htmlFile)}: base path外のURL ${rawTarget}`);
      continue;
    }

    let localTarget;
    if (target.startsWith(base)) {
      localTarget = target.slice(base.length);
    } else if (target.startsWith("/")) {
      localTarget = target.slice(1);
    } else {
      localTarget = join(relative(root, resolve(htmlFile, "..")), target);
    }

    const candidates = localTarget.endsWith("/")
      ? [join(root, localTarget, "index.html")]
      : [join(root, localTarget), join(root, localTarget, "index.html")];

    let exists = false;
    for (const candidate of candidates) {
      try {
        await stat(candidate);
        exists = true;
        break;
      } catch {
        // Try the next valid static-output shape.
      }
    }
    if (!exists) failures.push(`${relative(root, htmlFile)}: リンク先なし ${rawTarget}`);
  }
}

if (htmlFiles.length !== 15) {
  failures.push(`HTMLは15ページ必要ですが、${htmlFiles.length}ページでした`);
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

process.stdout.write(
  `${htmlFiles.length}ページの内部リンクとアセットを ${base} 配下として確認しました。\n`
);
