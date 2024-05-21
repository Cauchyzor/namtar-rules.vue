<template>
  <q-card flat class="bg-accent">
    <q-card-section>
      <p class="text-caption text-grey">{{ Caracteristique.Description }}</p>
      <p class="text-h5">{{ Caracteristique.Nom }}</p>
    </q-card-section>
    <q-card-actions align="right">
      <q-chip
        v-for="(attribut, index) in Caracteristique.Attributs"
        :key="index"
        color="primary"
        text-color="white"
        :icon="attribut.Icon"
        outline
        >{{ attribut.Nom }}</q-chip
      >
    </q-card-actions>
  </q-card>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";

import type { Caracteristique } from "src/model/Caracteristique";

export default defineComponent({
  props: {
    Caracteristique: {
      type: Object as PropType<Caracteristique>,
      required: true,
    },
  },
});
</script>
<style scoped>
ion-card-subtitle {
  font-size: smaller;
}

ion-button,
ion-text {
  font-size: smaller;
}
ion-card-content {
  display: flex;
  flex-direction: row-reverse;
}
</style>
