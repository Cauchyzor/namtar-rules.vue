<template>
  <q-page padding>
    <h2 class="text-center">Database : Aptitudes</h2>
    <div class="q-pa-md">
      <q-option-group
        name="Types d'Aptitude"
        v-model="FilterByType"
        :options="AptTypes"
        type="checkbox"
        color="primary"
        class="bg-secondary"
        inline
      ></q-option-group>
    </div>
    <div class="row q-col-gutter-sm justify-center items-stretch">
      <div
        v-for="Aptitude in filteredApitudesList"
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
      AptitudesList: ServiceAptitude.findAllAptitudes(),
      FilterByType: new Array<AptitudeTypeName>(),
    };
  },
  computed: {
    filteredApitudesList() {
      return this.FilterByType.length > 0
        ? this.AptitudesList.filter((apt) =>
            this.FilterByType.includes(apt.Type.Nom)
          )
        : this.AptitudesList;
    },
  },
});
</script>
<style scoped></style>
