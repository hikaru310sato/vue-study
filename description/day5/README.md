# 4日目の内容

- 教材の第3回を読み進める
  - ListViewでメモをリスト表示する
  - メモを削除できるようにする


## 教材の第3回を読み進める

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

ListItemコンポーネントに削除ボタンを追加し、クリックされたときにremove()を呼ぶように変更

`src/js/_listitem.vue`

```
template: `
  <div class="list-item">

  ...
    <div>
      <button @click="remove(memo.id)">削除</button>
    </div>
  </div>
`,
...

...
methods: {
  remove(id) {
    // this.$parent(ListViewコンポーネント)に
    // 'remove' イベントをトリガーする
    this.$parent.$emit('remove', id)
  }
}

```

`src/js/_list.js`

```

...
template: `
  <div>
    <editor-view @add="add"></editor-view>
    <list-view :memos="memos" @remove="remove"></list-view>
  </div>
`,
...

...
methods: {
  ...
  remove(id) {
    // 該当する id を持つ要素の index を取得する
    const index = this.memos.findIndex((memo) => {
      return memo.id === id
    })
    // this.memos から index にある要素を削除する
    this.memos.splice(index, 1)
  }
},
...

```
