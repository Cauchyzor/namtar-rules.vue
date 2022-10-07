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

    <ion-content  class="ion-padding">
      <NamTitle>Outil de creation de capacité</NamTitle>
    </ion-content>
    <!-- TODO : Stepper -->
    <!-- Tableau des Types de Capacitée + Selection-->
    <!-- Tableau des Vecteurs + Selection-->
    <!-- Tableau des Effets + Amelioration d'effets-->
    <!-- Info générales + Sauvegarde -->
  </ion-page>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";

import NamTitle from "@/components/NamTitle.vue";

export default defineComponent({
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    NamTitle,
  },
  name: 'CreationCapacitePage'
})
</script>