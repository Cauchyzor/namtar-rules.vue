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
        <q-btn
          flat
          round
          @click="increment"
          :disable="Disabled"
          icon="add"
        ></q-btn>
        <q-btn flat round @click="decrement" icon="remove"></q-btn>
      </q-card-actions>
    </q-card-section>
  </q-card>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { ExtensionEffet } from 'src/domain/Aptitude';

export default defineComponent({
  props: {
    Extension: {
      type: Object as PropType<ExtensionEffet>,
      required: true,
    },
    Disabled: { type: Object as PropType<boolean>, required: false },
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
