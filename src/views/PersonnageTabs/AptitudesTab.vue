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

      <AptitudeItem
        v-for="Aptitude in AptitudeList"
        :key="Aptitude.Nom"
        :Aptitude="Aptitude"
      ></AptitudeItem>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { IonContent, IonPage, IonText } from "@ionic/vue";

import NamTitle from "@/components/NamTitle.vue";
import { AptitudeService } from "@/domain/Aptitude";
import AptitudeItem from "@/components/AptitudeItem.vue";

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    IonText,
    NamTitle,
    AptitudeItem,
  },
  data() {
    return {
      AptitudeList: AptitudeService.getAllAptitudes(),
    };
  },
});
</script>
<style></style>
