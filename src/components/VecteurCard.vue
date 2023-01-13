<template>
  <q-card bordered>
    <q-card-section vertical>
      <div class="text-h5 q-mt-sm q-mb-xs">
        {{ Vecteur.Nom }}
      </div>
      <div class="text-caption text-grey">{{ Vecteur.Description }}</div>
    </q-card-section>
  </q-card>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { Vecteur } from 'src/domain/Aptitude';

export default defineComponent({
  props: {
    Vecteur: { type: Object as PropType<Vecteur>, required: true },
  },
});
</script>
<style scoped>
ion-text {
  font-size: x-small;
}
</style>
