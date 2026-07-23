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
- スクリーンショット未提供箇所には、必要情報を示す色付きの代替ブロックが正確な掲載位置にある
- 代替ブロックと `docs/SCREENSHOT_REQUESTS.md` が画像名で同期している
- モバイルとデスクトップで主要ページが利用できる
- アクセシビリティの基本要件を満たす
- lint、型検査、テスト、本番ビルドが成功する

## 自動実行ルール

Codexは、上から順に未完了の項目を実装します。各まとまりの後に検証し、失敗した場合は原因を修正してから次へ進みます。

大きな設計判断を独断で変えず、既存文書を優先してください。判断不能な内容は `docs/CODEX_BLOCKERS.md` に記録します。

スクリーンショットが未提供でも停止しません。`docs/SCREENSHOT_PLACEHOLDER_SPEC.md` に従って、最終掲載位置へ代替ブロックを置き、依頼一覧へ同じ画像名で登録します。

## Milestone 1: プロジェクト基盤

- [x] Astro + TypeScriptプロジェクトを初期化する
- [x] GitHub Pagesのbase path `/git-guidebook/`を設定する
- [x] package scriptsを整備する
  - [x] dev
  - [x] build
  - [x] preview
  - [x] format
  - [x] format:check
  - [x] lint
  - [x] typecheck
  - [x] test
- [x] ESLintとPrettierを設定する
- [x] `.editorconfig`を追加する
- [x] 適切な `.gitignore` を追加する
- [x] GitHub ActionsのPagesデプロイworkflowを追加する
- [x] 本番ビルドを成功させる

### 受け入れ条件

- `npm ci`後に全検証コマンドを実行できる
- `npm run build`が成功する
- 生成されたリンクとアセットが `/git-guidebook/` 配下で動く

## Milestone 2: デザイン基盤

- [x] 色、余白、文字サイズなどのCSS変数を定義する
- [x] 共通レイアウトを作成する
- [x] ヘッダーとフッターを作成する
- [x] モバイルナビゲーションを作成する
- [x] 次の共通コンポーネントを作成する
  - [x] Tip / Point
  - [x] Warning
  - [x] Quiz
  - [x] StateDiagram
  - [x] ScreenshotPlaceholder
  - [x] OptionalDetails
  - [x] LessonNavigation
- [x] `ScreenshotPlaceholder`を `docs/SCREENSHOT_PLACEHOLDER_SPEC.md` に従って実装する
- [x] 画像名、用途、必要状態、撮影操作、切り抜き範囲、除外情報、仮altを表示できるようにする
- [x] 色だけに依存せず、ラベル・枠線・アイコンでも代替ブロックだと分かるようにする
- [x] とらふぐちゃんを後から追加できる構造にするが、画像自体は必須にしない
- [x] reduced motionとkeyboard focusに対応する

### 受け入れ条件

- 主要コンポーネントがサンプルページで確認できる
- 320px程度の画面幅でも横スクロールせず読める
- キャラクター画像なしでもデザインが成立する
- 代替ブロックがモバイルでも読めて、開発者向けTODOではなく閲覧者にも意味が伝わる

## Milestone 3: コンテンツモデルとルーティング

- [x] Astro Content Collectionsまたは同等の仕組みを設定する
- [x] レッスンのfrontmatter schemaを定義する
  - lesson number
  - title
  - description
  - learning goals
  - draft status
- [x] 教材一覧ページを作成する
- [x] 教材ページテンプレートを作成する
- [x] 前後移動を自動生成する
- [x] パンくずを実装する
- [x] 404ページを作成する
- [x] 内部リンク検査を用意する

## Milestone 4: MVP教材

各Lessonは `docs/CONTENT_GUIDE.md` の型を基本とします。

- [x] Lesson 0: バージョン管理が必要な理由
- [x] Lesson 1: Git・GitHub・GitHub Desktop
- [x] Lesson 2: リポジトリ作成
- [x] Lesson 3: Clone
- [x] Lesson 4: 変更と差分
- [x] Lesson 5: Commit
- [x] Lesson 6: Push
- [x] Lesson 7: Branch
- [x] Lesson 8: Pull Request
- [x] Lesson 9: Merge
- [x] Lesson 10: Pull
- [x] Lesson 11: 最終課題

### 各Lessonの受け入れ条件

- 今回やることが冒頭にある
- 操作する理由が説明される
- 操作前後の状態が分かる
- Git内部で起きたことが初心者向けに説明される
- よくある失敗が少なくとも1つある
- 確認問題または演習がある
- 対応するCLIコマンドが補足される
- スクリーンショットを入れたい正確な位置に代替ブロックがある
- 各代替ブロックに予定画像名と撮影要件がある
- 各代替ブロックが `docs/SCREENSHOT_REQUESTS.md` に登録されている
- 画像がなくても本文だけで操作を追える

## Milestone 5: 学習体験

- [x] 現在位置と進捗を表示する
- [x] 進捗保存はローカルストレージのみで実装可能か評価する
- [x] 実装する場合は保存失敗でも教材が利用できるようにする
- [x] Quizへ回答後フィードバックを表示する
- [x] 状態図を画面サイズに合わせて表示する
- [x] 印刷時にも本文が読めるCSSを追加する

進捗保存がMVPを不安定にする場合は延期し、理由を記録します。

## Milestone 6: 品質保証

- [x] コンポーネントテストまたは妥当な自動テストを追加する
- [x] Lessonのfrontmatterと順序を検証する
- [x] 内部リンクを検証する
- [x] 画像のalt属性を検証する
- [x] 代替ブロックの必須項目を検証する
- [x] 代替ブロックとスクリーンショット依頼一覧の画像名が一致することを検証する
- [x] 主要ページのHTML構造を検証する
- [x] npm audit結果を確認し、重大な問題を解消する
- [x] Lighthouseまたは同等の確認項目を文書化する
- [x] 本番ビルドを再確認する

## Milestone 7: 公開準備

- [x] READMEを実装後の構成に更新する
- [x] ローカル開発手順を確定する
- [x] GitHub Pages設定手順を文書化する
- [x] スクリーンショット依頼一覧を整理する
- [x] 残っている代替ブロックを必須・任意に分類する
- [x] 残課題をIssue候補としてまとめる
- [x] `docs/CODEX_COMPLETION_REPORT.md`を作成する

## 実装メモ

- 実装日: 2026-07-23
- Lesson 0〜11、共通UI、学習機能、自動検証、GitHub Pages workflowを実装済み
- 代替ブロックは9件（必須9、任意0）で `docs/SCREENSHOT_REQUESTS.md` と自動同期検証済み
- npm auditの高重要度指摘を受け、Astro 7系へ更新して脆弱性0件を確認
- 公開、実画像、初心者利用テストは所有者・人間による作業のため `docs/CODEX_BLOCKERS.md` に記録

## Codex completion reportに含める内容

- 実装した機能
- 完成条件に対する結果
- 実行した検証と結果
- 未提供画像・人間による確認が必要な箇所
- 代替ブロックの総数と必須・任意の内訳
- 技術的負債とMVP後の推奨事項
- GitHub Pages公開に必要な手動操作

## Codexへの開始指示

Codexへは次の内容を依頼します。

> Read `AGENTS.md`, `docs/CODEX_EXECUTION_PLAN.md`, and `docs/SCREENSHOT_PLACEHOLDER_SPEC.md`, then autonomously implement the Git Guidebook MVP. Work milestone by milestone, run all checks after each coherent slice, fix failures, update the plan checkboxes, and continue until the definition of done is met or a documented stop condition applies. Do not wait for routine confirmation. At every position where a screenshot would improve the lesson, insert a colored `ScreenshotPlaceholder` containing the planned filename and capture requirements, and register it in `docs/SCREENSHOT_REQUESTS.md`. End by writing `docs/CODEX_COMPLETION_REPORT.md`.
