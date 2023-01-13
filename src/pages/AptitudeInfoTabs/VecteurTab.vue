<template>
  <q-tab-panel name="Vecteur">
    <div class="row q-col-gutter-sm justify-center">
      <div v-for="vecteur in Vecteurs" :key="vecteur.Nom" class="col-12">
        <VecteurItem :Vecteur="vecteur"></VecteurItem>
      </div>
    </div>
  </q-tab-panel>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import VecteurItem from 'src/components/VecteurCard.vue';

import { AptitudeService } from 'src/domain/Aptitude';

export default defineComponent({
  components: {
    VecteurItem,
  },
  data() {
    return {
      Vecteurs: AptitudeService.getAllVecteur(),
    };
  },
});
</script>
