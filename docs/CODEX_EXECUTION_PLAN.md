# Codex Autonomous Build Plan

この文書は、CodexがGit GuidebookのMVPを段階的に実装し、検証しながら完成へ進めるための実行計画です。

## 完成の定義

次の条件をすべて満たしたとき、MVPを完成とします。

- GitHub Pages向けに本番ビルドできる
- トップページ、教材一覧、教材ページ、404ページがある
- Lesson 0〜11へ順番に移動できる
- GitHub Desktopを中心に一連のGit操作を学べる
- ローカル・リモート・作業フォルダの違いが継続して示される
- 重要操作には確認問題または演習がある
- スクリーンショット未提供箇所は、安全なプレースホルダーと依頼一覧で管理される
- モバイルとデスクトップで主要ページが利用できる
- アクセシビリティの基本要件を満たす
- lint、型検査、テスト、本番ビルドが成功する

## 自動実行ルール

Codexは、上から順に未完了の項目を実装します。各まとまりの後に検証し、失敗した場合は原因を修正してから次へ進みます。

大きな設計判断を独断で変えず、既存文書を優先してください。判断不能な内容は `docs/CODEX_BLOCKERS.md` に記録します。

## Milestone 1: プロジェクト基盤

- [ ] Astro + TypeScriptプロジェクトを初期化する
- [ ] GitHub Pagesのbase path `/git-guidebook/`を設定する
- [ ] package scriptsを整備する
  - [ ] dev
  - [ ] build
  - [ ] preview
  - [ ] format
  - [ ] format:check
  - [ ] lint
  - [ ] typecheck
  - [ ] test
- [ ] ESLintとPrettierを設定する
- [ ] `.editorconfig`を追加する
- [ ] 適切な `.gitignore` を追加する
- [ ] GitHub ActionsのPagesデプロイworkflowを追加する
- [ ] 本番ビルドを成功させる

### 受け入れ条件

- `npm ci`後に全検証コマンドを実行できる
- `npm run build`が成功する
- 生成されたリンクとアセットが `/git-guidebook/` 配下で動く

## Milestone 2: デザイン基盤

- [ ] 色、余白、文字サイズなどのCSS変数を定義する
- [ ] 共通レイアウトを作成する
- [ ] ヘッダーとフッターを作成する
- [ ] モバイルナビゲーションを作成する
- [ ] 次の共通コンポーネントを作成する
  - [ ] Tip / Point
  - [ ] Warning
  - [ ] Quiz
  - [ ] StateDiagram
  - [ ] ScreenshotPlaceholder
  - [ ] OptionalDetails
  - [ ] LessonNavigation
- [ ] とらふぐちゃんを後から追加できる構造にするが、画像自体は必須にしない
- [ ] reduced motionとkeyboard focusに対応する

### 受け入れ条件

- 主要コンポーネントがサンプルページで確認できる
- 320px程度の画面幅でも横スクロールせず読める
- キャラクター画像なしでもデザインが成立する

## Milestone 3: コンテンツモデルとルーティング

- [ ] Astro Content Collectionsまたは同等の仕組みを設定する
- [ ] レッスンのfrontmatter schemaを定義する
  - lesson number
  - title
  - description
  - learning goals
  - draft status
- [ ] 教材一覧ページを作成する
- [ ] 教材ページテンプレートを作成する
- [ ] 前後移動を自動生成する
- [ ] パンくずを実装する
- [ ] 404ページを作成する
- [ ] 内部リンク検査を用意する

## Milestone 4: MVP教材

各Lessonは `docs/CONTENT_GUIDE.md` の型を基本とします。

- [ ] Lesson 0: バージョン管理が必要な理由
- [ ] Lesson 1: Git・GitHub・GitHub Desktop
- [ ] Lesson 2: リポジトリ作成
- [ ] Lesson 3: Clone
- [ ] Lesson 4: 変更と差分
- [ ] Lesson 5: Commit
- [ ] Lesson 6: Push
- [ ] Lesson 7: Branch
- [ ] Lesson 8: Pull Request
- [ ] Lesson 9: Merge
- [ ] Lesson 10: Pull
- [ ] Lesson 11: 最終課題

### 各Lessonの受け入れ条件

- 今回やることが冒頭にある
- 操作する理由が説明される
- 操作前後の状態が分かる
- Git内部で起きたことが初心者向けに説明される
- よくある失敗が少なくとも1つある
- 確認問題または演習がある
- 対応するCLIコマンドが補足される
- 必要なスクリーンショットが未提供なら依頼一覧に追加される

## Milestone 5: 学習体験

- [ ] 現在位置と進捗を表示する
- [ ] 進捗保存はローカルストレージのみで実装可能か評価する
- [ ] 実装する場合は保存失敗でも教材が利用できるようにする
- [ ] Quizへ回答後フィードバックを表示する
- [ ] 状態図を画面サイズに合わせて表示する
- [ ] 印刷時にも本文が読めるCSSを追加する

進捗保存がMVPを不安定にする場合は延期し、理由を記録します。

## Milestone 6: 品質保証

- [ ] コンポーネントテストまたは妥当な自動テストを追加する
- [ ] Lessonのfrontmatterと順序を検証する
- [ ] 内部リンクを検証する
- [ ] 画像のalt属性を検証する
- [ ] 主要ページのHTML構造を検証する
- [ ] npm audit結果を確認し、重大な問題を解消する
- [ ] Lighthouseまたは同等の確認項目を文書化する
- [ ] 本番ビルドを再確認する

## Milestone 7: 公開準備

- [ ] READMEを実装後の構成に更新する
- [ ] ローカル開発手順を確定する
- [ ] GitHub Pages設定手順を文書化する
- [ ] スクリーンショット依頼一覧を整理する
- [ ] 残課題をIssue候補としてまとめる
- [ ] `docs/CODEX_COMPLETION_REPORT.md`を作成する

## Codex completion reportに含める内容

- 実装した機能
- 完成条件に対する結果
- 実行した検証と結果
- 未提供画像・人間による確認が必要な箇所
- 技術的負債とMVP後の推奨事項
- GitHub Pages公開に必要な手動操作

## Codexへの開始指示

Codexへは次の内容を依頼します。

> Read `AGENTS.md` and `docs/CODEX_EXECUTION_PLAN.md`, then autonomously implement the Git Guidebook MVP. Work milestone by milestone, run all checks after each coherent slice, fix failures, update the plan checkboxes, and continue until the definition of done is met or a documented stop condition applies. Do not wait for routine confirmation. Use placeholders and `docs/SCREENSHOT_REQUESTS.md` for missing screenshots. End by writing `docs/CODEX_COMPLETION_REPORT.md`.
