<template>
  <ion-item>
    <ion-label class="ion-text-wrap">
      <p>{{ Effet.Nom }}</p>
      <!-- TODO : Ajouter Description de la capacitée et travailler un look concis -->
    </ion-label>
    <ion-button fill="outline" slot="end">Détail</ion-button>
  </ion-item>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

import { IonItem, IonLabel, IonButton } from "@ionic/vue";

import { Effet } from "@/domain/Capacite";

export default defineComponent({
  components: {
    IonItem,
    IonLabel,
    IonButton,
  },
  props: {
    Effet: { type: Object as PropType<Effet>, required: true },
  },
});
</script>
<style scoped></style>
