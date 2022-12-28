<template>
  <q-item>
    <q-item-section>
      <q-item-label> {{ Type.Nom }}</q-item-label>
    </q-item-section>
    <q-item-label>
      <p>{{ Type.Description }}</p>
      <!-- TODO : Ajouter Description de la Aptitude et travailler un look concis -->
    </q-item-label>
    <q-item-section side>
      <q-btn>Détail</q-btn>
    </q-item-section>
  </q-item>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { AptitudeType } from 'src/domain/Aptitude';

export default defineComponent({
  props: {
    Type: { type: Object as PropType<AptitudeType>, required: true },
  },
});
</script>
<style scoped>
</style>
