<template>
  <ion-item>
    <ion-thumbnail slot="start">
      <img :src="Aptitude.Image || 'assets/icon/icon.png'" />
    </ion-thumbnail>
    <ion-label class="ion-text-wrap">
      <p>{{ Aptitude.Nom }}</p>
      <!-- TODO : Ajouter Description de la Aptitude et travailler un look concis -->
    </ion-label>
    <ion-button fill="outline" slot="end" @click="openDetail = true"
      >Détail</ion-button
    >
  </ion-item>

  <ion-modal :is-open="openDetail">
    <ion-header>
      <ion-toolbar>
        <ion-title>Details : {{ Aptitude.Nom }}</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="openDetail = false">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <p>Type: {{ Aptitude.Type.Nom }} - {{ Aptitude.Type.Description }}</p>
      <p>
        Vecteur: {{ Aptitude.Vecteur.Nom }} - {{ Aptitude.Vecteur.Description }}
      </p>
      <p>Description: {{ Aptitude.Description }}</p>
      <p>Effets: {{ Array.from(Aptitude.Effets.keys()).join(",") }}</p>
      <p>
        Amelioration:
        {{ Array.from(Aptitude.AmeliorationsEffet.keys()).join(",") }}
      </p>
      <p>Cout: {{ computeCapacityCost() }}</p>
    </ion-content>
  </ion-modal>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import {
  IonItem,
  IonLabel,
  IonThumbnail,
  IonButton,
  IonModal,
  IonTitle,
  IonHeader,
  IonContent,
  IonToolbar,
  IonButtons,
} from "@ionic/vue";

import { Aptitude, AptitudeService } from "@/domain/Aptitude";

export default defineComponent({
  components: {
    IonItem,
    IonLabel,
    IonThumbnail,
    IonButtons,
    IonButton,
    IonModal,
    IonTitle,
    IonHeader,
    IonToolbar,
    IonContent,
  },
  props: {
    Aptitude: { type: Object as PropType<Aptitude>, required: true },
  },
  data() {
    return { openDetail: false };
  },
  methods: {
    computeCapacityCost() {
      return AptitudeService.computeCost(this.Aptitude);
    },
  },
});
</script>
<style scoped></style>
