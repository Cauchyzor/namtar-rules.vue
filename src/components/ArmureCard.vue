<template>
  <q-card flat class="bg-secondary">
    <q-card-section vertical>
      <div class="text-overline">
        Encombrement : {{ Armure.Encombrement }} - Prix : {{ Armure.Prix }} -
        Raretée : {{ Armure.Rareté }}
      </div>
      <div class="text-h5 q-mt-sm q-mb-xs">
        {{ Armure.Nom }}
      </div>
      <div class="text-overline">
        Défense supplémentaire : {{ Armure.Defense }}
      </div>
      <div class="text-caption text-grey">{{ Armure.Description }}</div>
      <div
        v-show="Armure.Special.length > 0"
        class="q-mt-md text-caption text-grey"
      >
        Spécial : {{ Armure.Special.join(" - ") }}
      </div>
    </q-card-section>
  </q-card>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";

import { ArmureItem } from "src/model/Armures";

export default defineComponent({
  name: "ArmureCard",
  props: {
    Armure: { type: Object as PropType<ArmureItem>, required: true },
  },
});
</script>
<style scoped></style>
