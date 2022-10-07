<template>
  <ion-page>
    <ion-content class="ion-padding">
      <NamTitle>Selectionner des Capacités</NamTitle>
      <div class="ion-padding-vertical ion-text-center">
        <ion-text class="ion-text-justify"
          >Choisir les 3 Capacitées qui seront connues par votre personnage au
          debut de l'aventure</ion-text
        >
      </div>

      <CapaciteItem
        v-for="capacite in CapaciteList"
        :key="capacite.Nom"
        :Capacite="capacite"
      ></CapaciteItem>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { IonContent, IonPage, IonText } from "@ionic/vue";

import NamTitle from "@/components/NamTitle.vue";
import { CapaciteService } from "@/domain/Capacite";
import CapaciteItem from "@/components/CapaciteItem.vue";

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    IonText,
    NamTitle,
    CapaciteItem,
  },
  data() {
    return {
      CapaciteList: CapaciteService.getAllCapacites(),
    };
  },
});
</script>
<style></style>
