# イントロダクション

ComposerはPHPの依存管理ツールです。
Composerはあなたのプロジェクトが必要とする依存ライブラリを定義できるようにして、インストールを行います。

<!--
Composer is a tool for dependency management in PHP. It allows you to declare
the dependent libraries your project needs and it will install them in your
project for you.
-->

## 依存管理

Composerはパッケージ管理ツールではありません。そう、Composerは「複数」のパッケージやライブラリを扱います。
Composerはライブラリをプロジェクト単位に管理します。あなたのプロジェクト内のディレクトリ(例: `vendor`)にライブラリをインストールします。
デフォルトではグローバルには決してインストールしません。
したがって、これは依存管理なわけです。

<!--
Composer is not a package manager. Yes, it deals with "packages" or libraries, but
it manages them on a per-project basis, installing them in a directory (e.g. `vendor`)
inside your project. By default it will never install anything globally. Thus,
it is a dependency manager.
-->

このアイデアは新しいものではありません。
Composerはnodeの[npm](http://npmjs.org/)やrubyの[bundler](http://gembundler.com/)に強くインスパイアされています。
しかし、PHPにはそのようなツールがありませんでした。

Composerが解決する問題は以下の通りです：

a) 大量のライブラリに依存したプロジェクトがある。

b) そのライブラリのいくつかは別のライブラリに依存している。

c) あなたが依存関係を定義する。

d) Composerはどのパッケージのどのバージョンをインストールする必要があるのかを見つけ出し、インストールする。
  （これは、プロジェクト内にパッケージをダウンロードすることを意味します）。

<!--
This idea is not new and Composer is strongly inspired by node's [npm](http://npmjs.org/)
and ruby's [bundler](http://gembundler.com/). But there has not been such a tool
for PHP.

The problem that Composer solves is this:

a) You have a project that depends on a number of libraries.

b) Some of those libraries depend on other libraries.

c) You declare the things you depend on.

d) Composer finds out which versions of which packages need to be installed, and
   installs them (meaning it downloads them into your project).
-->

<h2 id="declaring-dependencies"> 依存関係を定義する </h2>

あなたが新しいプロジェクトを作成し、そしてロギングのライブラリを必要としていたとしましょう。
あなたは[monolog](https://github.com/Seldaek/monolog)を使うことに決めました。
これをあなたのプロジェクトに追加するために、あなたがしなければならないことは、
プロジェクトの依存関係を記述した`composer.json`ファイルを作成することです。

<!--
Let's say you are creating a project, and you need a library that does logging.
You decide to use [monolog](https://github.com/Seldaek/monolog). In order to
add it to your project, all you need to do is create a `composer.json` file
which describes the project's dependencies.
-->

    {
        "require": {
            "monolog/monolog": "1.2.*"
        }
    }

これは、プロジェクトが`monolog/monolog`パッケージの`1.2`で始まるバージョンを必要としていることを、述べているだけです。

<!--
We are simply stating that our project requires some `monolog/monolog` package,
any version beginning with `1.2`.
-->

<h2> システムの必要条件 </h2>

Composerが動作するためにはPHP 5.3.2以上が必要です。
また、多少センシティブなPHPの設定とコンパイルフラグも必要です。
要件を合っていない箇所については、インストーラが警告を出すでしょう。

<!--
Composer requires PHP 5.3.2+ to run. A few sensitive php settings and compile
flags are also required, but the installer will warn you about any
incompatibilities.
-->

シンプルなzipアーカイブの代わりにソースからパッケージをインストールするには、git、svnまたはｈｇが必要です。
これはパッケージのバージョン管理の方法によります。

<!--
To install packages from sources instead of simple zip archives, you will need
git, svn or hg depending on how the package is version-controlled.
-->

Composerはマルチプラットフォームです。私たちはWindows、Linux、OSXでそれが同じように動作するよう、努力しています。

<!--
Composer is multi-platform and we strive to make it run equally well on Windows,
Linux and OSX.
-->

<h2> *nixへインストール </h2>

### 実行形式のComposerをダウンロード

#### ローカルにインストール

実際にComposerを利用するためには２つのことをしなければなりません。最初のひとつはComposerをインストールすることです。
（もう一度言います。これはあなたのプロジェクト配下にダウンロードするという意味です）

<!--
To actually get Composer, we need to do two things. The first one is installing
Composer (again, this means downloading it into your project):
-->

    $ curl -sS https://getcomposer.org/installer | php

これはPHPの設定内容をチェックして、`composer.phar`をあなたの作業ディレクトリにダウンロードします。
このファイルはComposerのバイナリです。
PHAR(PHP archive)はPHPのためのアーカイブ形式でコマンドラインなどから実行することができます。

<!--
This will just check a few PHP settings and then download `composer.phar` to
your working directory. This file is the Composer binary. It is a PHAR (PHP
archive), which is an archive format for PHP which can be run on the command
line, amongst other things.
-->

`--install-dir`オプションを使ってディレクトリを指定すると、Composerを指定のディレクトリにインストールすることができます。
（絶対パスまたは相対パスが使えます）

<!--
You can install Composer to a specific directory by using the `--install-dir`
option and providing a target directory (it can be an absolute or relative path):
-->

    $ curl -sS https://getcomposer.org/installer | php -- --install-dir=bin

#### グローバルにインストール

このファイルはあなたの好きな場所に置くことができます。`PATH`の通った場所に置くことで、グローバルにアクセスすることができます。
unix系のシステムでは実行形式にして`php`なしで実行することもできます。

<!--
You can place this file anywhere you wish. If you put it in your `PATH`,
you can access it globally. On unixy systems you can even make it
executable and invoke it without `php`.
-->

以下のコマンドを実行すれば、システムのどこからでも簡単に`composer`にアクセスすることができます。

<!--
You can run these commands to easily access `composer` from anywhere on your system:
-->

    $ curl -sS https://getcomposer.org/installer | php
    $ mv composer.phar /usr/local/bin/composer

> **注意:**　上記がパーミッションによって失敗する場合、`mv`の行をsudoで実行してください。

<!--
**Note:** If the above fails due to permissions, run the `mv` line
again with sudo.
-->

これで、Composerを実行を`php composer.phar`の代わりに`composer`だけで実行できます。

<!--
Then, just run `composer` in order to run Composer instead of `php composer.phar`.
-->

#### グローバルにインストール (homebrewでOSXに)

Composerはhomebrew-phpプロジェクトの一部です。

1. もしまだ`brew tap josegonzalez/homebrew-php`を行っていない場合、homebrew-phpリポジトリをあなたのbrewにTapしてください。
2. `brew install josegonzalez/php/composer`を実行してください。
3. `composer`コマンドでComposerが使います。

<!--
Composer is part of the homebrew-php project.

1. Tap the homebrew-php repository into your brew installation if you haven't done
   so yet: `brew tap josegonzalez/homebrew-php`
2. Run `brew install josegonzalez/php/composer`.
3. Use Composer with the `composer` command.
-->

> **注意:** もしPHP53でエラーになる、またはそれ以上のバージョンを失っている場合は、次のコマンドをつかってPHPをインストールしてください。
> `brew install php53-intl`

<!--
> **Note:** If you receive an error saying PHP53 or higher is missing use this command to install php 
> `brew install php53-intl`
-->

## Windowsへインストール

### インストーラを使う

これはComposerをあなたのマシンにセットアップする最も簡単な方法です。

<!--
This is the easiest way to get Composer set up on your machine.
-->

[Composer-Setup.exe](https://getcomposer.org/Composer-Setup.exe)をダウンロードして実行してください。
最新バージョンのComposerがインストールされパスが設定されます。これによりどのディレクトリからも`composer`をコマンドラインから実行することができます。

<!--
Download and run [Composer-Setup.exe](https://getcomposer.org/Composer-Setup.exe),
it will install the latest Composer version and set up your PATH so that you can
just call `composer` from any directory in your command line.
-->

### 手動でインストール

`PATH`の通っているディレクトリに移動してcomposer.pharをダウンロードするため以下のインストールスニペットを実行してください。

<!--
Change to a directory on your `PATH` and run the install snippet to download
composer.phar:
-->

    C:\Users\username>cd C:\bin
    C:\bin>php -r "eval('?>'.file_get_contents('https://getcomposer.org/installer'));"

> **注意：** 上記がfile_get_contentsで失敗する場合、URLを`http`にするかphp.iniでphp_openssl.dllを有効にしてください。

<!--
> **Note:** If the above fails due to file_get_contents, use the `http` url or enable php_openssl.dll in php.ini
-->

新しく`composer.bat`ファイルを`composer.phar`と同じ場所に作成してください。

<!--
Create a new `composer.bat` file alongside `composer.phar`:
-->

    C:\bin>echo @php "%~dp0composer.phar" %*>composer.bat

現在のターミナルを閉じて、新しいターミナルで利用テストします:

<!--
Close your current terminal. Test usage with a new terminal:
-->

    C:\Users\username>composer -V
    Composer version 27d8904

    C:\Users\username>

## Composerを使う

プロジェクトの依存物をインストールするためにComposerを使いましょう。
もしカレントディレクトリに`composer.json`ファイルがない場合は
[基本的な使い方](01-basic-usage.html)の章へ跳んでください。

<!--
We will now use Composer to install the dependencies of the project. If you
don't have a `composer.json` file in the current directory please skip to the
[Basic Usage](01-basic-usage.md) chapter.
-->

依存関係を解決してインストールするために、`install`コマンドを実行します。

<!--
To resolve and download dependencies, run the `install` command:
-->

    $ php composer.phar install

グローバルにインストールしてpharを外しているなら、代わりに以下を実行します:

<!--
If you did a global install and do not have the phar in that directory
run this instead:
-->

    $ composer install

[前述](#declaring-dependencies)の例では、monologを`vendor/monolog/monolog`にダウンロードします。

<!--
Following the [example above](#declaring-dependencies), this will download
monolog into the `vendor/monolog/monolog` directory.
-->

## オートローディング

ライブラリのダウンロードだけでなく、Composerはオートロードファイルを用意します。
このファイルはダウンロードしたライブラリ内のすべてのクラスのオートローディングをおこないます。
これを使うためには、以下の一行をコードの起動プロセスに追加してください。

<!--
Besides downloading the library, Composer also prepares an autoload file that's
capable of autoloading all of the classes in any of the libraries that it
downloads. To use it, just add the following line to your code's bootstrap
process:
-->

    require 'vendor/autoload.php';

よっし！　monologの使用を今、開始しました! Composerについてもっと学び続けるために、"基本的な使い方"の章を続けて読みましょう。

<!--
Woah! Now start using monolog! To keep learning more about Composer, keep
reading the "Basic Usage" chapter.
-->

<p class="prev-next">
[基本的な使い方](01-basic-usage.html) &rarr;
</p>

<!--
[Basic Usage](01-basic-usage.md) &rarr;
-->
