<template>
  <q-page padding>
    <!-- TODO : Personnage stockées en JSON + Stepper et sauvegarde -->
    <!-- TODO : Personnage stockées en JSON  : récupération des personnage json -->
    <!-- TODO : Décrire les attribut comme des "dés" plutôt que des points -->
    <h5 class="text-center">Étape 1 : Établir le concept du personnage</h5>
    <p>
      La galaxie est remplie de profils atypique près a l'aventure. Commencer
      par vous demander comment vous définiriez votre personnage dans les grande
      lignes... Est-il un combattant aguerri au corps à corps, abordant les
      situation avec confiance et insouciance ? Est-il plutôt quelqu'un de
      scolaire et instruit, s'adressant aux autre avec suffisance ? A t'il une
      histoire dramatique qu'il préférerai cacher au yeux des autres ?
    </p>
    <p>
      Inutile de connaître tout les petits détails à l'avance, d'autant plus
      qu'en avançant dans la creation de personnage, vous découvrirez des
      concepts qui pourront vous inspirer. Il s'agit ici d'identifier une base
      vous guidera vers votre personnage final !
    </p>
    <h5 class="text-center">Étape 2 : Determiner ses Caractéristiques</h5>
    <div class="text-center">
      <p>
        Un personnage possède
        <strong
          >14 points répartis dans 5 caractéristiques, au maximum 5 et minimum
          2</strong
        >. Un humanoïde civilisé possède habituellement des valeurs de
        caractéristiques entre 4 et 2 (4 représente un talent certain, 2 un
        retard notable).
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

    <!-- <h5 class="text-center">Ethnotraits</h5>
    <div class="text-center">
      <p>
        Si le personnage n'est pas humain, son espèce est caractérisée par un
        ensemble d'ethnotraits. Certains imposent de commencer l'aventure avec
        moins de points de caractéristique ou d'aptitude.
      </p>
      <q-btn
        to="/character/ethnotraits"
        label="Voir les ethnotraits"
        outline
        color="primary"
      />
    </div> -->

    <h5 class="text-center">Etape 4 : Identifier ses compétences</h5>
    <div class="text-center">
      <p>
        Elles traduisent un savoir-faire dans une discipline
        <strong>par un rang de niveaux de 0 à 2</strong>. Plus cette compétence
        possède un rang élevé, plus les chances de réussir sont élevées. Un
        personnage de niveau 1 commence l'aventure avec
        <strong>3 compétences de rang 1.</strong>
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

    <h5 class="text-center">Etape 5 : Choisir ses aptitudes de départ</h5>
    <div class="text-center">
      <p>
        Pour chaque point investi dans les compétences, le personnage bénéficie
        d'une <strong>aptitude</strong>. Elle représente aussi bien des don ou
        des capacités en liens avec leurs compétences que des savoirs faire
        paranormaux liée à l'utilisation du fluide.
      </p>
    </div>

    <div class="row justify-center q-col-gutter-md">
      <div
        class="col-xs-12 col-sm-6 col-md-3 col-xl-2"
        v-for="Aptitude in AptitudeList"
        :key="Aptitude.Nom"
      >
        <AptitudeCard style="height: 100%" :Aptitude="Aptitude"></AptitudeCard>
      </div>
    </div>

    <h5 class="text-center">Etape 6 : Équiper son personnage</h5>
    <p>
      La liste de l’équipement courant que l'on trouve aux 4 coins de la galaxie
      est disponible dans la section dédiée. En accord avec votre MJ, vous
      pouvez choisir l’équipement que votre personnage apporte avec lui pour sa
      première aventure. Elle peut-être achetée récemment, obtenu part des
      tiers, par des dons ou encore en contractant des obligations.
    </p>
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
