<template>
  <q-page padding>
    <h2 class="text-center">Database : Aptitudes</h2>
    <div class="q-pa-md bg-secondary">
      <q-label>Types d'aptitudes : </q-label>
      <q-option-group
        name="Types d'Aptitude"
        v-model="FilterByType"
        :options="AptTypes"
        type="checkbox"
        color="primary"
        inline
      ></q-option-group>
    </div>
    <div class="q-pa-md">
      <div class="row">
        <q-label>Niveau de Maîtrise requis : </q-label>
        <q-range
          v-model="FilterByMaîtriseLevel"
          :min="1"
          :max="7"
          :step="1"
          snap
          label
        ></q-range>
      </div>
    </div>
    <div class="row q-col-gutter-sm justify-center items-stretch">
      <div
        v-for="Aptitude in filteredAptitudesList"
        :key="Aptitude.Nom"
        class="col-12 col-sm-4"
      >
        <AptitudeCard style="height: 100%" :Aptitude="Aptitude"></AptitudeCard>
      </div>
    </div>
  </q-page>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import AptitudeCard from "src/components/AptitudeCard.vue";

import { ServiceAptitude, AptitudeTypeName } from "src/data/ServiceAptitude";

export default defineComponent({
  name: "PersonnagePage",
  components: {
    AptitudeCard,
  },
  data() {
    return {
      AptTypes: Object.values(AptitudeTypeName).map((t) => {
        return { label: t, value: t };
      }),
      AptitudesList: ServiceAptitude.findAllAptitudes().sort(
        (a, b) => a.NiveauDeMaîtrise - b.NiveauDeMaîtrise
      ),
      FilterByType: new Array<AptitudeTypeName>(),
      FilterByMaîtriseLevel: { min: 1, max: 9 },
    };
  },
  computed: {
    filteredAptitudesList() {
      return this.FilterByType.length > 0
        ? this.AptitudesList.filter((apt) =>
            this.FilterByType.includes(apt.Type.Nom)
          ).filter(
            (apt) =>
              apt.NiveauDeMaîtrise <= this.FilterByMaîtriseLevel.max &&
              apt.NiveauDeMaîtrise >= this.FilterByMaîtriseLevel.min
          )
        : this.AptitudesList.filter(
            (apt) =>
              apt.NiveauDeMaîtrise <= this.FilterByMaîtriseLevel.max &&
              apt.NiveauDeMaîtrise >= this.FilterByMaîtriseLevel.min
          );
    },
  },
});
</script>
<style scoped></style>
