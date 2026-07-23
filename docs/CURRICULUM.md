# カリキュラム案

## 教材全体の考え方

この教材は、用語集を先に暗記する形式ではなく、ひとつの小さなプロジェクトを進めながら必要な概念を順番に学ぶ実践形式にします。

基本の流れは次の通りです。

1. まず操作する理由を示す
2. 操作前の状態を図で確認する
3. GitHub Desktopで操作する
4. 画面とデータの変化を確認する
5. 内部で起きたことを説明する
6. 最後に対応するGitコマンドを紹介する

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

### 困ったときのGit

- mainで直接作業した
- 間違ったBranchで編集した
- Commitメッセージを間違えた
- Pushが拒否された
- Pullできない
- Conflictが起きた
- 消したファイルを戻したい

### 二人で使うGitHub

- Collaborator
- Issue
- Pull Requestレビュー
- 修正依頼への対応
- 同時編集
- Conflict解決

### GitHub DesktopからCLIへ

- `git status`
- `git add`
- `git commit`
- `git push`
- `git fetch`
- `git pull`
- `git switch`
- `git log`

### OSS開発へ進む

- Fork
- Upstream
- 外部リポジトリへのPull Request
- Contribution guide
- Issueから開発を始める流れ
