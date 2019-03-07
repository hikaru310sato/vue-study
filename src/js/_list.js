import Vue from 'vue'
import ListItem from './_listitem'
// import EditorView from './_editorview'
// import ListView from './_listview'

export default () => {
  new Vue({
    el: '#list',
    components: { ListItem },
    template: `
      <div>
        <list-item></list-item>
      </div>`,
    // render: h => h(ListItem),
  })
}
