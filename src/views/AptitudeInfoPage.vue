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

    <ion-content>
      <NamTitle>Aptitudes</NamTitle>
      <!-- TODO search bar pour filtrer les items dans les tabs -->
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="type" href="/Aptitude/TypeTab">
            <ion-label>Types</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="vecteur" href="/Aptitude/VecteurTab">
            <ion-label>Vecteur</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="effet" href="/Aptitude/EffetTab">
            <ion-label>Effets</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="amelioration" href="/Aptitude/AmeliorationTab">
            <ion-label>Amelioration d'effet</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
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
    IonLabel,
    IonRouterOutlet,
    IonTabs,
    IonTabBar,
    IonTabButton,
  },
  name: "AptitudeInfoPage",
});
</script>
