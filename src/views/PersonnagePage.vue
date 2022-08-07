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

      <swiper :modules="modules" :autoplay="true" :keyboard="true" :pagination="{ type: 'progressbar' }"
        :parallax="true" :zoom="true">
        <swiper-slide>
          <ion-text>
            <h5 class="page-title">Determiner les caracteritiques</h5>
          </ion-text>
          <ion-text>
            <p>
              Répartissez 15 points dans 4 caracteristiques, au maximum 5 et
              minimum 1.
            </p>
          </ion-text>
          <CaracteristiqueCard v-for="(carac) in CaracteritiquesList" :key="carac.Nom" :Caracteristique="carac"
            :ShowAttribute="carac.Nom === selectedCaracteristiqueCard" @click="selectCard(carac.Nom)" />
        </swiper-slide>
        <swiper-slide>
          <ion-text>
            <h5 class="page-title">Choisir des Competences</h5>
          </ion-text>
          <ion-text>
            <p>Augmentez 1 fois le rang de 3 compétences au choix</p>
          </ion-text>
          <ion-list>
            <template v-for="(carac) in CaracteritiquesList" :key="carac">
              <ion-item-divider sticky="true">
                <ion-label> {{ carac.Nom }} </ion-label>
              </ion-item-divider>
              <ion-item v-for="competence in getCompetencesByCaracteristique(carac.Nom)" :key="competence.Nom">
                <ion-label>{{ competence.Nom }}</ion-label>
              </ion-item>
            </template>
          </ion-list>
        </swiper-slide>
        <swiper-slide>
          <ion-text>
            <h5 class="page-title">Selectionner des Capacitees</h5>
          </ion-text>
          <ion-item v-for="capacite in CapaciteList" :key="capacite.Nom">
            <ion-label>{{ capacite.Nom }}</ion-label>
          </ion-item>
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
  IonItemDivider,
  IonItem,
  IonLabel,
  IonList,
} from "@ionic/vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Keyboard, Pagination, Parallax } from "swiper";

import CaracteristiqueCard from "./CaracteristiqueCard.vue";
import { CaracteristiqueService, CaracteritiqueName } from "../domain/Caracteristique";
import { CompetenceService } from "../domain/Competence";
import { CapaciteService } from "../domain/Capacite";

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
    IonList,
    IonItem,
    IonItemDivider,
    IonLabel,
  },
  data() {
    return {
      modules: [Keyboard, Pagination, Parallax],
      CaracteritiquesList: CaracteristiqueService.getAllCaracteristiques(),
      CapaciteList: CapaciteService.getAllCapacites(),
      selectedCaracteristiqueCard: CaracteritiqueName.VIGUEUR
    }
  },
  methods: {
    getCompetencesByCaracteristique(name: CaracteritiqueName) {
      return CompetenceService.getCompetencesByCaracteristique(name)
    },
    selectCard(caracNameSelected: CaracteritiqueName) {
      this.selectedCaracteristiqueCard = caracNameSelected
    }
  },
});
</script>
<style scoped>
.page-title {
  text-transform: Uppercase;
  font-family: "Anurati-Regular";
}

ion-text {
  text-align: center;
  font-size: smaller;
}

ion-text>p {
  margin-left: 18px;
  margin-right: 18px;
}
</style>
