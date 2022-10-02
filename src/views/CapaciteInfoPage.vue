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

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <NamTitle>Capacites</NamTitle>
      <!-- TODO search bar pour filtrer les items dans les tabs -->
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="type" href="/Capacite/TypeTab">
            <ion-label>Types</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="effet" href="/Capacite/EffetTab">
            <ion-label>Effets</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="amelioration" href="/Capacite/AmeliorationTab">
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
  name: "CapaciteInfoPage",
});
</script>
