<template>
  <div class="list-item">
    <div>
      <span>id</span>：
      <span>{{memo.id}}</span>
    </div>
    <div>
      <span>text</span>：
      <span>{{memo.text}}</span>
    </div>
    <div>
      <span>date</span>：
      <span>{{memo.date}}</span>
    </div>
    <div>
      <span>tags</span>：
      <span>
        <span v-for="tag in memo.tags">{{tag}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    memo: Object
  },
};
</script>