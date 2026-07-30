# カリキュラム案

## 教材全体の考え方

この教材は、用語集を先に暗記する形式ではなく、ひとつの小さなプロジェクトを進めながら必要な概念を順番に学ぶ実践形式にします。

基本の流れは次の通りです。

1. 実際に困る場面と到達点を示す
2. 日常語に近い説明から、より正確な説明へ進む
3. 操作前の状態を図で確認する
4. GitHub Desktopを中心に一緒に操作する
5. 画面と3つの場所をチェックリストで照合する
6. 初心者が迷いやすい3つの疑問を解消する
7. 見本に続いて自分で試す
8. 用語・状態判断・次の操作の3問で確認する
9. 任意で対応コマンドと出力の読み方を学ぶ
10. できるようになったことと次の開始状態を確認する

全12レッスンで、作業フォルダ、ローカルリポジトリ、GitHub上のリモートリポジトリを区別します。Lesson 2で作る `git-guidebook-practice` をLesson 10まで育て、Lesson 11だけ新しいリポジトリで自力再現します。

## MVPコース

### 0. 「完成版」が増殖する

**ねらい:** バージョン管理が必要になる理由を体感する。

- ファイルのコピーだけで履歴を管理する問題
- 誰が、いつ、何を変えたか
- Gitを使うと何が変わるか

### 1. Git・GitHub・GitHub Desktop

**ねらい:** 3つの役割を混同しない。

- Gitは履歴を管理する仕組み
- GitHubはリポジトリを共有するサービス
- GitHub DesktopはGitを画面から操作するアプリ
- ローカルとリモート

### 2. リポジトリを作成する

**ねらい:** プロジェクトと履歴を保管する場所を用意する。

- Repository name
- Description
- Public / Private
- README
- `.gitignore`とLicenseの概要

### 3. Cloneする

**ねらい:** GitHub上のリポジトリと端末内の作業場所を結び付ける。

- Clone repository
- Local path
- コピーとの違い
- Clone後の状態図

### 4. 変更と差分を見る

**ねらい:** Gitが何を変更として認識しているか理解する。

- ファイルの追加
- ファイルの編集
- 差分表示
- 変更対象を選択する意味

### 5. Commitする

**ねらい:** 変更をひとまとまりの履歴としてローカルに記録する。

- SummaryとDescription
- 良いCommitメッセージ
- Commit前後の状態
- CommitしてもGitHubはまだ変わらない

### 6. Pushする

**ねらい:** ローカルの履歴をGitHubへ送る。

- Push origin
- GitHub上での確認
- CommitとPushの違い
- 送るものはファイルだけではなく履歴であること

### 7. Branchを作る

**ねらい:** mainを保ったまま安全に変更する。

- mainの役割
- Current branch
- New branch
- Publish branch
- 枝ではなく履歴の分岐としての説明

### 8. Pull Requestを作る

**ねらい:** どの変更をどこへ取り込むか提案する。

- Branch上で変更、Commit、Push
- baseとcompare
- タイトルと説明
- Files changed
- Pull RequestはMergeそのものではない

### 9. Mergeする

**ねらい:** Branchの変更をmainへ統合する。

- Merge可能か確認
- Merge pull request
- Branch削除
- mainの履歴が進む様子

### 10. Pullして最新にする

**ねらい:** GitHub上で進んだmainを端末へ反映する。

- ローカルmainへ切り替える
- Fetch origin
- Pull origin
- GitHubとローカルの状態を比較する

### 11. 一人で最初から再現する

**ねらい:** 手順の丸暗記ではなく流れを定着させる。

- 新しいリポジトリを作る
- Clone
- CommitとPush
- Branch作成
- Pull RequestとMerge
- Pull
- 各操作の意味を説明する

## 次期コース候補

### GitHub DesktopからCLIへ

**到達点:** GUIで理解した状態を、コマンドと出力から判断できる。

- `git status`、`git diff`、`git log`
- `git add`、`git commit`
- `git push`、`git fetch`、`git pull`
- `git switch`
- 実行フォルダ、前提、影響範囲、出力の読み方

### 困ったときのGit

**到達点:** 変更を急いで消さず、現在地を調べて安全な復旧方針を選べる。

- mainで直接作業した
- 間違ったBranchで編集した
- Commitメッセージを間違えた
- Pushが拒否された
- Pullできない
- Conflictが起きた
- 消したファイルを戻したい

### 二人で使うGitHub

**到達点:** Issueからレビュー、修正、Mergeまでの共同作業を再現できる。

- Collaborator
- Issue
- Pull Requestレビュー
- 修正依頼への対応
- 同時編集
- Conflict解決

### OSS開発へ進む

**到達点:** 他者のリポジトリのルールを読み、Forkから安全に変更を提案できる。

- Fork
- Upstream
- 外部リポジトリへのPull Request
- Contribution guide
- Issueから開発を始める流れ
