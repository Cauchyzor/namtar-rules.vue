<template>
  <q-tab-panel name="Amelioration d'effet">
    <AmeliorationEffetItem
      v-for="amelioration in Ameliorations"
      :key="amelioration.Nom"
      :Amelioration="amelioration"
    ></AmeliorationEffetItem>
  </q-tab-panel>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { AptitudeService } from 'src/domain/Aptitude';
import AmeliorationEffetItem from 'src/components/AmeliorationEffetItem.vue';

export default defineComponent({
  components: {
    AmeliorationEffetItem,
  },
  data() {
    return {
      Ameliorations: AptitudeService.getAllAmelioration(),
    };
  },
});
</script>
