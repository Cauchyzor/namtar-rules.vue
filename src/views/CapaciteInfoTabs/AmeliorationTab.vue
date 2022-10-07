<template>
  <ion-page>
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
import { IonContent, IonPage } from "@ionic/vue";

import NamTitle from "@/components/NamTitle.vue";
import { CapaciteService } from "@/domain/Capacite";
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
      Ameliorations: CapaciteService.getAllAmelioration(),
    };
  },
});
</script>
