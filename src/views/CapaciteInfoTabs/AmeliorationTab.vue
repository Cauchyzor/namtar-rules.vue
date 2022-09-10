<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Amelioration d'effets</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <NamTitle>Capacites</NamTitle>
      <NamTitle>Amelioration d'effet</NamTitle>
      <AmeliorationEffetItem
        v-for="amelioration in Ameliorations"
        :key="amelioration.Nom"
        :Amelioration="amelioration"
      ></AmeliorationEffetItem>
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
import { CapaciteService } from "@/domain/Capacite";
import AmeliorationEffetItem from "@/components/AmeliorationEffetItem.vue";

export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    NamTitle,
    AmeliorationEffetItem,
  },
  data() {
    return {
      Ameliorations: CapaciteService.getAllAmelioration(),
    };
  },
});
</script>
