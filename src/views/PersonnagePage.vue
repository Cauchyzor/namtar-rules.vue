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
            <ion-grid fixed="true" id="grid-carac">
              <ion-row>
                <ion-col>
                  <CaracteristiqueCard
                    :bgImageURL="'mountain'"
                    :title="'Vigueur'"
                    :description="'Traduit la force, la musculature, la vitalité et la robustesse physique'"
                  />
                </ion-col>

                <ion-col>
                  <CaracteristiqueCard
                    :bgImageURL="'beach'"
                    :title="'Agilité'"
                    :description="`Traduit la souplesse, la finesse dans les mouvement et
                      l'adresse.`"
                  />
                </ion-col>
              </ion-row>

              <ion-row>
                <ion-col>
                  <CaracteristiqueCard
                    :bgImageURL="'desert'"
                    :title="'Intelligence'"
                    :description="`Représente capacitée de raisonnement, la mémoire et la
                      sagesse d'un personnage.`"
                  />
                </ion-col>
                <ion-col>
                  <CaracteristiqueCard
                    :bgImageURL="'galaxy'"
                    :title="'Charisme'"
                    :description="`Mesure l'aptitude à communiquer, guider, commander, ainsi
                      que l'intelligence émotionnelle.`"
                  />
                </ion-col>
              </ion-row>
            </ion-grid>
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
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";

import { pin } from "ionicons/icons";
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
    IonGrid,
    IonRow,
    IonCol,
    Swiper,
    SwiperSlide,
    CaracteristiqueCard,
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
ion-card {
  height: 200px;
}
</style>
