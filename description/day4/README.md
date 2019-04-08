# 4日目の内容

- 教材の第3回を読み進める
  - ListItemコンポーネントでメモを表示する
    - テンプレートファイルの作成
  - EditorViewからメモを追加する
  - ListViewでメモをリスト表示する
  - メモを削除できるようにする


## 教材の第3回を読み進める

### ListItemコンポーネントでメモを表示する

#### テンプレートファイルの作成

- 以下の新規ファイルを作成
  - src/js/_list.js
  - src/js/_editorview.vue
  - src/js/_listitem.vue
  - src/js/_listview.vue

- 教材の第4回にある `vue-loaderを使ったコンポーネント開発` を先んじてしまうことになるが、ファイルを`.js`ではなく`.vue`で作成し実際の案件に即した形で進める

### EditorViewからメモを追加する

メモを追加するEditorViewコンポーネントを作成

`src/js/_editorview.vue`

```
<template>
  <div class="editor-view">
    <div>
      <label>内容：</label>
      <input v-model="input.text" placeholder="メモのタイトル">
    </div>
    <div>
      <label>日付：</label>
      <input type="date" v-model="input.date">
    </div>
    <div>
      <label>タグ：</label>
      <input v-model="input.tags" placeholder="空白区切りで指定">
    </div>
    <div>
      <button @click="save">保存</button>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      input: {
        text: '',
        date: '',
        tags: '',
      }
    };
  },
  computed: {
    tagsArr() {
      // input.tags の文字列を空白で区切って配列に変換する
      return this.input.tags.trim() !== '' ? this.input.tags.trim().split(/\s+/) : []
    },
  },
  methods: {
    save() {
      // this.input のクローンを生成する
      const data = Object.assign({}, this.input, {tags: this.tagsArr})
      // 'add'イベントを自身にトリガーする
      this.$emit('add', data)
    },
  },
};
</script>
```

呼び出し側でコンポーネント&メソッド登録

`src/js/_list.js`

```
import EditorView from './_editorview'
...

template: `
  <div>
    <editor-view @add="add"></editor-view>
    <list-item></list-item>
  </div>`,
...

methods: {
  add(newMemo) {
    Object.assign(this.memo, newMemo)
  }
}

```

EditorViewからのデータをListItemで受け取れるようにする

`src/js/_list.js`

```
...
template: `
  <div>
    <editor-view @add="add"></editor-view>
    <list-item :memo="memo"></list-item>
  </div>`,
...

```

`src/js/_listitem.vue`

```

...
props: {
  memo: Object
},
...

```


### ListViewでメモをリスト表示する

複数のメモをリスト表示できるように、ListViewコンポーネントを作成

`src/js/_listview.vue`

```
<template>
  <div class="list-view">
    <div v-if="memos && memos.length !== 0">
      <list-item
        v-for="memo in memos"
        :key="memo.id"
        :memo="memo">
      </list-item>
    </div>
    <div v-else>
      表示できるメモがありません。
    </div>
  </div>

</template>

<script>
export default {
  props: {
    memos: Array
  },
};
</script>
```

ListViewコンポーネントにmemosを渡すように_list.jsを変更

`src/js/_list.js`

```
import ListView from './_listview'
...

data() {
  return {
    memos: []
  }
},
...

template: `
  <div>
    <editor-view @add="add"></editor-view>
    <list-view :memos="memos"></list-view>
  </div>
`,
...

methods: {
  add(newMemo) {
    newMemo.id = this.nextId
    this.memos.push(newMemo)
  },
},
computed: {
  nextId() {
    // this.memos の中で一番大きい id + 1 を返す
    return this.memos.reduce((id, memo) => {
        return id < memo.id ? memo.id : id
      }, 0) + 1
  }
}

```


### メモを削除できるようにする
