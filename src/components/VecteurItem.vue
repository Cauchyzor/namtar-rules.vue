<template>
  <ion-item>
    <ion-label class="ion-text-wrap">
      <p>{{ Vecteur.Nom }}</p>
      <ion-text>{{ Vecteur.Description }}</ion-text>
      <!-- TODO : Ajouter Description de la capacitée et travailler un look concis -->
    </ion-label>
    <ion-button fill="outline" slot="end">Détail</ion-button>
  </ion-item>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IonItem, IonLabel, IonButton } from "@ionic/vue";

import { Vecteur } from "@/domain/Aptitude";

export default defineComponent({
  components: {
    IonItem,
    IonLabel,
    IonButton,
  },
  props: {
    Vecteur: { type: Object as PropType<Vecteur>, required: true },
  },
});
</script>
<style scoped>
ion-text {
  font-size: x-small;
}
</style>
