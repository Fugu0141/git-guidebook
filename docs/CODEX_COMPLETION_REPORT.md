# Codex教材改善レポート

## 1. 結果

2026-07-31に、Git Guidebookを「説明を読むサイト」から「初心者が1つのリポジトリを実際に育て、状態から次の操作を判断する教材」へ改訂しました。作業Branchは `codex/improve-learning-content` です。

既存のAstro、TypeScript strict、MDX、GitHub Pages `/git-guidebook/`、状態図、進捗、レスポンシブ、キーボード操作、見えるフォーカス、reduced motionを維持しています。自動実装ゲートは通過しました。実スクリーンショット、初心者利用テスト、ライセンスは人間による対応が必要です。

## 2. 実装した機能

- 全Lesson共通の13項目の教材構成
- `CheckList`: 操作直後の成功確認
- `PracticeTask`: 見本のあとに自分で行う課題
- `QuestionList`: 初心者が迷いやすい3項目の折りたたみ解説
- `CommandGuide`: 実行場所、前提、影響、GUI対応、出力、失敗時の初動をまとめる任意欄
- `Quiz`の用語・状態判断・次の操作ラベルと、各Lesson3問のフィードバック
- frontmatterの目安時間、前提、使用画面、任意コマンド有無
- レッスン一覧の操作、成果、時間、前提、使用画面、CLI情報
- ホームの「プログラミング経験不要」「1リポジトリで実習」「コマンド任意」「将来コース」案内
- 全Lessonの標準構成と入口情報を検証する自動テスト

## 3. Lesson 0〜11

| Lesson | 実習内容 | 到達状態 |
| ------ | -------- | -------- |
| 0 | バージョン管理が必要な場面を整理 | 保存・Commit・送信を区別できる |
| 1 | Git・GitHub・GitHub Desktopを分類 | 道具と3つの場所を説明できる |
| 2 | GitHubでリモートリポジトリ作成 | GitHub上だけが変わったと判断できる |
| 3 | GitHub DesktopでClone | 作業フォルダ、ローカル履歴、originを確認できる |
| 4 | README編集と差分確認 | 未Commit変更と記録済み内容を比較できる |
| 5 | ローカルmainへCommit | CommitはGitHubへの送信ではないと説明できる |
| 6 | GitHub上のmainへPush | ローカルとリモートのCommitを照合できる |
| 7 | Branch作成とPublish | Branchはフォルダコピーではないと説明できる |
| 8 | Pull Request作成 | base、compare、提案、Mergeを区別できる |
| 9 | GitHub上でMerge | GitHub mainだけが先に進むと判断できる |
| 10 | mainでFetchとPull | 3つの場所を同じ最新状態へ戻せる |
| 11 | 新規リポジトリで自力再現 | 状態から次の操作を選べる |

全Lessonに、今回の場面、到達点、簡単な説明、正確な説明、操作前、一緒に操作、成功確認、迷いやすいポイント、自習、3種類のQuiz、任意コマンド、まとめ、次への接続があります。

## 4. 学習設計上の改善

- ボタン名の暗記ではなく、操作前後の3つの場所を毎回照合する
- 正解手順だけでなく、画面上の成功サインをチェックリストにする
- よくある失敗を「責めずに最初に何を見るか」まで説明する
- コマンドを必須にせず、GitHub Desktopで理解した状態へ対応付ける
- コマンドの成功出力と、失敗時に最初に確認する内容を明示する
- 変更破棄、強制Push、フォルダ削除を推測で行わない安全方針を繰り返す

## 5. ホーム・一覧・将来コース

ホームでは、プログラミング経験が不要であること、GitHub Desktopから始めること、1つのリポジトリを使うこと、状態図で仕組みを理解すること、CLIは任意であることを明示しました。

一覧では、各Lessonの操作、できるようになること、目安時間、前提、使用画面、コマンドの扱いを比較できます。次期コースは次の順で設計しています。

1. GitHub DesktopからCLIへ
2. 困ったときのGit
3. 二人で使うGitHub
4. OSS開発へ進む

## 6. ドキュメント更新

- `docs/MVP.md`: 全12レッスンと新しい完了条件へ修正
- `docs/CURRICULUM.md`: 10段階の学習フローと次期コースの到達点を追加
- `docs/CONTENT_GUIDE.md`: 13項目の標準、frontmatter、Quiz、コマンド要件を確定
- `docs/CODEX_EXECUTION_PLAN.md`: Milestone 8を追加し全項目完了
- `docs/SCREENSHOT_REQUESTS.md`: 新見出し「一緒に操作」の掲載位置へ同期
- `README.md`、`CONTRIBUTING.md`: 教材構造、開発、レビュー方法を更新
- `docs/CODEX_BLOCKERS.md`: Pages有効化後の現状に合わせて更新

## 7. スクリーンショット

- Placeholder総数: 9
- 必須: 9
- 任意: 0
- 実画像へ差し替え済み: 0

対象ファイル:

1. `lesson-02-step-01-create-repository.png`
2. `lesson-03-step-01-clone-repository.png`
3. `lesson-04-step-02-review-diff.png`
4. `lesson-05-step-03-create-commit.png`
5. `lesson-06-step-02-push-origin-after.png`
6. `lesson-07-step-02-create-branch.png`
7. `lesson-08-step-03-create-pull-request.png`
8. `lesson-09-step-02-merge-complete.png`
9. `lesson-10-step-03-pull-origin-after.png`

架空・生成スクリーンショットは追加していません。全Placeholderは最終掲載位置にあり、ファイル名、タイトル、目的、必要状態、撮影操作、切り抜き、除外情報、alt案、優先度を持ち、依頼一覧との同期テストを通過しています。

## 8. 検証結果

| コマンド | 結果 |
| -------- | ---- |
| `npm run format` | 成功 |
| `npm run format:check` | 成功 |
| `npm run lint` | 成功 |
| `npm run typecheck` | 0 errors / 0 warnings / 0 hints |
| `npm test` | 10件成功 |
| `npm run build` | 15ページ生成 |
| `npm run check:links` | `/git-guidebook/` 配下の内部リンク・アセット成功 |
| `npm audit --offline` | 脆弱性0件 |

オンラインの `npm audit` はnpmレジストリへ依存情報を送る権限がないため実行せず、ローカルキャッシュだけを使う監査結果を記録しています。

## 9. 未解決の人間・所有者対応

- 教材専用環境で必須スクリーンショット9件を撮影し、安全確認後に差し替える
- Git未経験者または初心者2人以上で利用テストを行う
- 少なくとも1人が説明者の補助なしでLesson 11を完了できるか確認する
- コードと教材本文のライセンスを所有者が決定する
- 今回のBranchをmainへMerge後、Pages workflowと公開URLを確認する
- 公開環境でキーボード、モバイル、印刷、Lighthouse相当項目を確認する

詳細は [`CODEX_BLOCKERS.md`](CODEX_BLOCKERS.md) と [`MANUAL_QA.md`](MANUAL_QA.md) にあります。

## 10. 公開手順と推奨レビュー順

GitHub PagesのSourceは所有者がGitHub Actionsとして有効化済みです。今回必要な手順は次の通りです。

1. `codex/improve-learning-content` のPull RequestをレビューしてmainへMergeする
2. `Deploy Git Guidebook to Pages` workflowの全Job成功を確認する
3. `https://fugu0141.github.io/git-guidebook/` でホームと一覧を確認する
4. Lesson 0、5、8、11の直接URLと再読み込みを確認する
5. 存在しないURLの404と `/git-guidebook/` 配下のアセットを確認する

推奨する人間のレビュー順:

1. Lesson 0〜2の言葉のやさしさと開始条件
2. Lesson 4〜6の保存・Commit・Pushの技術的な区別
3. Lesson 7〜10のBranch・Pull Request・Merge・Pullの状態遷移
4. Lesson 11を手順を見ずに完了できるか
5. 全36問の正答・誤答フィードバック
6. 320px、768px、1280px程度の表示とキーボード操作
7. 9件の撮影要件と個人情報除外条件
