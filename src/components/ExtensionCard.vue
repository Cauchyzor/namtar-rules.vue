<template>
  <q-card flat bordered>
    <q-card-section horizontal>
      <q-card-section vertical class="col-10">
        <div class="text-h5 q-mt-sm q-mb-xs">
          {{ Extension.Nom }}
          <q-badge v-if="Rank && Rank > 0" color="primary" floating>{{
            Rank
          }}</q-badge>
        </div>
        <div class="text-caption text-grey">{{ Extension.Description }}</div>
      </q-card-section>
      <q-card-actions vertical class="col-2">
        <q-btn
          outline
          color="primary"
          icon="add"
          @click="increment"
          :disable="Disabled"
          :dimmed="Disabled"
        ></q-btn>
        <q-btn outline color="primary" @click="decrement" icon="remove"></q-btn>
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
    Disabled: { type: Boolean, required: false },
    Rank: { type: Number, required: false },
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
