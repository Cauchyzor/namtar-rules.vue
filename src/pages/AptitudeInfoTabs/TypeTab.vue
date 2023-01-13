<template>
  <q-tab-panel name="Types">
    <TypeAptitudeItem
      v-for="typeAptitude in TypesAptitude"
      :key="typeAptitude.Nom"
      :Type="typeAptitude"
    ></TypeAptitudeItem>
  </q-tab-panel>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TypeAptitudeItem from 'src/components/TypeAptitudeItem.vue';

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
