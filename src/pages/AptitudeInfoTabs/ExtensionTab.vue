<template>
  <q-tab-panel name="Amelioration d'effet">
    <div class="row q-col-gutter-sm justify-center">
      <div
        v-for="amelioration in Ameliorations"
        :key="amelioration.Nom"
        class="col-12 col-md-auto"
      >
        <AmeliorationEffetItem
          :Extension="amelioration"
        ></AmeliorationEffetItem>
      </div>
    </div>
  </q-tab-panel>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { AptitudeService } from 'src/domain/Aptitude';
import AmeliorationEffetItem from 'src/components/ExtentionCard.vue';

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
