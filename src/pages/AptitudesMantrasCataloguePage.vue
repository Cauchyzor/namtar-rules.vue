<template>
  <q-page padding>
    <h3 class="text-center">Liste des Mantra</h3>
    <div class="q-my-xl">
      Les mantras sont des aptitudes particulières qui représentent un marquage
      profond d'une créature par le fluide. Cette créature développe alors des
      capacités plus ou moins extraordinaires au prix d'un trait de comportement
      plus ou moins prononcé. Les mantras sont assez courants dans la galaxie
      parmi les utilisateurs du fluide. Certains marquages se retrouvent souvent
      dans certaines populations qui vivent des événements similaires. Les
      mantras peuvent être sélectionnés à la création du personnage, ou suite à
      un événement marquant impliquant le fluide. Les mantras sont définis par
      le Maitre du Jeu.
    </div>
    <q-list separator>
      <AptitudeItem
        v-for="Aptitude in MantrasList"
        :key="Aptitude.Nom"
        :Aptitude="Aptitude"
      ></AptitudeItem>
    </q-list>
  </q-page>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import AptitudeItem from 'src/components/AptitudeItem.vue';

import { AptitudeService, AptitudeTypeName } from 'src/domain/Aptitude';

export default defineComponent({
  name: 'PersonnagePage',
  components: {
    AptitudeItem,
  },
  data() {
    return {
      MantrasList: AptitudeService.getAllAptitudes().filter(
        (apt) => apt.Type.Nom === AptitudeTypeName.MANTRA
      ),
    };
  },
});
</script>
<style scoped></style>
