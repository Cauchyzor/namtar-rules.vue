<template>
  <q-page padding>
    <h2 class="text-center">Database : Aptitudes</h2>
    <div class="row q-col-gutter-sm justify-center items-stretch">
      <div
        v-for="Aptitude in AptitudesList"
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

import { ServiceAptitude } from "src/data/ServiceAptitude";

export default defineComponent({
  name: "PersonnagePage",
  components: {
    AptitudeCard,
  },
  data() {
    return {
      AptitudesList: ServiceAptitude.findAllAptitudes(),
    };
  },
});
</script>
<style scoped></style>
