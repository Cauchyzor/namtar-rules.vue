<template>
  <q-page padding>
    <h4 class="text-center">Database : Aptitudes</h4>
    <div class="row q-col-gutter-sm justify-center items-stretch">
      <div
        v-for="Aptitude in AptitudesList"
        :key="Aptitude.Nom"
        class="col-12 col-sm-4 col-md-3 col-lg-2"
      >
        <AptitudeCard style="height: 100%" :Aptitude="Aptitude"></AptitudeCard>
      </div>
    </div>
  </q-page>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import AptitudeCard from "src/components/AptitudeCard.vue";

import { AptitudeService } from "src/domain/Aptitude";

export default defineComponent({
  name: "PersonnagePage",
  components: {
    AptitudeCard,
  },
  data() {
    return {
      AptitudesList: AptitudeService.getAllAptitudes(),
    };
  },
});
</script>
<style scoped></style>
