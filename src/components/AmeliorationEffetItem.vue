<template>
  <q-item>
    <q-item-section>
      <q-item-label lines="1">{{ Amelioration.Nom }}</q-item-label>
      <q-item-label caption lines="4">{{ Amelioration.Description }}</q-item-label>
      <!-- TODO : Ajouter Description de la Aptitude et travailler un look concis -->
    </q-item-section>
    <q-item-section>
      <q-btn flat>Détail</q-btn>
    </q-item-section>
  </q-item>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { AmeliorationEffet } from 'src/domain/Aptitude';

export default defineComponent({
  props: {
    Amelioration: {
      type: Object as PropType<AmeliorationEffet>,
      required: true,
    },
  },
});
</script>
<style scoped>
ion-text {
  font-size: x-small;
}
</style>
