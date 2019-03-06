# 1日目の内容

- テンプレートをDL
- npmでvueを動かすためのパッケージをインストール
- 各種設定ファイルの変更


## テンプレートをDL

下記をダウンロード

https://github.com/gurunavi-creators/gnavi-npm-scripts-boiler-pug


## vueパッケージをインストール

```
npm i -D vue vue-loader vue-template-compiler
```

上記完了後

```
npm run build
npm run watch
```


## 各種設定ファイルの変更

### webpack.js

#### jquery記述削除

```
plugins: [
  new webpack.ProvidePlugin({
    jQuery: 'jquery',
    $: 'jquery'
  })
]
```

#### vue-loader追加

```
const { VueLoaderPlugin } = require("vue-loader");

...

...
module: {
    rules: [
        // 追加部分
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
        // 追加部分
    ]
  },
...

...
plugins: [new VueLoaderPlugin()],
```

#### vue-template-compilerの追加

```
resolve: {
  // import './foo.vue' の代わりに import './foo' と書けるようになる(拡張子省略)
  extensions: ['.js', '.vue'],
  alias: {
    Root: path.join(__dirname, '/src/js/'),
    // vue-template-compilerに読ませてコンパイルするために必要
    vue$: 'vue/dist/vue.esm.js',
  },
},
```

---

### eslintrc.js

#### jsx記法でエラーが出ないように変更

```
rules: {
  ...
  "import/no-named-as-default": 0,
  "import/no-named-as-default-member": 0,
  ...
},
```
