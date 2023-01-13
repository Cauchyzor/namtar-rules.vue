<template>
  <q-tab-panel name="Effets">
    <div class="row q-col-gutter-sm justify-center">
      <div v-for="effet in Effets" :key="effet.Nom" class="col-12">
        <EffetItem :Effet="effet"></EffetItem>
      </div>
    </div>
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
