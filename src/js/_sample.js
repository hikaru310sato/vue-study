import Vue from 'vue'

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
