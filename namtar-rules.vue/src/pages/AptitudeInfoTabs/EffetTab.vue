<template>
  <q-tab-panel name="Effets">
    <NamTitle>Aptitudes</NamTitle>
    <NamTitle>Effets</NamTitle>
    <EffetItem
      v-for="effet in Effets"
      :key="effet.Nom"
      :Effet="effet"
    ></EffetItem>
  </q-tab-panel>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import NamTitle from 'src/components/NamTitle.vue';
import EffetItem from 'src/components/EffetItem.vue';
import { AptitudeService } from 'src/domain/Aptitude';

export default defineComponent({
  components: {
    NamTitle,
    EffetItem,
  },
  data() {
    return { Effets: AptitudeService.getAllEffect() };
  },
});
</script>
