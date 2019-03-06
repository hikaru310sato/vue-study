# 3日目の内容

- 教材の第2回を読み進める


## 教材の第2回を読み進める

### DOM操作を行うディレクティブ

- Vue.jsにはディレクティブ（directive）と呼ばれる、DOM操作を行うための組み込みの機能がある
- ディレクティブにはv-という接頭辞が付けられている
- よく使用されるものについて解説

### イベントのハンドリングを行うv-on

- DOM上で起こるイベントをハンドリングするためのディレクティブ
- click以外にもsubmitやkeyupなど、DOM上で起こるイベントをハンドリング

### フォーム要素で便利なv-model

`src/js/_sample.js`

```
export default () => {
  new Vue({
    el: '#app',
    template: `<div>
      <input v-model="message">
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

### 条件によってDOMの表示／非表示を切り替えるv-ifとv-show

`src/js/_sample.js`

```
export default () => {
  new Vue({
    el: '#app',
    template: `<div>
      <input v-model="message">
      <button @click="increment">increment</button>
      <div v-if="count % 2 !== 0">{{messageAndCount}}</div>
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

#### v-ifとv-showの違い

- v-ifディレクティブはfalseと評価される値が指定されたときにDOM上から要素を取り除く
- v-showディレクティブはCSSのdisplayにnoneを指定して非表示にする
- v-ifディレクティブではfalseと評価される値が指定されたときにだけ表示される要素をv-elseディレクティブで指定することができる

`src/js/_sample.js`

```
export default () => {
  new Vue({
    el: '#app',
    template: `<div>
      <input v-model="message">
      <button @click="increment">increment</button>
      <div v-if="count % 2 !== 0">{{messageAndCount}}</div>
      <div v-else>この要素はcountが偶数のときに表示されます</div>
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

### 動的に属性値を割り当てるv-bind

- Stateや条件によって動的に値を適用したいときに使用

`src/js/_sample.js`

```
export default () => {
  new Vue({
    el: '#app',
    template: `<div>
      <input v-model="message">
      <button @click="increment">increment</button>
      <div v-bind:style="styleObject">{{messageAndCount}}</div>
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
      styleObject() {
        return {
          color: this.count % 2 !== 0 ? 'red' : 'blue',
          fontSize: '16px',
        }
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

### 繰り返し表示を行うv-for

`src/js/_sample.js`

```
export default () => {
  new Vue({
    el: '#app',
    template: `<div>
      <input v-model="message">
      <button @click="increment">increment</button>
      <div v-bind:style="styleObject">{{messageAndCount}}</div>
      <div>colors:
        <span v-for="color in colors" :style="{color}">{{color}} </span>
      </div>
      <div>users:
        <div v-for="user in users">
          {{user.id}}:{{user.name}}
        </div>
      </div>
    </div>`,
    data() {
      return {
        message: 'Hello Vue.js !!',
        count: 0,
        colors: ['red', 'blue', 'green'],
        users: [
          { id: 1, name: 'ユーザ１' },
          { id: 2, name: 'ユーザ２' },
        ],
      }
    },
    computed: {
      messageAndCount() {
        return `${this.message}:${this.count}`
      },
      styleObject() {
        return {
          color: this.count % 2 !== 0 ? 'red' : 'blue',
          fontSize: '16px',
        }
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
