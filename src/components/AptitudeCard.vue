<template>
  <q-card flat class="bg-accent">
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
      <div class="ellipsis-3-lines text-caption text-grey">
        {{ Aptitude.Description }}
      </div>
    </q-card-section>
  </q-card>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";

import { Aptitude, AptitudeService } from "src/domain/Aptitude";

export default defineComponent({
  name: "AptitudeCard",
  props: {
    Aptitude: { type: Object as PropType<Aptitude>, required: true },
  },
  data() {
    return {
      openDetail: false,
    };
  },
  methods: {
    computeAptitudeCost() {
      return AptitudeService.computeStabilityScore(
        this.Aptitude.Type.Nom,
        this.Aptitude.Effets,
        this.Aptitude.ExtensionsEffet
      );
    },
  },
});
</script>
<style scoped></style>
