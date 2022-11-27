<template>
  <q-tab-panel name="Vecteur">
    <NamTitle>Aptitudes</NamTitle>
    <NamTitle>Vecteur</NamTitle>
    <VecteurItem
      v-for="vecteur in Vecteurs"
      :key="vecteur.Nom"
      :Vecteur="vecteur"
    ></VecteurItem>
  </q-tab-panel>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import NamTitle from 'src/components/NamTitle.vue';
import VecteurItem from 'src/components/VecteurItem.vue';

import { AptitudeService } from 'src/domain/Aptitude';

export default defineComponent({
  components: {
    NamTitle,
    VecteurItem,
  },
  data() {
    return {
      Vecteurs: AptitudeService.getAllVecteur(),
    };
  },
});
</script>
