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

      <swiper
        :modules="modules"
        :autoplay="true"
        :keyboard="true"
        :pagination="{ type: 'progressbar' }"
        :zoom="true"
      >
        <swiper-slide>
          <ion-text>
            <h1>Determiner les Caracteristiques</h1>
          </ion-text>
          <ion-text>
            <p>
              Répartissez 15 points dans 4 caracteristiques, au maximum 5 et
              minimum 1.
            </p>
          </ion-text>
          <CaracteristiqueCard :caracteristique="CARACTERISTIQUES.VIGUEUR" />
          <CaracteristiqueCard :caracteristique="CARACTERISTIQUES.AGILITE" />
          <CaracteristiqueCard
            :caracteristique="CARACTERISTIQUES.INTELLIGENCE"
          />
          <CaracteristiqueCard :caracteristique="CARACTERISTIQUES.CHARISME" />
        </swiper-slide>
        <swiper-slide>
          <h1>2. Choix des Compétences</h1>
        </swiper-slide>
        <swiper-slide>
          <h1>Au dela du niveau 1</h1>
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
} from "@ionic/vue";

import { Swiper, SwiperSlide } from "swiper/vue";

import { Keyboard, Pagination } from "swiper";

import CaracteristiqueCard from "./CaracteristiqueCard.vue";
import { CARACTERISTIQUES } from "../domain/Caracteristique";

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
  },
  data() {
    return { modules: [Keyboard, Pagination], CARACTERISTIQUES };
  },
});
</script>
<style scoped>
ion-text {
  text-align: center;
}

ion-text > p {
  margin-left: 18px;
  margin-right: 18px;
}
</style>
