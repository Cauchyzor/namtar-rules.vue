<template>
  <!-- TODO : Personnage stockées en JSON + Stepper et sauvegarde -->
  <!-- TODO : Personnage stockées en JSON  : récuperation des personnage json -->
  <q-page padding>
    <h4 class="text-center">Caracteristiques</h4>
    <div class="text-center">
      <p>
        Un personnage possède 14 points répartis dans 5 caracteristiques, au
        maximum 5 et minimum 1.
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
    <h4 class="text-center">Compétences</h4>
    <div class="text-center">
      <p>
        Un personnage commence l'aventure avec un rang 1 dans 4 compétences au
        choix.
      </p>
    </div>
    <div class="row q-col-gutter-sm justify-center items-stretch">
      <div
        v-for="comp in CompetencesList"
        :key="comp.Nom"
        class="col-12 col-md-3 col-xl-2"
      >
        <CompetenceItem
          style="height: 100%"
          :Competence="comp"
        ></CompetenceItem>
      </div>
    </div>

    <h4 class="text-center">Ethnotraits</h4>
    <div class="text-center">
      <p>
        Si le personnage n'est pas humain, son espèce est caractérisée par un
        ensemble d'éthnotraits. Certains imposent de commencer l'aventure avec
        moins de points de caractéristique ou d'aptitude.
      </p>
      <q-btn
        to="/ethnotrait"
        label="Voir les ethnotraits"
        outline
        color="primary"
      />
    </div>

    <h4 class="text-center">Aptitudes</h4>
    <div class="text-center">
      <p>
        Les aptitudes sont des manifestations du fluide en réponse à la volonté
        de son utilisateur. Un personnage débute l'aventure avec 3 aptitudes
        parmi celles communément connue, ou créée de toute pièce.
      </p>
    </div>

    <div class="row justify-center">
      <q-btn
        class="q-ma-sm"
        to="/catalog"
        label="Liste des aptitudes"
        outline
        color="primary"
      />
      <q-btn
        class="q-ma-sm"
        to="/aptitude"
        label="Creer son aptitude"
        outline
        color="primary"
      />
    </div>

    <div class="row justify-center q-gutter-md">
      <AptitudeCard
        class="col-12 col-md-3 col-xl-2"
        v-for="Aptitude in AptitudeList"
        :key="Aptitude.Nom"
        :Aptitude="Aptitude"
      ></AptitudeCard>
    </div>
  </q-page>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import CaracteristiqueCard from "src/components/CaracteristiqueCard.vue";

import CompetenceItem from "src/components/CompetenceItem.vue";
import AptitudeCard from "src/components/AptitudeCard.vue";

import {
  CaracteristiqueService,
  CaracteritiqueName,
} from "src/domain/Caracteristique";

import { CompetenceService } from "src/domain/Competence";
import { AptitudeService } from "src/domain/Aptitude";

export default defineComponent({
  name: "PersonnagePage",
  components: {
    CaracteristiqueCard,
    CompetenceItem,
    AptitudeCard,
  },
  data() {
    return {
      SelectedCaracteristiqueCard: CaracteritiqueName.CHARISME,
      CaracteritiquesList: CaracteristiqueService.getAllCaracteristiques(),
      CompetencesList: CompetenceService.getAllCompetences(),
      AptitudeList: AptitudeService.getAllAptitudes().filter((_, i) => i < 3),
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
