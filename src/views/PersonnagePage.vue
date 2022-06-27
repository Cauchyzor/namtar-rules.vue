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
        <swiper
          :modules="modules"
          :autoplay="true"
          :keyboard="true"
          :pagination="true"
          :scrollbar="true"
          :zoom="true"
        >
          <swiper-slide>
            <ion-card>
              <ion-card-header>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                <ion-card-title>Vigueur</ion-card-title>
              </ion-card-header>

              <ion-card-content>
                Traduit la force, la musculature, la vitalité et la robustesse
                physique.
              </ion-card-content>
            </ion-card>
            <ion-card>
              <ion-card-header>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                <ion-card-title>Agilité</ion-card-title>
              </ion-card-header>

              <ion-card-content>
                Traduit la souplesse, la finesse dans les mouvement et
                l'adresse.
              </ion-card-content>
            </ion-card>
            <ion-card>
              <ion-card-header>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                <ion-card-title>Intelligence</ion-card-title>
              </ion-card-header>

              <ion-card-content>
                Représente capacitée de raisonnement, la mémoire et la sagesse
                d'un personnage.
              </ion-card-content>
            </ion-card>
            <ion-card>
              <ion-card-header>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                <ion-card-title>Charisme</ion-card-title>
              </ion-card-header>

              <ion-card-content>
                Mesure l'aptitude à communiquer, guider, commander, mais aussi
                l'empathie et l'intelligence émotionnelle.
              </ion-card-content>
            </ion-card>
          </swiper-slide>
          <swiper-slide>
            <h1>2. Choix des Compétences</h1>
          </swiper-slide>
          <swiper-slide>
            <h1>Au dela du niveau 1</h1>
          </swiper-slide>
        </swiper>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
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
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCardSubtitle,
} from "@ionic/vue";
import { pin } from "ionicons/icons";
import { Swiper, SwiperSlide } from "swiper/vue";

import { Keyboard, Pagination } from "swiper";

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
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return { modules: [Keyboard, Pagination], pin };
  },
});
</script>
<style scoped>
@import "/src/styles/background.css";
#container {
  height: 100%;
}
.swiper {
  height: 100%;
}
</style>
