<template>
  <div class="text">
    <h5 class="text-uppercase text-center">
      <slot></slot>
    </h5>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NamTitle',
});
</script>
<style scoped>
.text {
  font-family: 'Anurati';
}
</style>
