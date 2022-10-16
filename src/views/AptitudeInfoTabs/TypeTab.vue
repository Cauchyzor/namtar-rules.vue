<template>
  <ion-page>
    <ion-content class="ion-padding">
      <NamTitle>Aptitudes</NamTitle>
      <NamTitle>Types</NamTitle>
      <TypeAptitudeItem
        v-for="typeAptitude in TypesAptitude"
        :key="typeAptitude.Nom"
        :Type="typeAptitude"
      ></TypeAptitudeItem>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { IonContent, IonPage } from "@ionic/vue";

import NamTitle from "@/components/NamTitle.vue";

import { AptitudeService } from "@/domain/Aptitude";

import TypeAptitudeItem from "@/components/TypeAptitudeItem.vue";

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    NamTitle,
    TypeAptitudeItem,
  },
  data() {
    return {
      TypesAptitude: AptitudeService.getAllTypes(),
    };
  },
});
</script>
