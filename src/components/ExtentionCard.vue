<template>
  <q-card bordered>
    <q-card-section vertical>
      <div class="text-h5 q-mt-sm q-mb-xs">
        {{ Extension.Nom }}
      </div>
      <div class="text-caption text-grey">{{ Extension.Description }}</div>
    </q-card-section>
  </q-card>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { ExtensionEffet } from 'src/domain/Aptitude';

export default defineComponent({
  props: {
    Extension: {
      type: Object as PropType<ExtensionEffet>,
      required: true,
    },
  },
});
</script>
<style scoped>
ion-text {
  font-size: x-small;
}
</style>
