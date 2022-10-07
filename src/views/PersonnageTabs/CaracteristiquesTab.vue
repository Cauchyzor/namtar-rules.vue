<template>
  <ion-page>
    <ion-content class="ion-padding">
      <NamTitle>Determiner les caracteritiques</NamTitle>
      <div class="ion-padding-vertical ion-text-center">
        <ion-text
          >Répartissez 12 points dans 4 caracteristiques, au maximum 5 et
          minimum 1.</ion-text
        >
      </div>

      <CaracteristiqueCard
        v-for="carac in CaracteritiquesList"
        :key="carac.Nom"
        :Caracteristique="carac"
        @click="selectCard(carac.Nom)"
      />
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { IonContent, IonPage, IonText } from "@ionic/vue";

import NamTitle from "@/components/NamTitle.vue";
import {
  CaracteristiqueService,
  CaracteritiqueName,
} from "@/domain/Caracteristique";
import CaracteristiqueCard from "@/components/CaracteristiqueCard.vue";

export default defineComponent({
  components: {
    IonContent,
    IonPage,
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
<style></style>
