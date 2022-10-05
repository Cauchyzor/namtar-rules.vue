<template>
  <ion-item>
    <ion-label class="ion-text-wrap">
      <p>{{ EquipementItem.Nom }}</p>
      <!-- TODO : Ajouter Description de la capacitée et travailler un look concis -->
    </ion-label>
    <ion-button fill="outline" slot="end">Détail</ion-button>
  </ion-item>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

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
