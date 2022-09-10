<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Effets</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <NamTitle>Capacites</NamTitle>
      <NamTitle>Effets</NamTitle>
      <EffetItem
        v-for="effet in Effets"
        :key="effet.Nom"
        :Effet="effet"
      ></EffetItem>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";

import NamTitle from "@/components/NamTitle.vue";
import EffetItem from "@/components/EffetItem.vue";
import { CapaciteService } from "@/domain/Capacite";

export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    NamTitle,
    EffetItem,
  },
  data() {
    return { Effets: CapaciteService.getAllEffect() };
  },
});
</script>
