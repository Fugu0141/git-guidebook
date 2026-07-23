# 所有者・人間による対応が必要な項目

実装と自動検証に未解決の技術的エラーはありません。次の項目は、外部権限、実画面、法的判断、利用者参加が必要なためCodexだけでは完了できません。

## 1. GitHub Pagesの公開確認

- 種別: 所有者権限
- MVPへの影響: 公開URLでの完了ゲートは未通過
- 必要な作業:
  1. Draft Pull RequestをレビューしてmainへMergeする
  2. **Settings → Pages → Source** を **GitHub Actions** にする
  3. `Deploy Git Guidebook to Pages` workflowの成功を確認する
  4. `https://fugu0141.github.io/git-guidebook/` で直接URL、再読み込み、404を確認する
- Issue候補: `Enable and verify GitHub Pages deployment`

Draft Pull Requestのままmainへ直接変更しない条件と、Pages設定に必要な所有者権限のため、Codexは公開完了まで進めません。

## 2. 初心者による利用テスト

- 種別: 人間の参加
- MVPへの影響: `docs/MVP.md` の検証条件は未通過
- 必要な作業:
  - Git未経験者または初心者2人以上に試してもらう
  - 少なくとも1人が説明者の補助なしで最終課題まで進めるか確認する
  - 詰まった場所と所要時間を記録し、重大な問題を修正する
- 手順: [`MANUAL_QA.md`](MANUAL_QA.md)
- Issue候補: `Run MVP usability tests with two Git beginners`

## 3. 必須スクリーンショット9件

- 種別: 教材専用環境での撮影と人間の安全確認
- MVPへの影響: 仕様上Placeholderのまま公開可能だが、実画面教材としては未完成
- 内訳: 必須9、任意0
- 依頼一覧: [`SCREENSHOT_REQUESTS.md`](SCREENSHOT_REQUESTS.md)
- 必要な作業:
  - 教材専用アカウントと架空データで撮影する
  - 個人情報、秘密情報、他のリポジトリがないことを確認する
  - raw画像と掲載画像を所定フォルダへ追加する
  - 実画像に合わせてaltを確定し、Placeholderを差し替える
- Issue候補: `Capture and review nine required GitHub screenshots`

## 4. コードと教材本文のライセンス

- 種別: 法的・所有権判断
- MVPへの影響: サイトの実行には影響しないが、再利用条件が未確定
- 必要な作業: 所有者がコードと教材本文に適切なライセンスを決定し、LICENSEとREADMEを更新する
- Issue候補: `Decide licenses for source code and lesson content`

Codexはライセンスを推測して追加していません。

## 5. 公開URLでの手動アクセシビリティ・Lighthouse確認

- 種別: 公開後のブラウザ確認
- MVPへの影響: 自動検証は通過しているが、実ブラウザと配信環境の最終確認が必要
- 必要な作業: [`MANUAL_QA.md`](MANUAL_QA.md) の表示、キーボード、保存失敗、印刷、Lighthouse項目を確認する
- Issue候補: `Run post-deployment accessibility and Lighthouse review`
