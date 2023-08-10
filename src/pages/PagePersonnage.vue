<template>
  <!-- TODO : Personnage stockées en JSON + Stepper et sauvegarde -->
  <!-- TODO : Personnage stockées en JSON  : récuperation des personnage json -->
  <q-page padding>
    <h4>Caracteristiques innées</h4>
    <p>
      Certains aspects du personnage comme son espèce son physique sont
      déterminé à la création, et ne pourront plus être modifié par la suite.
      Sauf dans des conditions exceptionnellement autorisées par le MJ.
    </p>
    <h5 class="text-center">Caracteristiques</h5>
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

    <h5 class="text-center">Ethnotraits</h5>
    <div class="text-center">
      <p>
        Si le personnage n'est pas humain, son espèce est caractérisée par un
        ensemble d'ethnotraits. Certains imposent de commencer l'aventure avec
        moins de points de caractéristique ou d'aptitude. Les ethnotraits ont
        chacun un score de cohérence. Un personnage peut commencer une aventure
        avec autant d'ethnotrait qu'il le souhaite, mais sa valeur de cohérence
        au total doit être égale a 0.
      </p>
      <q-btn
        to="/ethnotrait"
        label="Voir les ethnotraits"
        outline
        color="primary"
      />
    </div>

    <h4>Point d'experience : le savoir acquis</h4>
    <p>
      Un personnage commence l'aventure avec un ensemble de 8 points
      d'expérience. À chaque gain de niveau, il en récupère 3 supplémentaire.
      Ces points d'expérience permettent de progresser dans le rang des
      compétences.
    </p>
    <h5 class="text-center">Compétences</h5>
    <div class="text-center">
      <p>
        Elles traduisent un savoir-faire dans une discipline générique. Plus
        cette compétence possède un rang élevé, plus les chances de réussir sont
        élevées. Augmenter son rang dans une compétence coûte autant de points
        d'expérience que le niveau du rang voulu. (exemple : passer de rang 2 à
        3 coute 3 points d'expériences)
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

    <h5 class="text-center">Aptitudes</h5>
    <div class="text-center">
      <p>
        Les aptitudes sont des talents que possède l'individu. Cela peut aussi
        bien faire référence à des techniques mise au point par l'individu qu'a
        manifestation du fluide enseignées par d'autres. Chaque emplacement
        d'aptitude coute 2 point d'experience.
      </p>
    </div>

    <div class="row justify-center">
      <q-btn
        class="q-ma-sm"
        to="/apt/create"
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
} from "src/model/Caracteristique";

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
      SelectedCaracteristiqueCard: CaracteritiqueName.CHARISME,
      CaracteritiquesList: CaracteristiqueService.getAllCaracteristiques(),
      CompetencesList: CompetenceService.getAllCompetences(),
      AptitudeList: ServiceAptitude.findAllAptitudes().filter((_, i) => i < 3),
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
