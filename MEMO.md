# 作業時のメモ

[http://getcomposer.org/doc/](http://getcomposer.org/doc/)の日本語訳をしてみるみる。

英語苦手なのでまったりと作業。

## Environment for editing

    npm install

## Grunt

package.jsonの用意

    $ npm init

gruntとプラグインをインストール

    $ npm install --save-dev grunt
    
    $ npm install --save-dev grunt-contrib-connect
    $ npm install --save-dev grunt-contrib-watch
    $ npm install --save-dev grunt-contrib-jade
    $ npm install --save-dev grunt-contrib-sass
    $ npm install --save-dev grunt-contrib-cssmin
    $ npm install --save-dev grunt-contrib-copy

    $ npm install --save-dev grunt-markdown
    

Gruntfile.jsを書く

## 起動

    $ grunt 

## Livereload

https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei

http://feedback.livereload.com/knowledgebase/articles/67441-how-do-i-start-using-livereload-

## Travis

`.travis.yml`を作る

ビルドしてgh-pagesにcommit->push

http://webtech-walker.com/archive/2013/08/jekyll_to_middleman.html

http://tricknotes.hateblo.jp/entry/2013/06/17/020229


### Travisのトークンの取得

Githubトークンを取得

 * https://help.github.com/articles/creating-an-oauth-token-for-command-line-use

Travisのトークンの取得

    $ bundle init
    $ bundle install --path=vendor/bundle --binstubs=vendor/bin
    $ bundle exec travis login --pro
    $ bundle exec travis encrypt -r kohkimakimoto/getcomposer.org_doc_jp "GH_TOKEN=<token>"



