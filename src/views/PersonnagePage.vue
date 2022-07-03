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

      <div id="container">
        <swiper :modules="modules" :autoplay="true" :keyboard="true" :pagination="true" :scrollbar="true" :zoom="true">
          <swiper-slide>
            <h4>1. Points de Caracteristiques</h4>
            <ion-text>Répartissez 15 points dans 4 caracteristiques, au maximum 5 et minimum 1.</ion-text>
            <CaracteristiqueCard :type="'Vigueur'" />
            <CaracteristiqueCard :type="'Agilité'" />
            <CaracteristiqueCard :type="'Intelligence'" />
            <CaracteristiqueCard :type="'Charisme'" />
          </swiper-slide>
          <swiper-slide>
            <h1>2. Choix des Compétences</h1>
          </swiper-slide>
          <swiper-slide>
            <h1>Au dela du niveau 1</h1>
          </swiper-slide>
        </swiper>
      </div>
    </ion-content>
  </ion-page>
</template>
<script>
import { defineComponent } from "vue";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText
} from "@ionic/vue";

import { Swiper, SwiperSlide } from "swiper/vue";

import { Keyboard, Pagination } from "swiper";

import CaracteristiqueCard from "./CaracteristiqueCard.vue";

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
  setup() {
    return { modules: [Keyboard, Pagination] };
  },
});
</script>
<style scoped>

</style>
