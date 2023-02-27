<template>
  <q-card bordered>
    <q-card-section horizontal>
      <q-card-section vertical class="col-10">
        <div class="text-h5 q-mt-sm q-mb-xs">
          {{ Extension.Nom }}
        </div>
        <div class="text-caption text-grey">{{ Extension.Description }}</div>
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

import { ExtensionEffet } from 'src/domain/Aptitude';

export default defineComponent({
  props: {
    Extension: {
      type: Object as PropType<ExtensionEffet>,
      required: true,
    },
  },
  data() {
    return { Rank: ref(0) };
  },
  methods: {
    increment() {
      this.Rank = this.Rank + 1;
      console.log(this.Rank);
    },
    decrement() {
      this.Rank = this.Rank === 0 ? this.Rank : this.Rank - 1;
      console.log(this.Rank);
    },
    resetRank() {
      this.Rank = 0;
    },
  },
});
</script>
<style scoped>
ion-text {
  font-size: x-small;
}
</style>
