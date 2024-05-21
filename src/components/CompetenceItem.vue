<template>
  <q-item>
    <q-item-section top>
      <q-item-label>{{ Competence.Nom }}</q-item-label>
      <q-item-label caption>
        {{ Competence.ShortDescription }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";

import type { Competence } from "src/model/Competence";
export default defineComponent({
  props: {
    Competence: { type: Object as PropType<Competence>, required: true },
  },
  mounted() {
    this.Competence;
  },
});
</script>
