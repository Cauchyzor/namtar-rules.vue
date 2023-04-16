<template>
  <q-page padding>
    <h3 class="text-center">Liste des Aptitudes</h3>
    <q-list separator>
      <AptitudeItem
        v-for="Aptitude in AptitudeList"
        :key="Aptitude.Nom"
        :Aptitude="Aptitude"
      ></AptitudeItem>
    </q-list>
  </q-page>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import AptitudeItem from 'src/components/AptitudeItem.vue';

import {
  CaracteristiqueService,
  CaracteritiqueName,
} from 'src/domain/Caracteristique';

import { AptitudeService } from 'src/domain/Aptitude';

export default defineComponent({
  name: 'PersonnagePage',
  components: {
    AptitudeItem,
  },
  data() {
    return {
      SelectedCaracteristiqueCard: CaracteritiqueName.CHARISME,
      CaracteritiquesList: CaracteristiqueService.getAllCaracteristiques(),
      AptitudeList: AptitudeService.getAllAptitudes(),
    };
  },
  methods: {
    selectCard(caracNameSelected: CaracteritiqueName) {
      this.SelectedCaracteristiqueCard = caracNameSelected;
    },
  },
});
</script>
<style scoped></style>
