# Git Guidebook

GitHub Desktopを使い、リポジトリ作成からClone、編集、Commit、Push、Branch、Pull Request、Merge、Pullまでを実際の仕事の流れで学ぶ、日本語の初心者向けサイトです。

Commitを「GitHubへのアップロード」と説明せず、毎回次の3つを区別します。

- 作業フォルダ: 実際のファイルを編集する場所
- ローカルリポジトリ: 端末内でGitの履歴を記録する場所
- リモートリポジトリ: GitHub上で履歴を保管・共有する場所

## MVPの内容

- Lesson 0〜11の実践カリキュラム
- 操作前後を比較する状態図
- Tip、Warning、OptionalDetailsなどの再利用可能な教材部品
- 回答後にフィードバックが出る確認問題
- ブラウザ内だけに保存する学習完了チェック
- 前後ナビゲーション、パンくず、コース内の現在位置
- スクリーンショット未提供箇所の正式な代替ブロック
- レスポンシブ表示、キーボード操作、見えるフォーカス、reduced motion、印刷CSS
- GitHub Pagesの `/git-guidebook/` base path
- GitHub Actionsによる検証とPagesデプロイ
- Lesson順序、必須構成、画像依頼同期、内部リンクの自動検証

## ローカル開発

Node.js 22以上とnpmを使用します。

```bash
npm ci
npm run dev
```

表示されたローカルURLをブラウザで開きます。Astroには `/git-guidebook/` のbase pathが設定されているため、ローカルでも公開時と同じパス構成で確認できます。

### 検証コマンド

```bash
npm run format:check
npm run lint
npm run typecheck
npm test
npm run build
npm run check:links
npm audit
```

自動整形する場合は `npm run format` を使用します。

## ディレクトリ構成

```text
src/
├── components/       # 教材用の再利用コンポーネント
├── content/lessons/  # Lesson 0〜11のMDX
├── layouts/          # 共通・教材レイアウト
├── pages/            # ホーム、一覧、教材ルート、404
└── styles/           # デザイン、レスポンシブ、印刷CSS
tests/                # 教材・設定・画像依頼の自動テスト
scripts/              # 本番成果物の内部リンク検査
docs/                 # 要件、執筆基準、撮影依頼、完了報告
```

## 教材を編集する

教材は `src/content/lessons/` のMDXです。frontmatterにはLesson番号、タイトル、説明、学習目標、公開状態が必要です。本文は [`docs/CONTENT_GUIDE.md`](docs/CONTENT_GUIDE.md) の標準構成に従います。

画面画像が必要な位置には、架空のスクリーンショットを入れず `ScreenshotPlaceholder` を配置します。全必須項目を記入し、同じファイル名を [`docs/SCREENSHOT_REQUESTS.md`](docs/SCREENSHOT_REQUESTS.md) に登録してください。詳しいルールは [`docs/SCREENSHOT_PLACEHOLDER_SPEC.md`](docs/SCREENSHOT_PLACEHOLDER_SPEC.md) にあります。

## GitHub Pagesへ公開する

1. この変更を `main` へMergeします。
2. GitHubの **Settings → Pages** でSourceを **GitHub Actions** にします。
3. Actionsで **Deploy Git Guidebook to Pages** workflowが成功することを確認します。
4. 公開URL `https://fugu0141.github.io/git-guidebook/` でトップ、Lessonの直接URL、再読み込み、404を確認します。
5. RepositoryのActions/Pages権限で失敗した場合は、所有者がPagesとworkflowの権限を確認します。

workflowはmainへのPush時と手動実行に対応し、format、lint、型検査、テスト、build、内部リンク検査を実行してからPagesへデプロイします。

## 公開前の人間による確認

自動検証だけではMVPの学習成立を確認できません。[`docs/MANUAL_QA.md`](docs/MANUAL_QA.md) に従い、初心者2人以上の利用テスト、キーボード・モバイル表示、公開URLでのLighthouse相当確認を行ってください。

未撮影画像、GitHub Pagesの所有者操作、利用者テストなどは [`docs/CODEX_BLOCKERS.md`](docs/CODEX_BLOCKERS.md) にまとめています。実装と検証の結果は [`docs/CODEX_COMPLETION_REPORT.md`](docs/CODEX_COMPLETION_REPORT.md) を参照してください。

## 主要ドキュメント

- [`docs/MVP.md`](docs/MVP.md): MVPの範囲と完了条件
- [`docs/CURRICULUM.md`](docs/CURRICULUM.md): Lesson 0〜11の学習順序
- [`docs/CODEX_EXECUTION_PLAN.md`](docs/CODEX_EXECUTION_PLAN.md): 実装の進行状況
- [`docs/CONTENT_GUIDE.md`](docs/CONTENT_GUIDE.md): 教材執筆の基準
- [`docs/SCREENSHOT_GUIDE.md`](docs/SCREENSHOT_GUIDE.md): 安全な撮影ルール
- [`CONTRIBUTING.md`](CONTRIBUTING.md): 開発・教材改善への参加方法

## ライセンス

コードと教材本文の正式なライセンスは所有者の決定待ちです。決定までは、大規模な再配布・再利用を避けてください。
