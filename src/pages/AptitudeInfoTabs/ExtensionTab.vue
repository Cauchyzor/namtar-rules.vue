<template>
  <q-tab-panel name="Amelioration d'effet">
    <div class="row q-col-gutter-sm justify-center">
      <div
        v-for="extension in ExtentionsEffet"
        :key="extension.Nom"
        class="col-12"
      >
        <ExtensionCard :Extension="extension"></ExtensionCard>
      </div>
    </div>
  </q-tab-panel>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { AptitudeService } from 'src/domain/Aptitude';
import ExtensionCard from 'src/components/ExtentionCard.vue';

export default defineComponent({
  components: {
    ExtensionCard,
  },
  data() {
    return {
      ExtentionsEffet: AptitudeService.getAllAmelioration(),
    };
  },
});
</script>
