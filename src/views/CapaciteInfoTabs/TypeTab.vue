<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Types</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <NamTitle>Capacites</NamTitle>
      <NamTitle>Types</NamTitle>
      <TypeCapaciteItem
        v-for="typeCapacite in TypesCapacite"
        :key="typeCapacite.Nom"
        :Type="typeCapacite"
      ></TypeCapaciteItem>
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

import TypeCapaciteItem from "@/components/TypeCapaciteItem.vue";

export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    NamTitle,
    TypeCapaciteItem,
  },
  data() {
    return {
      TypesCapacite: CapaciteService.getAllTypes(),
    };
  },
});
</script>
