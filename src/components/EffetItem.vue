<template>
  <q-card bordered>
    <q-card-section horizontal>
      <q-card-section class="col-10" vertical>
        <div class="text-h5 q-mt-sm q-mb-xs">
          {{ Effet.Nom }}
        </div>
        <div class="text-caption text-grey">{{ Effet.Description }}</div>
      </q-card-section>
      <q-card-actions vertical class="col-2">
        <q-btn flat round @click="increment" icon="add"></q-btn>
        <q-btn flat round @click="decrement" icon="remove"></q-btn>
      </q-card-actions>
    </q-card-section>
  </q-card>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';

import { Effet } from 'src/domain/Aptitude';

export default defineComponent({
  props: {
    Effet: { type: Object as PropType<Effet>, required: true },
  },
  emits: ['rank-updated'],
  data() {
    return { Rank: ref(0) };
  },
  methods: {
    increment() {
      this.Rank = this.Rank + 1;
      this.$emit('rank-updated', this.Rank);
    },
    decrement() {
      this.Rank = this.Rank === 0 ? this.Rank : this.Rank - 1;
      this.$emit('rank-updated', this.Rank);
    },
    resetRank() {
      this.Rank = 0;
      this.$emit('rank-updated', this.Rank);
    },
  },
});
</script>
<style scoped>
ion-text {
  font-size: x-small;
}
</style>
