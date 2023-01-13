<template>
  <q-tab-panel name="Types">
    <div class="row q-col-gutter-sm justify-center">
      <div
        v-for="typeAptitude in TypesAptitude"
        :key="typeAptitude.Nom"
        class="col-12 col-md-auto"
      >
        <TypeAptitudeItem :Type="typeAptitude"></TypeAptitudeItem>
      </div>
    </div>
  </q-tab-panel>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TypeAptitudeItem from 'src/components/TypeAptitudeCard.vue';

import { AptitudeService } from 'src/domain/Aptitude';

export default defineComponent({
  components: {
    TypeAptitudeItem,
  },
  data() {
    return {
      TypesAptitude: AptitudeService.getAllTypes(),
    };
  },
});
</script>
