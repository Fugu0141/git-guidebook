# Contributing Guide

Git Guidebookへの関心ありがとうございます。

このプロジェクトでは、コードだけでなく、教材本文、図解、初心者目線でのレビュー、アクセシビリティ改善も重要なContributionです。

## 参加できる内容

- 誤字・脱字の修正
- 分かりにくい説明の報告
- GitやGitHubに関する技術的な誤りの修正
- スクリーンショットや図解の改善
- UI・レスポンシブ対応
- アクセシビリティ改善
- 確認問題や演習案
- 初心者による利用テスト

## Issueを先に作る変更

次の変更は、実装前にIssueで目的と方針を共有してください。

- 新しいレッスンやコースの追加
- カリキュラム順序の変更
- 技術構成や依存関係の変更
- デザインシステムの大幅な変更
- 学習内容の削除
- ライセンスに関わる変更

誤字修正など、影響が小さい変更は直接Pull Requestを作って構いません。

## Branch名

次の形式を推奨します。

```text
feature/lesson-navigation
fix/broken-link
content/commit-lesson
chore/update-dependencies
```

## Commitメッセージ

変更内容が分かる短いメッセージにします。

```text
feat: add lesson navigation
fix: correct push explanation
content: draft commit lesson
chore: update dependencies
```

## Pull Request

Pull Requestには次の内容を書いてください。

- 何を変更したか
- なぜ変更したか
- 学習者にどのような影響があるか
- 確認した環境や方法
- UI変更がある場合は画像

1つのPull Requestには、なるべく1つの目的だけを含めてください。

## 教材本文を変更するとき

[`docs/CONTENT_GUIDE.md`](docs/CONTENT_GUIDE.md) を確認してください。

特に次を重視します。

- 操作する理由を先に示す
- ローカルとリモートを明確に区別する
- 画面操作だけでなく、操作後に何が変わったか説明する
- 初心者向けでも技術的な誤りを入れない
- 画像だけに重要な情報を持たせない

## 開発環境

Node.js 22以上とnpmを使用します。

```bash
npm ci
npm run dev
```

Pull Requestを作る前に、次をすべて実行してください。

```bash
npm run format:check
npm run lint
npm run typecheck
npm test
npm run build
npm run check:links
npm audit
```

サイトはAstro + TypeScript + MDXで構成し、GitHub Pagesのproject path `/git-guidebook/` を前提にしています。内部リンクや公開アセットはbase pathを外さないでください。

教材へスクリーンショットを追加・差し替える場合は、[`docs/SCREENSHOT_GUIDE.md`](docs/SCREENSHOT_GUIDE.md) と [`docs/SCREENSHOT_PLACEHOLDER_SPEC.md`](docs/SCREENSHOT_PLACEHOLDER_SPEC.md) に従い、[`docs/SCREENSHOT_REQUESTS.md`](docs/SCREENSHOT_REQUESTS.md) も同じファイル名で更新してください。

## 行動上のお願い

- 質問や初心者のつまずきを軽視しない
- 人ではなく内容について議論する
- 改善案には理由を添える
- 個人情報や認証情報をIssue・Pull Requestへ投稿しない

## ライセンス

正式なライセンスが決定するまでは、Contributionの大規模な再利用条件が未確定です。ライセンス決定前に大きなContributionを行う場合は、Issueで相談してください。
