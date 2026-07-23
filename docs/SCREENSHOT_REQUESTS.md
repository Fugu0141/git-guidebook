# スクリーンショット撮影依頼一覧

Git Guidebook MVPの教材内にある `ScreenshotPlaceholder` と同期する撮影依頼です。ファイル名を一意な識別子として使用します。

撮影前に [`SCREENSHOT_GUIDE.md`](SCREENSHOT_GUIDE.md) を読み、教材専用環境だけを使用してください。すべて未撮影です。

## lesson-02-step-01-create-repository.png

- Lesson: 2 リポジトリを作成する
- 状態: 未撮影
- 優先度: 必須
- タイトル: GitHubの新規リポジトリ作成画面
- 目的: リポジトリ名、公開範囲、READMEの選択位置と作成前の入力内容を確認する
- 必要な状態: 教材専用アカウントでサインイン済み。名前は `git-guidebook-practice`、Description入力済み、README追加はオン、`.gitignore` とLicenseはNone
- 撮影操作: Create repositoryを押す直前
- 切り抜き: Repository nameからCreate repositoryボタンまで、選択状態が読める範囲
- 除外情報: メールアドレス、通知、実在する非公開リポジトリ名、個人名、アクセストークン
- alt案: GitHubの新規リポジトリ作成画面。git-guidebook-practiceという名前とREADME追加が設定され、作成ボタンを押す直前の状態
- 掲載位置: Lesson 2「手順：GitHubで作成する」の手順7直後

## lesson-03-step-01-clone-repository.png

- Lesson: 3 Cloneして端末へ持ってくる
- 状態: 未撮影
- 優先度: 必須
- タイトル: GitHub DesktopのClone repository画面
- 目的: 対象リポジトリとLocal pathを確認してからCloneする流れを示す
- 必要な状態: 教材用アカウントでサインイン済み。GitHub.comタブで `git-guidebook-practice` を選択し、安全なLocal pathを指定
- 撮影操作: Cloneボタンを押す直前
- 切り抜き: Clone repositoryダイアログ内のリポジトリ名、Local path、Cloneボタン
- 除外情報: OSユーザー名、メールアドレス、他のリポジトリ名、アクセストークン
- alt案: GitHub DesktopのClone repository画面。git-guidebook-practiceと保存先が選ばれ、Cloneボタンを押す直前の状態
- 掲載位置: Lesson 3「手順：GitHub DesktopでCloneする」の手順6直後

## lesson-04-step-02-review-diff.png

- Lesson: 4 変更と差分を見る
- 状態: 未撮影
- 優先度: 必須
- タイトル: README.mdの変更差分
- 目的: GitHub Desktopで追加行とCommit対象のチェックを確認する
- 必要な状態: main上のREADMEへ指定の練習メモを追加・保存済み、未Commit
- 撮影操作: ChangesでREADME.mdを選び、追加行の差分を表示
- 切り抜き: Changes一覧、README.mdのチェック、追加行を示す差分
- 除外情報: メールアドレス、他のリポジトリ名、OSユーザー名、個人情報、秘密情報
- alt案: GitHub DesktopのChanges画面。README.mdが選択され、追加した練習メモの行が差分として表示されている
- 掲載位置: Lesson 4「手順：READMEを編集する」の手順5直後

## lesson-05-step-03-create-commit.png

- Lesson: 5 Commitでローカルに記録する
- 状態: 未撮影
- 優先度: 必須
- タイトル: Commit直前のChanges画面
- 目的: 差分、選択対象、Summary、Commit先のBranchを一緒に確認する
- 必要な状態: main上のREADMEに未Commit変更があり、Summaryへ `Add practice note` を入力済み
- 撮影操作: Commit to mainを押す直前
- 切り抜き: Changes一覧、README.mdの差分、Summary入力欄、Commit to mainボタン
- 除外情報: メールアドレス、他のリポジトリ名、OSユーザー名、個人情報
- alt案: GitHub DesktopのChanges画面。README.mdの差分とAdd practice noteというSummaryが表示され、Commit to mainを押す直前の状態
- 掲載位置: Lesson 5「手順：変更をCommitする」の手順6直後

## lesson-06-step-02-push-origin-after.png

- Lesson: 6 PushでGitHubへ送る
- 状態: 未撮影
- 優先度: 必須
- タイトル: Push後のGitHub上のREADME
- 目的: ローカルで作ったCommitがGitHub上のmainへ届いたことを確認する
- 必要な状態: `Add practice note` をmainへCommitし、Push origin完了後にGitHubのリポジトリトップを表示
- 撮影操作: READMEの練習メモと最新Commitメッセージを表示
- 切り抜き: リポジトリ名、main表示、最新Commit、READMEの追加部分
- 除外情報: ブラウザの他タブ、通知、メールアドレス、個人名、非公開リポジトリ
- alt案: GitHub上のgit-guidebook-practiceリポジトリ。mainの最新CommitがAdd practice noteで、READMEに練習メモが表示されている
- 掲載位置: Lesson 6「手順：Pushして確認する」の手順4直後

## lesson-07-step-02-create-branch.png

- Lesson: 7 Branchで安全に作業する
- 状態: 未撮影
- 優先度: 必須
- タイトル: 新しいBranchの作成ダイアログ
- 目的: 現在のmainから `add-learning-goal` という作業Branchを作る操作を確認する
- 必要な状態: main上で未Commit変更なし、mainはPush済み、New Branchダイアログを表示
- 撮影操作: Nameへ `add-learning-goal` と入力し、Create Branchを押す直前
- 切り抜き: Current Branch周辺とNew Branchダイアログ全体
- 除外情報: メールアドレス、他のリポジトリ名、OSユーザー名、個人情報
- alt案: GitHub DesktopのNew Branchダイアログ。add-learning-goalという名前を入力し、mainからBranchを作成する直前の状態
- 掲載位置: Lesson 7「手順：Branchを作成してPublishする」の手順6直後

## lesson-08-step-03-create-pull-request.png

- Lesson: 8 Pull Requestを作る
- 状態: 未撮影
- 優先度: 必須
- タイトル: Pull Request作成前の比較画面
- 目的: baseとcompare、変更差分、タイトルと説明を確認してから提案を作る
- 必要な状態: baseはmain、compareはadd-learning-goal。CommitをPushし、タイトルと説明を入力し、Files changedを確認済み
- 撮影操作: Create pull requestを押す直前
- 切り抜き: base/compare、タイトル、説明、Create pull requestボタン
- 除外情報: 通知、メールアドレス、他のリポジトリ、個人名、ブラウザの他タブ
- alt案: GitHubのPull Request作成画面。baseがmain、compareがadd-learning-goalで、タイトルと説明を入力し作成する直前の状態
- 掲載位置: Lesson 8「手順：提案を作る」の手順6直後

## lesson-09-step-02-merge-complete.png

- Lesson: 9 Mergeしてmainへ取り込む
- 状態: 未撮影
- 優先度: 必須
- タイトル: Pull RequestのMerge完了画面
- 目的: Pull RequestがMergedになり、GitHub上のmainへ変更が統合されたことを確認する
- 必要な状態: 差分を確認し、Merge pull requestとConfirm mergeを実行済み
- 撮影操作: MergedラベルとDelete branchの選択肢を表示
- 切り抜き: Pull Requestタイトル、Merged状態、Merge結果、Delete branchボタン
- 除外情報: 通知、メールアドレス、個人名、他のリポジトリ、ブラウザの他タブ
- alt案: GitHubのPull Request画面。Add learning goalがMergedになり、作業Branchを削除できる状態
- 掲載位置: Lesson 9「手順：確認してMergeする」の手順6直後

## lesson-10-step-03-pull-origin-after.png

- Lesson: 10 Pullして最新にする
- 状態: 未撮影
- 優先度: 必須
- タイトル: Pull後のGitHub Desktop
- 目的: ローカルmainがGitHub上のmainと同じ履歴まで進み、未Commit変更がないことを確認する
- 必要な状態: Pull RequestをmainへMergeし、GitHub Desktopでmainへ切り替え、Fetch後にPull originを実行済み
- 撮影操作: HistoryでMerge後の履歴を選び、Current Branchがmainと分かる状態を表示
- 切り抜き: Current Branch、Historyの最新項目、Fetch origin表示
- 除外情報: メールアドレス、他のリポジトリ名、OSユーザー名、個人情報
- alt案: GitHub DesktopのHistory画面。現在のBranchがmainで、Pull後の最新履歴が表示されている
- 掲載位置: Lesson 10「手順：mainへ切り替えてPullする」の手順6直後

## 集計

- 依頼総数: 9
- 必須: 9
- 任意: 0
- 完了: 0
- 未撮影: 9
