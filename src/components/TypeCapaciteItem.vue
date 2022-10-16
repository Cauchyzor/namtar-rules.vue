<template>
  <ion-item>
    <ion-label class="ion-text-wrap">
      <p>{{ Type.Nom }}</p>
      <ion-text>{{Type.Description}}</ion-text>
      <!-- TODO : Ajouter Description de la capacitée et travailler un look concis -->
    </ion-label>

    <ion-button fill="outline" slot="end">Détail</ion-button>
  </ion-item>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

import { IonItem, IonLabel, IonButton, IonText } from "@ionic/vue";

import { CapaciteType } from "@/domain/Capacite";

export default defineComponent({
  components: {
    IonItem,
    IonLabel,
    IonButton,
    IonText,
  },
  props: {
    Type: { type: Object as PropType<CapaciteType>, required: true },
  },
});
</script>
<style scoped>
ion-text {
  font-size: x-small;
}
</style>
