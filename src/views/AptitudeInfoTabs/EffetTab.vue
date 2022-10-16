<template>
  <ion-page>
    <ion-content class="ion-padding">
      <NamTitle>Aptitudes</NamTitle>
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
import { IonContent, IonPage } from "@ionic/vue";

import NamTitle from "@/components/NamTitle.vue";
import EffetItem from "@/components/EffetItem.vue";
import { AptitudeService } from "@/domain/Aptitude";

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    NamTitle,
    EffetItem,
  },
  data() {
    return { Effets: AptitudeService.getAllEffect() };
  },
});
</script>
