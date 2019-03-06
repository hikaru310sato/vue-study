import Vue from 'vue'

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
