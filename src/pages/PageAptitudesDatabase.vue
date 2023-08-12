<template>
  <q-page padding>
    <h4 class="text-center">Database : Aptitudes</h4>
    <div class="row q-col-gutter-sm justify-center items-stretch">
      <div
        v-for="Aptitude in AptitudesList"
        :key="Aptitude.Nom"
        class="col-12 col-sm-6 col-md-4 col-lg-3"
      >
        <AptitudeItem :Aptitude="Aptitude"></AptitudeItem>
      </div>
    </div>
  </q-page>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import AptitudeItem from "src/components/AptitudeItem.vue";

import { ServiceAptitude } from "src/data/ServiceAptitude";

export default defineComponent({
  components: {
    AptitudeItem,
  },
  data() {
    return {
      AptitudesList: ServiceAptitude.findAllAptitudes(),
    };
  },
});
</script>
<style scoped></style>
