<template>
  <q-page padding>
    <h3 class="text-center">Determiner les caracteritiques</h3>
    <div>
      <p>
        Répartissez 12 points dans 4 caracteristiques, au maximum 5 et minimum
        1.
      </p>
    </div>

    <div class="q-pa-md q-gutter-md row">
      <CaracteristiqueCard
        class="col-md col-sm-12"
        v-for="carac in CaracteritiquesList"
        :key="carac.Nom"
        :Caracteristique="carac"
        @click="selectCard(carac.Nom)"
      />
    </div>
    <h3 class="text-center">Choisir des Competences</h3>
    <div>
      <p>Augmentez 1 fois le rang de 4 compétences au choix</p>
    </div>
    <q-list separator bordered>
      <CompetenceItem
        v-for="comp in CompetencesList"
        :key="comp.Nom"
        :Competence="comp"
      ></CompetenceItem>
    </q-list>

    <h3 class="text-center">Selectionner des Capacites</h3>
    <div class="ion-padding-vertical ion-text-center">
      <p>
        Choisir les 3 Capacitées qui seront connues par votre personnage au
        debut de l'aventure
      </p>
    </div>

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

import CaracteristiqueCard from 'src/components/CaracteristiqueCard.vue';
import CompetenceItem from 'src/components/CompetenceItem.vue';
import AptitudeItem from 'src/components/AptitudeItem.vue';

import {
  CaracteristiqueService,
  CaracteritiqueName,
} from 'src/domain/Caracteristique';

import { CompetenceService } from 'src/domain/Competence';
import { AptitudeService } from 'src/domain/Aptitude';

export default defineComponent({
  name: 'PersonnagePage',
  components: {
    CaracteristiqueCard,
    CompetenceItem,
    AptitudeItem,
  },
  data() {
    return {
      SelectedCaracteristiqueCard: CaracteritiqueName.CHARISME,
      CaracteritiquesList: CaracteristiqueService.getAllCaracteristiques(),
      CompetencesList: CompetenceService.getAllCompetences(),
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
