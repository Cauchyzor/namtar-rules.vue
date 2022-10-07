<template>
  <ion-page>
    <ion-content class="ion-padding">
      <NamTitle>Choisir des Competences</NamTitle>
      <div class="ion-padding-vertical ion-text-center">
        <ion-text>Augmentez 1 fois le rang de 4 compétences au choix</ion-text>
      </div>

      <ion-grid>
        <ion-row
          class="ion-justify-content-center"
          v-for="row in CompetencesByRow"
          :key="row"
        >
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
import { IonContent, IonPage, IonText, IonGrid, IonRow } from "@ionic/vue";

import NamTitle from "@/components/NamTitle.vue";
import { CompetenceService } from "@/domain/Competence";
import CompetenceCard from "@/components/CompetenceCard.vue";

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    IonGrid,
    IonRow,
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
<style scoped></style>
