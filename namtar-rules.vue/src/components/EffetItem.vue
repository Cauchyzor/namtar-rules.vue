<template>
  <q-item>
    <q-item-section top>
      <q-item-label>{{ Effet.Nom }}</q-item-label>
    </q-item-section>
    <q-item-section>
      <q-item-label> {{ Effet.Description }}</q-item-label>
      <!-- TODO : Ajouter Description de la Aptitude et travailler un look concis -->
    </q-item-section>

    <q-item-section side>
      <q-btn>Détail</q-btn>
    </q-item-section>
  </q-item>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { Effet } from 'src/domain/Aptitude';

export default defineComponent({
  props: {
    Effet: { type: Object as PropType<Effet>, required: true },
  },
});
</script>
<style scoped>
ion-text {
  font-size: x-small;
}
</style>
