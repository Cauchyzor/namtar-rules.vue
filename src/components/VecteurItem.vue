<template>
  <q-item>
    <q-item-section>
      <q-item-label> {{ Vecteur.Nom }}</q-item-label>
    </q-item-section>
    <q-item-label>
      <p>{{ Vecteur.Description }}</p>
      <!-- TODO : Ajouter Description de la Aptitude et travailler un look concis -->
    </q-item-label>
    <q-item-section side>
      <q-btn>Détail</q-btn>
    </q-item-section>
  </q-item>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { Vecteur } from 'src/domain/Aptitude';

export default defineComponent({
  props: {
    Vecteur: { type: Object as PropType<Vecteur>, required: true },
  },
});
</script>
<style scoped>
ion-text {
  font-size: x-small;
}
</style>
