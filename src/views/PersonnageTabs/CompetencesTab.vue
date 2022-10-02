<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Amelioration d'effets</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <NamTitle>Choisir des Competences</NamTitle>
      <ion-text>Augmentez 1 fois le rang de 4 compétences au choix</ion-text>

      <ion-grid>
        <ion-row v-for="row in CompetencesByRow" :key="row">
          <CompetenceCard
            v-for="comp in row"
            :key="comp.Nom"
            :Competence="comp"
          ></CompetenceCard>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText,
  IonGrid,
  IonRow,
} from "@ionic/vue";

import NamTitle from "@/components/NamTitle.vue";
import { CompetenceService } from "@/domain/Competence";
import CompetenceCard from "@/components/CompetenceCard.vue";

export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonGrid,
    IonRow,
    IonToolbar,
    IonText,
    NamTitle,
    CompetenceCard,
  },
  data() {
    const competencesList = [...CompetenceService.getAllCompetences()];

    const CompetencesByRow = [];
    // TODO : Faire une Hexagrid et cleaner ça
    CompetencesByRow.push(competencesList.splice(0, 2));
    CompetencesByRow.push(competencesList.splice(0, 3));
    CompetencesByRow.push(competencesList.splice(0, 3));
    CompetencesByRow.push(competencesList.splice(0, 3));
    CompetencesByRow.push(competencesList.splice(0, 3));
    CompetencesByRow.push(competencesList.splice(0, 2));
    return {
      CompetencesByRow: CompetencesByRow,
    };
  },
});
</script>
<style>
.title-section {
  height: 100px;
}

ion-text {
  text-align: center;
  font-size: smaller;
}

ion-text > p {
  margin-left: 18px;
  margin-right: 18px;
}
</style>
