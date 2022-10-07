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
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="system" href="/ReglesCore/System">
            <ion-label>Système de dé</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="soins" href="/ReglesCore/Soins">
            <ion-label>Soins et repos</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="combats" href="/ReglesCore/Combats">
            <ion-label>Combat</ion-label>
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
  IonTabs,
  IonTabButton,
  IonLabel,
  IonTabBar,
  IonRouterOutlet,
} from "@ionic/vue";

export default defineComponent({
  name: "PersonnagePage",
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonTabs,
    IonRouterOutlet,
    IonTabButton,
    IonTabBar,
  },
});
</script>
<style scoped></style>
