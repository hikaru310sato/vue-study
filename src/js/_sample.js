import Vue from 'vue'

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
