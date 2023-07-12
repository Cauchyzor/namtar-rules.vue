<template>
  <q-card
    flat
    v-ripple
    bordered
    class="cursor-pointer q-hoverable"
    @click="$emit('is-selected')"
  >
    <q-card-section vertical>
      <div class="text-h5 q-mt-sm q-mb-xs">
        {{ Type.Nom }}
      </div>
      <div class="text-caption text-grey">{{ Type.Description }}</div>
      <div>{{ Type.DescriptionDetails }}</div>
    </q-card-section>
  </q-card>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";

import { AptitudeType } from "src/domain/Aptitude";

export default defineComponent({
  props: {
    Type: { type: Object as PropType<AptitudeType>, required: true },
  },
  emits: ["is-selected"],
});
</script>
<style scoped></style>
