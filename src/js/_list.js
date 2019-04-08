import Vue from 'vue'
// import ListItem from './_listitem'
import EditorView from './_editorview'
import ListView from './_listview'

export default () => {
  new Vue({
    el: '#list',
    data() {
      return {
        memos: [],
      }
    },
    components: { EditorView, ListView },
    template: `
      <div>
        <editor-view @add="add"></editor-view>
        <list-view :memos="memos" @remove="remove"></list-view>
      </div>`,
    methods: {
      add(newMemo) {
        newMemo.id = this.nextId
        this.memos.push(newMemo)
      },
      remove(id) {
        // 該当する id を持つ要素の index を取得する
        const index = this.memos.findIndex((memo) => {
          return memo.id === id
        })
        // this.memos から index にある要素を削除する
        this.memos.splice(index, 1)
      },
    },
    computed: {
      nextId() {
        // this.memos の中で一番大きい id + 1 を返す
        return this.memos.reduce((id, memo) => {
          return id < memo.id ? memo.id : id
        }, 0) + 1
      },
    },
  })
}
