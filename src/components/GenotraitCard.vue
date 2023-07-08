<template>
  <q-card flat bordered>
    <q-card-section horizontal>
      <q-card-section vertical class="col-10">
        <div class="text-h5 q-mt-sm q-mb-xs">
          {{ Genotrait.Nom }}
        </div>
        <div class="text-caption text-grey">{{ Genotrait.Description }}</div>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { Genotrait } from 'src/domain/Genotrait';

export default defineComponent({
  props: {
    Genotrait: {
      type: Object as PropType<Genotrait>,
      required: true,
    },
    Disabled: { type: Boolean, required: false },
  },
  emits: ['rank-increased', 'rank-decreased'],
  methods: {
    increment() {
      this.$emit('rank-increased');
    },
    decrement() {
      this.$emit('rank-decreased');
    },
  },
});
</script>
<style scoped>
ion-text {
  font-size: x-small;
}
</style>
