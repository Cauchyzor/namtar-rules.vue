<template>
  <ion-card button="true" @click="showAttribute = !showAttribute">
    <ion-card-header>
      <ion-card-subtitle>{{ caracteristique.Description }}</ion-card-subtitle>
      <ion-card-title>{{ caracteristique.Nom }}</ion-card-title>
    </ion-card-header>
    <ion-card-content v-show="showAttribute">
      <ion-list :key="index" v-for="(item, index) in caracteristique.Attributs">
        <ion-item>
          <ion-icon :icon="getIcon(item)" slot="start"></ion-icon>
          <ion-label :key="index" slot="start">{{ item.Nom }}</ion-label>
          <ion-note slot="end">{{ item.Description }}</ion-note>
        </ion-item>
      </ion-list>
    </ion-card-content>
  </ion-card>
</template>
<script>
import { defineComponent } from "vue";

import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonIcon,
  IonLabel,
  IonNote,
  IonList,
  IonItem,
} from "@ionic/vue";

import { heart, heartCircle, flash, shieldHalf } from "ionicons/icons";

export default defineComponent({
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonIcon,
    IonLabel,
    IonNote,
    IonList,
    IonItem,
  },
  props: {
    caracteristique: Object,
  },
  data() {
    return { showAttribute: false, heart };
  },
  methods: {
    getIcon(item) {
      switch (item.Nom) {
        case "PV":
          return heart;
        case "Défense":
          return shieldHalf;
        case "Résilience":
          return heartCircle;
        case "Stress":
          return flash;
        default:
          return "";
      }
    },
  },
});
</script>
<style scoped>
</style>
