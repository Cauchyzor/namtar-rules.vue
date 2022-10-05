<template>
  <ion-card>
    <ion-card-header>
      <ion-card-subtitle>{{ Caracteristique.Description }}</ion-card-subtitle>
      <ion-card-title class="ion-text-uppercase">{{
        Caracteristique.Nom
      }}</ion-card-title>
    </ion-card-header>
    <ion-card-content class="ion-align-items-baseline">
      <ion-button
        :id="attribut.Nom"
        :key="index"
        v-for="(attribut, index) in Caracteristique.Attributs"
        fill="outline"
        shape="round"
        @click="showAttributeDetail(attribut)"
      >
        <ion-icon :icon="attribut.Icon" slot="start"></ion-icon>
        <ion-label :key="index" slot="start">{{ attribut.Nom }}</ion-label>
      </ion-button>
    </ion-card-content>
    <ion-card-content v-if="ShowAttribute">
      <ion-text>{{ selectedAttributDetail }}</ion-text>
    </ion-card-content>
  </ion-card>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";

import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonIcon,
  IonLabel,
  IonButton,
  IonText,
} from "@ionic/vue";

import { closeCircleOutline } from "ionicons/icons";
import type { Caracteristique } from "@/domain/Caracteristique";
import { Attribut } from "@/domain/Attribut";

export default defineComponent({
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonIcon,
    IonLabel,
    IonButton,
    IonText,
  },
  props: {
    Caracteristique: {
      type: Object as PropType<Caracteristique>,
      required: true,
    },
  },
  mounted() {
    this.Caracteristique;
  },
  data() {
    return {
      ShowAttribute: false,
      selectedAttributDetail: "",
      closeCircleOutline,
    };
  },
  methods: {
    showAttributeDetail(attribut: Attribut) {
      this.ShowAttribute = this.selectedAttributDetail !== attribut.Description;
      this.selectedAttributDetail = this.ShowAttribute
        ? attribut.Description
        : "";
    },
  },
});
</script>
<style scoped>
ion-card-subtitle {
  font-size: smaller;
}

ion-button,
ion-text {
  font-size: smaller;
}
ion-card-content {
  display: flex;
  flex-direction: row-reverse;
}
</style>
