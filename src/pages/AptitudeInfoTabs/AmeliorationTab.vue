<template>
  <q-tab-panel name="Amelioration d'effet">
    <NamTitle>Aptitudes</NamTitle>
    <NamTitle>Amelioration d'effet</NamTitle>
    <AmeliorationEffetItem
      v-for="amelioration in Ameliorations"
      :key="amelioration.Nom"
      :Amelioration="amelioration"
    ></AmeliorationEffetItem>
  </q-tab-panel>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import NamTitle from 'src/components/NamTitle.vue';
import { AptitudeService } from 'src/domain/Aptitude';
import AmeliorationEffetItem from 'src/components/AmeliorationEffetItem.vue';

export default defineComponent({
  components: {
    NamTitle,
    AmeliorationEffetItem,
  },
  data() {
    return {
      Ameliorations: AptitudeService.getAllAmelioration(),
    };
  },
});
</script>
