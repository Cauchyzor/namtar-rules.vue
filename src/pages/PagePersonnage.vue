<template>
  <!-- TODO : Personnage stockées en JSON + Stepper et sauvegarde -->
  <!-- TODO : Personnage stockées en JSON  : récuperation des personnage json -->
  <q-page padding>
    <h5 class="text-center">Caracteristiques</h5>
    <div class="text-center">
      <p>
        Un personnage possède
        <strong
          >14 points répartis dans 5 caracteristiques, au maximum 5 et minimum
          2</strong
        >. Un humanoïde civilisé possède habituellement des
        caractéristiquescaractérisée entre 4 et 2 (4 représente un talent
        certain, 2 un retard notable).
      </p>
    </div>

    <div class="q-pa-md q-gutter-md row">
      <CaracteristiqueCard
        class="col-md col-sm-12 col-xs-12"
        v-for="carac in CaracteritiquesList"
        :key="carac.Nom"
        :Caracteristique="carac"
      />
    </div>

    <h5 class="text-center">Ethnotraits</h5>
    <div class="text-center">
      <p>
        Si le personnage n'est pas humain, son espèce est caractérisée par un
        ensemble d'ethnotraits. Certains imposent de commencer l'aventure avec
        moins de points de caractéristique ou d'aptitude.
      </p>
      <q-btn
        to="/ethnotrait"
        label="Voir les ethnotraits"
        outline
        color="primary"
      />
    </div>

    <h5 class="text-center">Compétences</h5>
    <div class="text-center">
      <p>
        Elles traduisent un savoir-faire dans une discipline
        <strong>sur une echelle de 0 à 3</strong>. Plus cette compétence possède
        un rang élevé, plus les chances de réussir sont élevées.
        <strong
          >Un personnage commence l'aventure avec 3 points qu'il peut répartir
          dans trois compétences différentes.</strong
        >
      </p>
    </div>
    <div class="row q-col-gutter-sm justify-center items-stretch">
      <div
        v-for="comp in CompetencesList"
        :key="comp.Nom"
        class="col-12 col-sm-4 col-md-3 col-xl-2"
      >
        <CompetenceItem
          style="height: 100%"
          :Competence="comp"
        ></CompetenceItem>
      </div>
    </div>

    <h5 class="text-center">Aptitudes</h5>
    <div class="text-center">
      <p>
        Pour chaque point investi dans les compétences, le personnage bénificie
        d'une <strong>aptitude</strong>. Elle represente aussi bien des don ou
        des capacitées en liens avec leurs compétences que des savoirs faire
        paranormaux liée à l'utilisation du fluide.
      </p>
    </div>

    <!-- <div class="row justify-center">
      <q-btn
        class="q-ma-sm"
        to="/apt/create"
        label="Creer son aptitude"
        outline
        color="primary"
      />
    </div> -->

    <div class="row justify-center q-col-gutter-md">
      <div
        class="col-xs-12 col-sm-6 col-md-3 col-xl-2"
        v-for="Aptitude in AptitudeList"
        :key="Aptitude.Nom"
      >
        <AptitudeCard style="height: 100%" :Aptitude="Aptitude"></AptitudeCard>
      </div>
    </div>
  </q-page>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import CaracteristiqueCard from "src/components/CaracteristiqueCard.vue";

import CompetenceItem from "src/components/CompetenceItem.vue";
import AptitudeCard from "src/components/AptitudeCard.vue";

import { CaracteristiqueService } from "src/model/Caracteristique";

import { CompetenceService } from "src/model/Competence";
import { ServiceAptitude } from "src/data/ServiceAptitude";

export default defineComponent({
  name: "PersonnagePage",
  components: {
    CaracteristiqueCard,
    CompetenceItem,
    AptitudeCard,
  },
  data() {
    return {
      CaracteritiquesList: CaracteristiqueService.getAllCaracteristiques(),
      CompetencesList: CompetenceService.getAllCompetences(),
      AptitudeList: ServiceAptitude.findAllAptitudes().filter((_, i) => i < 3),
    };
  },
});
</script>
<style scoped></style>
