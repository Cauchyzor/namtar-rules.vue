<template>
  <q-card
    flat
    v-ripple
    bordered
    @click="$emit('is-selected')"
    class="cursor-pointer q-hoverable"
  >
    <q-card-section vertical>
      <div class="text-h5 q-mt-sm q-mb-xs">
        {{ Vecteur.Nom }}
      </div>
      <div class="text-caption text-grey">{{ Vecteur.Description }}</div>
      <div>Action : {{ Vecteur.Difficulte }}</div>
    </q-card-section>
  </q-card>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from "vue";

import { Vecteur } from "src/model/Aptitude";

export default defineComponent({
  props: {
    Vecteur: { type: Object as PropType<Vecteur>, required: true },
  },
  data() {
    return {
      Selected: ref(false),
    };
  },
  emits: ["is-selected"],
});
</script>
<style scoped>
ion-text {
  font-size: x-small;
}
</style>
