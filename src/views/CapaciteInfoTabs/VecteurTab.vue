<template>
  <ion-page>
    <ion-content class="ion-padding">
      <NamTitle>Capacites</NamTitle>
      <NamTitle>Vecteur</NamTitle>
      <VecteurItem
        v-for="vecteur in Vecteurs"
        :key="vecteur.Nom"
        :Vecteur="vecteur"
      ></VecteurItem>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonContent, IonPage } from "@ionic/vue";

import NamTitle from "@/components/NamTitle.vue";
import { CapaciteService } from "@/domain/Capacite";
import VecteurItem from "@/components/VecteurItem.vue";

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    NamTitle,
    VecteurItem,
  },
  data() {
    return {
      Vecteurs: CapaciteService.getAllVecteur(),
    };
  },
});
</script>
