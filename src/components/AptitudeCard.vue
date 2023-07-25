<template>
  <q-card flat class="bg-secondary">
    <q-card-section vertical>
      <div class="text-overline">
        {{ Aptitude.Type.Nom }}
      </div>
      <div class="text-h5 q-mt-sm q-mb-xs">
        {{ Aptitude.Nom }}
      </div>
      <div class="text-overline">
        {{ Aptitude.Vecteur.Nom }}
      </div>
      <div class="text-caption text-grey">{{ Aptitude.Description }}</div>
    </q-card-section>
  </q-card>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";

import { Aptitude } from "src/domain/Aptitude";

export default defineComponent({
  name: "AptitudeCard",
  props: {
    Aptitude: { type: Object as PropType<Aptitude>, required: true },
  },
});
</script>
<style scoped></style>
