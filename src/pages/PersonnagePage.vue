<template>
  <q-page padding>
    <NamTitle>Determiner les caracteritiques</NamTitle>
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
    <NamTitle>Choisir des Competences</NamTitle>
    <div>
      <p>Augmentez 1 fois le rang de 4 compétences au choix</p>
    </div>
    <q-list separator bordered>
      <CompetenceCard
        v-for="comp in CompetencesList"
        :key="comp.Nom"
        :Competence="comp"
      ></CompetenceCard>
    </q-list>

    <NamTitle>Selectionner des Capacites</NamTitle>
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

import NamTitle from 'src/components/NamTitle.vue';
import CaracteristiqueCard from 'src/components/CaracteristiqueCard.vue';
import CompetenceCard from 'src/components/CompetenceCard.vue';
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
    NamTitle,
    CaracteristiqueCard,
    CompetenceCard,
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
