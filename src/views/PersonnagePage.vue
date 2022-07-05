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
        :pagination="true"
        :scrollbar="true"
        :zoom="true"
      >
        <swiper-slide>
          <ion-text>
            <h4>1. Points de Caracteristiques</h4>
            <p>
              Répartissez 15 points dans 4 caracteristiques, au maximum 5 et
              minimum 1.
            </p></ion-text
          >
          <CaracteristiqueCard :caracteristique="Caracteristiques.VIGUEUR" />
          <CaracteristiqueCard :caracteristique="Caracteristiques.AGILITE" />
          <CaracteristiqueCard
            :caracteristique="Caracteristiques.INTELLIGENCE"
          />
          <CaracteristiqueCard :caracteristique="Caracteristiques.CHARISME" />
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
  IonText,
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
  data() {
    const Caracteristiques = Object.freeze({
      VIGUEUR: {
        Nom: "Vigueur",
        Description:
          "Traduit la force, la musculature, la vitalité et la robustesse physique",
        Attributs: [
          {
            Nom: "PV",
            Description: "Votre maximum de PV est egal à 10 + Vigueur",
          },
          {
            Nom: "Résilience",
            Description: "Vous avez 1 point de Résiliance par point de Vigueur",
          },
        ],
      },
      AGILITE: {
        Nom: "Agilité",
        Description:
          "Determine la souplesse, la finesse dans les mouvement et l'adresse.",
        Attributs: [
          {
            Nom: "Défense",
            Description: "Vous avez 1 point de Défence par point d'Agilité",
          },
        ],
      },
      INTELLIGENCE: {
        Nom: "Intelligence",
        Description:
          "Mesure la capacitée de raisonnement, la mémoire et la sagesse d'un personnage.",
        Attributs: [
          {
            Nom: "Stress",
            Description:
              "Votre seuil de stress est égale a Intelligence + Charisme",
          },
        ],
      },
      CHARISME: {
        Nom: "Charisme",
        Description:
          "Mesure la capacitée de raisonnement, la mémoire et la sagesse d'un personnage.",
        Attributs: [
          {
            Nom: "Stress",
            Description:
              "Votre seuil de stress est égale a Intelligence + Charisme",
          },
        ],
      },
    });
    return { modules: [Keyboard, Pagination], Caracteristiques };
  },
});
</script>
<style scoped></style>
