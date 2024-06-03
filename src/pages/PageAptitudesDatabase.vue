<template>
  <q-page padding>
    <h2 class="text-center">Database : Aptitudes</h2>
    <div class="q-my-md q-pa-md bg-secondary">
      <div class="row q-ma-md">
        <label>Types d'aptitudes : </label>
        <q-option-group
          name="Types d'Aptitude"
          v-model="FilterByType"
          :options="AptTypesList"
          type="checkbox"
          color="primary"
          inline
        ></q-option-group>
      </div>
      <div class="row q-ma-md">
        <label>Niveau de Maîtrise requis : </label>
        <q-range
          v-model="FilterByLevel"
          :min="1"
          :max="7"
          :step="1"
          snap
          label
        ></q-range>
      </div>
      <div class="row q-ma-md">
        <q-select
          outlined
          v-model="FilterByMaîtrises"
          toggle-color="primary"
          :options="CompétencesNameList"
          label="Compétences maîtrisées :"
          multiple
          use-chips
          class="col-10 bg-secondary"
        ></q-select>
        <q-toggle
          class="col-2"
          v-model="ShowExclusiveOnly"
          label="Exclusif"
        ></q-toggle>
      </div>
    </div>
    <div class="row q-col-gutter-sm justify-center items-stretch">
      <div
        v-for="Aptitude in filteredAptitudesList()"
        :key="Aptitude.Nom"
        class="col-12 col-sm-4"
      >
        <AptitudeCard style="height: 100%" :Aptitude="Aptitude"></AptitudeCard>
      </div>
    </div>
  </q-page>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

import AptitudeCard from "src/components/AptitudeCard.vue";

import { ServiceAptitude, AptitudeTypeName } from "src/data/ServiceAptitude";
import { CompetenceName } from "src/model/Competence";
import { Aptitude } from "src/model/Aptitude";

export default defineComponent({
  name: "PersonnagePage",
  components: {
    AptitudeCard,
  },
  data() {
    return {
      CompétencesNameList: Object.values(CompetenceName),
      AptTypesList: Object.values(AptitudeTypeName).map((t) => {
        return { label: t, value: t };
      }),
      AptitudesList: ServiceAptitude.findAllAptitudes().sort(
        (a, b) => a.NiveauDeMaîtrise - b.NiveauDeMaîtrise
      ),
      FilterByType: new Array<AptitudeTypeName>(),
      FilterByLevel: { min: 1, max: 7 },
      FilterByMaîtrises: ref(new Array<CompetenceName>()),
      ShowExclusiveOnly: ref(false),
    };
  },
  methods: {
    filteredAptitudesList() {
      return this.AptitudesList.filter((apt) => this.filterByType(apt))
        .filter((apt) => this.filterBySelectedMaîtrises(apt))
        .filter((apt) => this.filterByMaîtrisesRank(apt))
        .filter((apt) => this.filterExclusifOnly(apt));
    },
    filterByType(apt: Aptitude) {
      if (this.FilterByType.length === 0) {
        return true;
      }
      return this.FilterByType.includes(apt.Type.Nom);
    },
    filterBySelectedMaîtrises(apt: Aptitude) {
      if (this.FilterByMaîtrises.length === 0) {
        return true;
      }
      return (
        this.FilterByMaîtrises.find((m) => apt.MaîtrisesRequise.has(m)) !=
        undefined
      );
    },
    filterByMaîtrisesRank(apt: Aptitude) {
      return (
        apt.NiveauDeMaîtrise <= this.FilterByLevel.max &&
        apt.NiveauDeMaîtrise >= this.FilterByLevel.min
      );
    },
    filterExclusifOnly(apt: Aptitude) {
      if (!this.ShowExclusiveOnly) {
        return true;
      }
      return Array.from(apt.MaîtrisesRequise.keys()).reduce(
        (acc, curr) => acc && this.FilterByMaîtrises.includes(curr),
        true
      );
    },
  },
});
</script>
<style scoped></style>
