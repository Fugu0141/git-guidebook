# Codex MVP実装レポート

## 結果

2026-07-23に、Git GuidebookのMVP実装を `codex/build-mvp` Branchへ完成させました。AstroでLesson 0〜11を静的生成し、GitHub Pagesのproject path `/git-guidebook/` に対応しています。

実装と自動検証の完了ゲートは通過しています。リポジトリ所有者のPages設定、初心者2人以上の利用テスト、実スクリーンショット撮影など、人間・外部権限が必要なMVP完了条件は未通過です。詳細は [`CODEX_BLOCKERS.md`](CODEX_BLOCKERS.md) にあります。

## 実装した機能

- Astro 7、TypeScript strict、MDX Content Collection
- ホーム、レッスン一覧、Lesson 0〜11、404の15ページ
- Lesson frontmatter schemaと番号順の自動ルーティング
- 前後ナビゲーション、パンくず、現在位置と進捗表示
- Tip / Point、Warning、OptionalDetails、Quiz、StateDiagram、ScreenshotPlaceholder
- 確認問題の選択後フィードバック
- localStorageだけを使う完了記録と保存失敗時のフォールバック
- 320px程度からのレスポンシブ表示、キーボードフォーカス、reduced motion、印刷CSS
- GitHub Pages base path `/git-guidebook/`
- mainへのPushと手動実行に対応するGitHub Actions Pages workflow
- 教材構成、Lesson順、Placeholder必須項目、撮影依頼同期、設定の自動テスト
- 本番成果物15ページの内部リンク・アセット検査

## Lesson 0〜11

| Lesson | 内容 | 状態 |
| ------ | ---- | ---- |
| 0 | バージョン管理が必要な理由 | 実装済み |
| 1 | Git・GitHub・GitHub Desktop | 実装済み |
| 2 | リポジトリ作成 | 実装済み |
| 3 | Clone | 実装済み |
| 4 | 変更と差分 | 実装済み |
| 5 | Commit | 実装済み |
| 6 | Push | 実装済み |
| 7 | Branch | 実装済み |
| 8 | Pull Request | 実装済み |
| 9 | Merge | 実装済み |
| 10 | Pull | 実装済み |
| 11 | 最終課題 | 実装済み |

各Lessonには、操作理由、操作前後の状態、内部で起きたこと、よくある失敗、確認問題、コマンド補足があります。CommitをGitHubへのアップロードとは説明せず、作業フォルダ、ローカルリポジトリ、リモートリポジトリを継続して区別しています。

## スクリーンショット

- Placeholder総数: 9
- 必須: 9
- 任意: 0
- 実画像へ差し替え済み: 0

全Placeholderは最終掲載位置にあり、ファイル名、タイトル、目的、必要状態、撮影操作、切り抜き範囲、除外情報、alt案、優先度を表示します。`docs/SCREENSHOT_REQUESTS.md` とファイル名が一致することを自動テストしています。

## 検証

最終実行対象:

```text
npm run format:check
npm run lint
npm run typecheck
npm test
npm run build
npm run check:links
npm audit
```

最終結果:

- formatting: 成功
- lint: 成功
- typecheck: 0 errors
- tests: 8件成功
- production build: 15ページ生成
- internal links/assets: `/git-guidebook/` 配下として成功
- npm audit: 脆弱性0件

Astro 5系で検出された高重要度の依存関係指摘を解消するため、Astro 7系と対応するMDX integrationへ更新し、再検証しました。

## GitHub Pagesの手動操作

1. Draft Pull Requestをレビューし、mainへMergeする
2. **Settings → Pages** でSourceを **GitHub Actions** にする
3. `Deploy Git Guidebook to Pages` workflowの全Jobが成功することを確認する
4. `https://fugu0141.github.io/git-guidebook/` を開く
5. Lessonの直接URLと再読み込み、存在しないURLの404を確認する
6. [`MANUAL_QA.md`](MANUAL_QA.md) の公開後確認を実施する

## 技術的負債とMVP後の推奨

- 外部Google Fontsに依存するため、必要なら日本語フォントの配信方針とライセンスを確認して自己ホストへ変更する
- 実スクリーンショット追加後にUI更新との差異を継続確認する
- 初心者テストの記録から、説明が長い箇所と迷いやすい画面を優先して改善する
- 本格的なConflict、共同開発、CLI中心の教材はMVP後の別コースに保つ
- コードと教材本文のライセンスを所有者判断で確定する

## 推奨する人間のレビュー順

1. Lesson 4〜6で作業フォルダ、Commit、Pushの区別を技術レビュー
2. Lesson 7〜10でBranch、Pull Request、Merge、Pullの順序を技術レビュー
3. Lesson 0〜3と11を初心者目線で読み、導入と最終課題のつながりを確認
4. モバイル、キーボード、確認問題、完了記録、印刷を操作確認
5. 9件の撮影要件と個人情報除外条件を確認
6. GitHub Pages設定後、公開URLとLighthouse相当項目を確認
