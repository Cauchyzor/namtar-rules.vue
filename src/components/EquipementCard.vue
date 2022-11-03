<template>
  <ion-card>
    <img
      alt="Silhouette of mountains"
      src="https://ionicframework.com/docs/img/demos/card-media.png"
    />
    <ion-card-header>
      <ion-card-title>{{ EquipementItem.Nom }}</ion-card-title>
      <ion-card-subtitle
        >Encombrement : {{ EquipementItem.Encombrement }} - Prix :
        {{ EquipementItem.Prix }}
      </ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      {{ EquipementItem.Description }}
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

import { EquipementItem } from "@/domain/Equipement";

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
    EquipementItem: {
      type: Object as PropType<EquipementItem>,
      required: true,
    },
  },
});
</script>
<style scoped></style>
