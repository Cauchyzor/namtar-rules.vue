<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.params.id }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="title-section">
        <NamTitle class="page-title">{{ slideTitle }}</NamTitle>
        <ion-text>
          <p>{{ slideSubtitle }}</p>
        </ion-text>
      </div>
      <swiper
        :modules="modules"
        :autoplay="true"
        :keyboard="true"
        :pagination="{ type: 'progressbar' }"
        :parallax="true"
        :zoom="true"
        @slideChange="sliderChange"
        @swiper="sliderChange"
      >
        <swiper-slide>
          <CaracteristiqueCard
            v-for="carac in CaracteritiquesList"
            :key="carac.Nom"
            :Caracteristique="carac"
            :ShowAttribute="carac.Nom === SelectedCaracteristiqueCard"
            @click="selectCard(carac.Nom)"
          />
        </swiper-slide>
        <swiper-slide>
          <ion-grid>
            <ion-row v-for="row in CompetencesByRow" :key="row">
              <CompetenceCard
                v-for="comp in row"
                :key="comp.Nom"
                :Competence="comp"
              ></CompetenceCard>
            </ion-row>
          </ion-grid>
        </swiper-slide>
        <swiper-slide>
          <CapaciteItem
            v-for="capacite in CapaciteList"
            :key="capacite.Nom"
            :Capacite="capacite"
          ></CapaciteItem>
        </swiper-slide>
      </swiper>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText,
  IonGrid,
  IonRow,
} from "@ionic/vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Keyboard, Pagination, Parallax } from "swiper";

import CaracteristiqueCard from "@/components/CaracteristiqueCard.vue";
import CompetenceCard from "@/components/CompetenceCard.vue";
import CapaciteItem from "@/components/CapaciteItem.vue";
import NamTitle from "@/components/NamTitle.vue";

import {
  CaracteristiqueService,
  CaracteritiqueName,
} from "../domain/Caracteristique";
import { CompetenceService } from "@/domain/Competence";
import { CapaciteService } from "@/domain/Capacite";

import "swiper/css";
import "swiper/css/keyboard";
import "swiper/css/pagination";

export default defineComponent({
  name: "PersonnagePage",
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonText,
    Swiper,
    SwiperSlide,
    CaracteristiqueCard,
    CompetenceCard,
    CapaciteItem,
    NamTitle,
    IonGrid,
    IonRow,
  },
  data() {
    const competencesList = CompetenceService.getAllCompetences();
    const CompetencesByRow = [];
    // TODO : Faire une Hexagrid et cleaner ça
    CompetencesByRow.push(competencesList.splice(0, 2));
    CompetencesByRow.push(competencesList.splice(0, 3));
    CompetencesByRow.push(competencesList.splice(0, 3));
    CompetencesByRow.push(competencesList.splice(0, 3));
    CompetencesByRow.push(competencesList.splice(0, 3));
    CompetencesByRow.push(competencesList.splice(0, 2));
    return {
      modules: [Keyboard, Pagination, Parallax],

      activeSlideNumber: 0,
      CaracteritiquesList: CaracteristiqueService.getAllCaracteristiques(),
      SelectedCaracteristiqueCard: CaracteritiqueName.CHARISME,

      CompetencesByRow: CompetencesByRow,

      CapaciteList: CapaciteService.getAllCapacites(),
    };
  },
  computed: {
    slideTitle(): string {
      switch (this.activeSlideNumber) {
        case 0:
          return "Determiner les caracteritiques";
        case 1:
          return "Choisir des Competences";
        case 2:
          return "Selectionner des Capacitees";
        default:
          return "";
      }
    },
    slideSubtitle(): string {
      switch (this.activeSlideNumber) {
        case 0:
          return "Répartissez 15 points dans 4 caracteristiques, au maximum 5 et minimum 1.";
        case 1:
          return "Augmentez 1 fois le rang de 3 compétences au choix";
        case 2:
          return "Choisir les 4 Capacitées qui seront connues par votre personnage au debut de l'aventure";
        default:
          return "";
      }
    },
  },
  methods: {
    getCompetencesByCaracteristique(name: CaracteritiqueName) {
      return CompetenceService.getCompetencesByCaracteristique(name);
    },
    selectCard(caracNameSelected: CaracteritiqueName) {
      this.SelectedCaracteristiqueCard = caracNameSelected;
    },
    sliderChange(e: any): void {
      this.activeSlideNumber = e.activeIndex;
    },
  },
});
</script>
<style scoped>
.title-section {
  height: 100px;
}

ion-text {
  text-align: center;
  font-size: smaller;
}

ion-text > p {
  margin-left: 18px;
  margin-right: 18px;
}

ion-row {
  justify-content: center;
}
</style>
