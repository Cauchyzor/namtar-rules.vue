<template>
  <ion-item>
    <ion-label class="ion-text-wrap">
      <p>{{ Type.Nom }}</p>
      <ion-text>{{ Type.Description }}</ion-text>
      <!-- TODO : Ajouter Description de la Aptitude et travailler un look concis -->
    </ion-label>

    <ion-button fill="outline" slot="end">Détail</ion-button>
  </ion-item>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IonItem, IonLabel, IonButton, IonText } from "@ionic/vue";

import { AptitudeType } from "@/domain/Aptitude";

export default defineComponent({
  components: {
    IonItem,
    IonLabel,
    IonButton,
    IonText,
  },
  props: {
    Type: { type: Object as PropType<AptitudeType>, required: true },
  },
});
</script>
<style scoped>
ion-text {
  font-size: x-small;
}
</style>
