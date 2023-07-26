<template>
  <q-item>
    <q-item-section top>
      <q-item-label header>{{ Competence.Nom }}</q-item-label>
      <q-item-label caption>
        {{ Competence.ShortDescription }}
      </q-item-label>
    </q-item-section>
    <q-item-section side>
      <q-badge color="primary" outline>{{
        Competence.BaseCaracteristique
      }}</q-badge>
    </q-item-section>
  </q-item>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";

import type { Competence } from "src/domain/Competence";
export default defineComponent({
  props: {
    showAttribute: Boolean,
    Competence: { type: Object as PropType<Competence>, required: true },
  },
  mounted() {
    this.showAttribute;
    this.Competence;
  },
});
</script>
