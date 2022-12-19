<template>
  <q-card>
    <q-card-section vertical>
      <div class="text-overline">
        Encombrement : {{ Armure.Encombrement }} - Prix :
        {{ Armure.Prix }}
      </div>
      <div class="text-h5 q-mt-sm q-mb-xs">
        {{ Armure.Nom }}
      </div>
      <div class="text-caption text-grey">{{ Armure.Description }}</div>
    </q-card-section>
  </q-card>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { ArmureItem } from 'src/domain/Armures';

export default defineComponent({
  name: 'EquipementCard',

  props: {
    Armure: { type: Object as PropType<ArmureItem>, required: true },
  },
});
</script>
<style scoped></style>
