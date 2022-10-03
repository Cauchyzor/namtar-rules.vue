<template>
  <ion-card button="true">
    <ion-card-header>
      <ion-card-subtitle>{{ Caracteristique.Description }}</ion-card-subtitle>
      <ion-card-title>{{ Caracteristique.Nom }}</ion-card-title>
    </ion-card-header>
    <ion-card-content v-show="ShowAttribute">
      <ion-list :key="index" v-for="(item, index) in Caracteristique.Attributs">
        <ion-item>
          <ion-icon :icon="item.Icon" slot="start"></ion-icon>
          <ion-label :key="index" slot="start">{{ item.Nom }}</ion-label>
          <ion-note slot="end">{{ item.Description }}</ion-note>
        </ion-item>
      </ion-list>
    </ion-card-content>
  </ion-card>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonIcon,
  IonLabel,
  IonNote,
  IonList,
  IonItem,
} from "@ionic/vue";

import type { PropType } from "vue";
import type { Caracteristique } from "@/domain/Caracteristique";

export default defineComponent({
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonIcon,
    IonLabel,
    IonNote,
    IonList,
    IonItem,
  },
  props: {
    ShowAttribute: Boolean,
    Caracteristique: {
      type: Object as PropType<Caracteristique>,
      required: true,
    },
  },
  mounted() {
    this.ShowAttribute;
    this.Caracteristique;
  },
});
</script>
<style scoped>
ion-card-subtitle {
  font-size: smaller;
}
</style>
