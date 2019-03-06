# 2日目の内容

- 実際にvueをうごかしてみる
- 教材の第2回を読み進める


## 実際にvueをうごかしてみる

HTML側にvueがマウントする要素を用意

`src/pug/page/index.pug`

```
block body
  h1 body
  ul
    for data in page_data
      li
        h2= data.title
        p= data.text

  #app  //追加
```

JSを書いていく

`src/js/common.js`

```
import Sample from './_sample'

Sample()
```

`src/js/_sample.js`

```
import Vue from 'vue'

export default () => {
  new Vue({
    el: '#app',
    template:
     `<div>
        app
    </div>`,
  })
}
```

これでコンパイルが完了すればブラウザ上にappの文字列が表示される


## 教材の第2回を読み進める

### VueインスタンスとDOM要素を紐付ける

上記参照

### State（状態）を持たせる

`src/js/_sample.js`

```
export default () => {
  new Vue({
    el: '#app',
    template: `<div>
      {{message}}
    </div>`,
    data() {
      return {
        message: 'Hello Vue.js !!'
      }
    },
  })
}
```

### メソッドを定義する

`src/js/_sample.js`

```
export default () => {
  new Vue({
    el: '#app',
    template: `<div>
      {{message}}:{{count}}
    </div>`,
    data() {
      return {
        message: 'Hello Vue.js !!',
        count: 0,
      }
    },
    methods: {
      increment() {
        this.count += 1
      },
    },
  })
}
```

### templateからメソッドを呼び出す

`src/js/_sample.js`

```
export default () => {
  new Vue({
    el: '#app',
    template: `<div>
      <button v-on:click="increment">increment</button>
      <div>{{message}}:{{count}}</div>
    </div>`,
    data() {
      return {
        message: 'Hello Vue.js !!',
        count: 0,
      }
    },
    methods: {
      increment() {
        this.count += 1
      },
    },
  })
}
```

### 算出プロパティを利用する

- プロパティ同士を計算した結果を表示したり、Stateによって条件判定を行うなど、なんらかの処理を加えた値を表示する場合に使用

`src/js/_sample.js`

```
export default () => {
  new Vue({
    el: '#app',
    template: `<div>
      <button @click="increment">increment</button>
      <div>{{messageAndCount}}</div>
    </div>`,
    data() {
      return {
        message: 'Hello Vue.js !!',
        count: 0,
      }
    },
    computed: {
      messageAndCount() {
        return `${this.message}:${this.count}`
      },
    },
    methods: {
      increment() {
        this.count += 1
      },
    },
  })
}
```


## 質問・疑問

Q 複数の要素に同じ要素をマウントしたい時はどうすれば？

A 作り的に一つの `new Vue({...})` の中では一つ要素にしかマウントできないようになっているようです。vueのお作法。

参考：https://qiita.com/okmttdhr/items/63c01d31bf7b0d96ef0e