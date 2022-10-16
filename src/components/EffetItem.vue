<template>
  <ion-item>
    <ion-label class="ion-text-wrap">
      <p>{{ Effet.Nom }}</p>
      <ion-text>{{ Effet.Description }}</ion-text>
      <!-- TODO : Ajouter Description de la capacitée et travailler un look concis -->
    </ion-label>
    <ion-button fill="outline" slot="end">Détail</ion-button>
  </ion-item>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IonItem, IonLabel, IonButton, IonText } from "@ionic/vue";

import { Effet } from "@/domain/Aptitude";

export default defineComponent({
  components: {
    IonItem,
    IonLabel,
    IonButton,
    IonText,
  },
  props: {
    Effet: { type: Object as PropType<Effet>, required: true },
  },
});
</script>
<style scoped>
ion-text {
  font-size: x-small;
}
</style>
