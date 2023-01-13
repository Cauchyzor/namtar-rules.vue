<template>
  <q-tab-panel name="Effets">
    <EffetItem
      v-for="effet in Effets"
      :key="effet.Nom"
      :Effet="effet"
    ></EffetItem>
  </q-tab-panel>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import EffetItem from 'src/components/EffetItem.vue';
import { AptitudeService } from 'src/domain/Aptitude';

export default defineComponent({
  components: {
    EffetItem,
  },
  data() {
    return { Effets: AptitudeService.getAllEffect() };
  },
});
</script>
