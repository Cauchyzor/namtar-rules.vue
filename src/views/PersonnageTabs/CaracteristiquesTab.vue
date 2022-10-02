<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Amelioration d'effets</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <NamTitle>Determiner les caracteritiques</NamTitle>
      <ion-text>Répartissez 12 points dans 4 caracteristiques, au maximum 5 et minimum 1.</ion-text>

      <CaracteristiqueCard
        v-for="carac in CaracteritiquesList"
        :key="carac.Nom"
        :Caracteristique="carac"
        :ShowAttribute="carac.Nom === SelectedCaracteristiqueCard"
        @click="selectCard(carac.Nom)"
      />
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonText,
  IonToolbar,
} from "@ionic/vue";

import NamTitle from "@/components/NamTitle.vue";
import {
  CaracteristiqueService,
  CaracteritiqueName,
} from "@/domain/Caracteristique";
import CaracteristiqueCard from "@/components/CaracteristiqueCard.vue";

export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    NamTitle,
    IonText,
    CaracteristiqueCard,
  },
  data() {
    return {
      SelectedCaracteristiqueCard: CaracteritiqueName.CHARISME,
      CaracteritiquesList: CaracteristiqueService.getAllCaracteristiques(),
    };
  },
  methods: {
    selectCard(caracNameSelected: CaracteritiqueName) {
      this.SelectedCaracteristiqueCard = caracNameSelected;
    },
  },
});
</script>
<style>
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
  