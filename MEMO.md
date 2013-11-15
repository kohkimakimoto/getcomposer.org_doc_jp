# 作業時のメモ

[http://getcomposer.org/doc/](http://getcomposer.org/doc/)の日本語訳をしてみるみる。

英語苦手なのでまったりと作業。

##　編集環境のセットアップ

    $ npm install
    $ grunt 

## TravisでビルドとGithubPagesへのPublish

参考ページ

* http://webtech-walker.com/archive/2013/08/jekyll_to_middleman.html
* http://tricknotes.hateblo.jp/entry/2013/06/17/020229

### Githubトークンを取得

* https://help.github.com/articles/creating-an-oauth-token-for-command-line-use

### Travisのトークンの取得時のコマンド

    $ bundle init

Gemfileを以下のように修正

    # A sample Gemfile
    source "https://rubygems.org"
    
    # gem "rails"
    gem "travis"

インストール

    $ bundle install --path=vendor/bundle --binstubs=vendor/bin

travisにログインしてトークンを取得

    $ bundle exec travis login --pro
    $ bundle exec travis encrypt -r kohkimakimoto/getcomposer.org_doc_jp "GH_TOKEN=<token>"




