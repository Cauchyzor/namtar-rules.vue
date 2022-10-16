<template>
  <ion-item>
    <ion-label class="ion-text-wrap">
      <p>{{ EquipementItem.Nom }}</p>
      <!-- TODO : Ajouter Description de la Aptitude et travailler un look concis -->
    </ion-label>
    <ion-button fill="outline" slot="end">Détail</ion-button>
  </ion-item>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IonItem, IonLabel, IonButton } from "@ionic/vue";

import { Equipement } from "@/domain/Equipement";

export default defineComponent({
  components: {
    IonItem,
    IonLabel,
    IonButton,
  },
  props: {
    EquipementItem: { type: Object as PropType<Equipement>, required: true },
  },
});
</script>
<style scoped></style>
