<template>
  <q-card square flat class="bg-accent">
    <q-card-section horizontal>
      <q-card-section vertical>
        <div class="text-overline">{{ Competence.Nom }}</div>
        <div class="text-caption text-grey">
          {{ Competence.ShortDescription }}
        </div>
      </q-card-section>

      <q-card-section>
        <q-badge color="primary" outline>{{
          Competence.BaseCaracteristique
        }}</q-badge>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';

import type { Competence } from 'src/domain/Competence';
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
