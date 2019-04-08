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
import ListItem from './_listitem'
export default {
  components: { ListItem },
  props: {
    memos: Array
  },
};
</script>