# 流れでわかる Git Guidebook

GitHub Desktopから始めて、操作の**流れ**とGitの**内部の仕組み**を理解する初心者向け学習サイトです。

> コマンドを暗記する前に、まず「いま何が、どこへ動いたのか」を理解する。

## このプロジェクトについて

Gitの初心者向け教材には、用語やコマンドを知っている前提で説明が進み、操作同士のつながりが見えにくいものがあります。

このプロジェクトでは、ひとつの小さなプロジェクトを実際に進めながら、必要になった操作を順番に学びます。最初はGitHub Desktopを使って状態や差分を視覚的に確認し、理解したあとで対応するGitコマンドへ進みます。

元になった記事：
[【GitHub初心者向け】初めてでも絶対できる「GitHubを使ったバージョン管理」](https://qiita.com/Fugu0141/items/9c0d7f506a17737398a7)

## MVPのゴール

Git未経験者が、GitHub Desktopを使って次の一連の流れを自力で完了できることを目指します。

1. Git・GitHub・GitHub Desktopの役割を区別する
2. リポジトリを作成してクローンする
3. ファイルの変更と差分を確認する
4. Commitして履歴を残す
5. PushしてGitHubへ反映する
6. Branchを作って安全に変更する
7. Pull Requestを作成する
8. Mergeしてmainへ統合する
9. Pullしてローカルを最新状態にする

詳しい完了条件は [`docs/MVP.md`](docs/MVP.md) を参照してください。

## 学習設計

各レッスンは、原則として次の型で構成します。

1. 今回やること
2. 操作前の状態
3. 実際の操作
4. 画面上で起きた変化
5. Git内部で起きたこと
6. 操作後の状態
7. よくある失敗
8. 確認問題・演習
9. 対応するGitコマンド

カリキュラム案は [`docs/CURRICULUM.md`](docs/CURRICULUM.md) にあります。

## 想定する技術構成

- Astro
- TypeScript
- Markdown / MDX
- GitHub Pages
- GitHub Actionsによる自動デプロイ

教材本文をMarkdown中心で管理しながら、状態図や操作シミュレーターなどのインタラクティブ要素を段階的に追加できる構成を想定しています。

技術選定はMVP実装前に再確認します。

## ドキュメント

- [`docs/MVP.md`](docs/MVP.md) — MVPの範囲と完了条件
- [`docs/CURRICULUM.md`](docs/CURRICULUM.md) — 学習カリキュラム
- [`ROADMAP.md`](ROADMAP.md) — 開発ロードマップ
- [`CONTRIBUTING.md`](CONTRIBUTING.md) — 開発・執筆への参加方法
- [`docs/CONTENT_GUIDE.md`](docs/CONTENT_GUIDE.md) — 教材を書くときの基準

## 開発状況

現在は **Phase 0: 企画・設計** です。

- [x] リポジトリ作成
- [x] プロジェクトの目的を定義
- [x] MVPの範囲を定義
- [ ] Astroプロジェクトの初期化
- [ ] GitHub Pagesへの自動デプロイ
- [ ] トップページの実装
- [ ] MVPレッスンの移植・再構成

## コントリビューション

誤字修正、説明の改善、図解、アクセシビリティ、UI、教材レビューなど、さまざまな形で参加できます。

大きな変更を始める前にIssueで目的と方針を共有してください。詳しくは [`CONTRIBUTING.md`](CONTRIBUTING.md) を参照してください。

## ライセンス

コードと教材本文では適したライセンスが異なるため、正式なライセンスは初期設計中に決定します。ライセンス決定までは、無断での再配布・再利用は避けてください。
