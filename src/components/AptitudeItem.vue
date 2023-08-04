<template>
  <!--TODO : Faire une carte aptitude, et une actionModal pour tout les details-->
  <q-item class="bg-accent" clickable v-ripple @click="openDetail = true">
    <q-item-section>
      <q-item-label class="text-overline"> {{ Aptitude.Nom }}</q-item-label>
      <q-item-label caption class="text-grey">{{
        Aptitude.Description
      }}</q-item-label>
    </q-item-section>

    <q-item-section side top>
      <q-item-label caption>{{ Aptitude.Type.Nom }}</q-item-label>
    </q-item-section>
  </q-item>

  <q-dialog v-model="openDetail">
    <q-card>
      <q-card-section class="row items-center q-pb-none">
        <div class="text-overline">Details : {{ Aptitude.Nom }}</div>
        <q-space></q-space>
        <q-btn icon="close" flat round dense v-close-popup></q-btn>
      </q-card-section>

      <q-card-section>
        <p>Type: {{ Aptitude.Type.Nom }} - {{ Aptitude.Type.Description }}</p>
        <p>
          Vecteur: {{ Aptitude.Vecteur.Nom }} -
          {{ Aptitude.Vecteur.Description }}
        </p>
        <p>Description: {{ Aptitude.Description }}</p>
        <p>Effets: {{ Array.from(Aptitude.Effets.keys()).join(",") }}</p>
        <p>
          Extension:
          {{ Array.from(Aptitude.ExtensionsEffet.keys()).join(",") }}
        </p>
        <p>Cout: {{ computeAptitudeCost() }}</p>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";

import { Aptitude } from "src/model/Aptitude";
import { AptitudeService } from "src/data/ServiceAptitude";

export default defineComponent({
  props: {
    Aptitude: { type: Object as PropType<Aptitude>, required: true },
  },
  data() {
    return { openDetail: false };
  },
  methods: {
    computeAptitudeCost() {
      return AptitudeService.computeStabilityScore(
        this.Aptitude.Type.Nom,
        this.Aptitude.Effets,
        this.Aptitude.ExtensionsEffet
      );
    },
  },
});
</script>
<style scoped></style>
