<template>
  <q-item>
    <q-item-section>
      <q-item-label class="text-overline">{{ Competence.Nom }}</q-item-label>
      <q-item-label caption lines="2">{{
        Competence.ShortDescription
      }}</q-item-label>
    </q-item-section>

    <q-item-section side top>
      <q-item-label caption>{{ Competence.BaseCaracteristique }}</q-item-label>
    </q-item-section>
  </q-item>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';

import type { Competence } from 'src/domain/Competence';

export default defineComponent({
  props: {
    showAttribute: Boolean,
    Competence: { type: Object as PropType<Competence>, required: true },
  },
  data() {
    const MARGIN_GUTTER_PX = 2;
    const SCREEN_SIZE = window.innerWidth;
    return {
      CardWidth: (SCREEN_SIZE - 5 * MARGIN_GUTTER_PX) / 4,
    };
  },
  mounted() {
    this.showAttribute;
    this.Competence;
  },
});
</script>
<style scoped>
ion-card {
  width: 100px;
  height: 73px;
  padding: 8px;
  margin: 2px;
  display: flex;
}
ion-text {
  font-size: smaller;
}
</style>
