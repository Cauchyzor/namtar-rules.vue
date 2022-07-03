<template>
  <ion-card button="true">
    <ion-card-header>
      <ion-card-subtitle>{{ description }}</ion-card-subtitle>
      <ion-card-title>{{ type }}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <ion-list>
        <ion-item :key="index" v-for="(item, index) in attributeList">
          <ion-label :key="index">{{ item }}</ion-label>
        </ion-item>
      </ion-list>
    </ion-card-content>
  </ion-card>
</template>
<script>
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonLabel,
  IonList,
} from "@ionic/vue";

export default {
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonLabel,
    IonList
  },
  props: {
    type: String
  },
  computed: {
    description() {
      switch (this.type) {
        case "Vigueur":
          return "Traduit la force, la musculature, la vitalité et la robustesse physique"
        case "Agilité":
          return "Traduit la souplesse, la finesse dans les mouvement et l'adresse."
        case "Intelligence":
          return "Représente capacitée de raisonnement, la mémoire et la sagesse d'un personnage."
        case "Charisme":
          return "Mesure l'aptitude à communiquer, guider, commander, ainsi que l'intelligence émotionnelle."
        default:
          return ""
      }
    },
    attributeList() {
      switch (this.type) {
        case "Vigueur":
          return ["PV : Votre maximum de PV est egal à 10 + Vigueur",
            "Résilience : Vous avez 1 point de Résiliance par point de Vigueur"
          ]
        case "Agilité":
          return ["Défense : Vous avez 1 point de Défence par point d'Agilité"]
        case "Intelligence":
          return ["Stress : Votre seuil de stress est égale a Intelligence + Charisme"]
        case "Charisme":
          return ["Stress : Votre seuil de stress est égale a Intelligence + Charisme"]
        default:
          return []
      }
    }
  }
}
</script>
<style scoped>
</style>
