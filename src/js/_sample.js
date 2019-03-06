import Vue from 'vue'

export default () => {
  new Vue({
    el: '#app',
    template: `<div>
      {{message}}
    </div>`,
    data() {
      return {
        message: 'Hello Vue.js !!',
      }
    },
  })
}
