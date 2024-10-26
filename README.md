# sample-playwright-bdd

Playwright BDD 導入検証用 (introduction)

## 概要 (overview)

PlaywrightとBDDの動作確認のためのサンプル

## Requirement

推奨 (recommendation) node version -> newer LTS
[(Node Releases)](https://nodejs.org/en/about/previous-releases)

> [!TIP]
> node は nvm (Node Version Manager) での導入を推奨(recommendation)
> 
>   https://github.com/nvm-sh/nvm

## Installation & Usage

> [!IMPORTANT]
> task (go-task) のインストールが必要
> 
> ない場合は taskfile.yml に定義されているコマンドを直接実行できます
>
> 例： 「task bdd-test」
>   npx bddgen && npx playwright test

> [!TIP]
> task (go-task) の利用を推奨(recommendation)
> 
>   https://github.com/go-task/task

clone files

```shell
git clone https://github.com/o-kazuhide-takahashi/sample-playwright-bdd.git
```

npm install

```shell
cd sample-playwright-bdd
npm i --include=dev
```

execute test

サンプルテスト(feature)はgoogleとyahooを表示するシナリオ

```shell
task bdd
```

or 

```shell
npx bddgen && npx playwright test
```



## Licence

[MIT](https://github.com/o-kazuhide-takahashi/sample-playwright-bdd/LICENCE)
