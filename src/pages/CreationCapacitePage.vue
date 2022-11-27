<template>
  <q-page padding>
    <NamTitle>Outil de creation de capacité</NamTitle>
    <!-- TODO : Stepper -->
    <!-- Tableau des Types de Capacitée + Selection-->
    <!-- Tableau des Vecteurs + Selection-->
    <!-- Tableau des Effets + Amelioration d'effets-->
    <!-- Info générales + Sauvegarde -->
  </q-page>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import NamTitle from 'src/components/NamTitle.vue';

export default defineComponent({
  name: 'CreationAptitudePage',
  components: {
    NamTitle,
  },
});
</script>
