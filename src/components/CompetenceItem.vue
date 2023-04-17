<template>
  <q-item class="bg-secondary">
    <q-item-section>
      <q-item-label class="text-overline">{{ Competence.Nom }}</q-item-label>
      <q-item-label caption lines="2">{{
        Competence.ShortDescription
      }}</q-item-label>
    </q-item-section>

    <q-item-section side top>
      <q-badge color="primary" outline>{{
        Competence.BaseCaracteristique
      }}</q-badge>
    </q-item-section>
  </q-item>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';

import type { Competence } from 'src/domain/Competence';
// TODO Caracteristiques de bases en badge
// TODO Revoir le style
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
