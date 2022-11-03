<template>
  <ion-card>
    <img
      alt="Silhouette of mountains"
      src="https://ionicframework.com/docs/img/demos/card-media.png"
    />
    <ion-card-header>
      <ion-card-title>{{ Arme.Nom }}</ion-card-title>
      <ion-card-subtitle
        >Encombrement : {{ Arme.Encombrement }} - Prix :
        {{ Arme.Prix }}
      </ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      {{ Arme.Description }}
    </ion-card-content>
    <ion-button fill="clear">Detail</ion-button>
  </ion-card>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import {
  IonCard,
  IonButton,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
} from "@ionic/vue";

import { ArmeItem } from "@/domain/Armes";

export default defineComponent({
  name: "EquipementCard",
  components: {
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonCardSubtitle,
    IonButton,
  },
  props: {
    Arme: { type: Object as PropType<ArmeItem>, required: true },
  },
});
</script>
<style scoped></style>
