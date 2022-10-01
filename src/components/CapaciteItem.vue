<template>
  <ion-item>
    <ion-thumbnail slot="start">
      <img :src="Capacite.Image || 'assets/icon/icon.png'" />
    </ion-thumbnail>
    <ion-label class="ion-text-wrap">
      <p>{{ Capacite.Nom }}</p>
      <!-- TODO : Ajouter Description de la capacitée et travailler un look concis -->
    </ion-label>
    <ion-button fill="outline" slot="end" @click="openDetail = true"
      >Détail</ion-button
    >
  </ion-item>

  <ion-modal :is-open="openDetail">
    <ion-header>
      <ion-toolbar>
        <ion-title>Details : {{ Capacite.Nom }}</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="openDetail = false">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <p>Type: {{ Capacite.Type.Nom }} - {{ Capacite.Type.Description }}</p>
      <p>
        Vecteur: {{ Capacite.Vecteur.Nom }} - {{ Capacite.Vecteur.Description }}
      </p>
      <p>Description: {{ Capacite.Description }}</p>
      <p>Effets: {{ Array.from(Capacite.Effets.keys()).join(",") }}</p>
      <p>
        Amelioration:
        {{ Array.from(Capacite.AmeliorationsEffet.keys()).join(",") }}
      </p>
      <p>Cout: {{ computeCapacityCost() }}</p>
    </ion-content>
  </ion-modal>
</template>
<script lang="ts">
import { defineComponent } from "vue";

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

import type { PropType } from "vue";

import { Capacite, CapaciteService } from "@/domain/Capacite";

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
    Capacite: { type: Object as PropType<Capacite>, required: true },
  },
  data() {
    return { openDetail: false };
  },
  methods: {
    computeCapacityCost() {
      return CapaciteService.computeCost(this.Capacite);
    },
  },
});
</script>
<style scoped></style>
