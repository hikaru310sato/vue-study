import Vue from 'vue'

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
