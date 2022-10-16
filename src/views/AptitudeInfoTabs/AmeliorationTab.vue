<template>
  <ion-page>
    <ion-content class="ion-padding">
      <NamTitle>Aptitudes</NamTitle>
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
import { IonContent, IonPage } from "@ionic/vue";

import NamTitle from "@/components/NamTitle.vue";
import { AptitudeService } from "@/domain/Aptitude";
import AmeliorationEffetItem from "@/components/AmeliorationEffetItem.vue";

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    NamTitle,
    AmeliorationEffetItem,
  },
  data() {
    return {
      Ameliorations: AptitudeService.getAllAmelioration(),
    };
  },
});
</script>
