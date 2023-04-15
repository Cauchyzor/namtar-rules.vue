<template>
  <q-card flat class="bg-secondary">
    <q-card-section vertical>
      <div class="text-overline">
        Encombrement : {{ EquipementItem.Encombrement }} - Prix :
        {{ EquipementItem.Prix }}
      </div>
      <div class="text-h5 q-mt-sm q-mb-xs">
        {{ EquipementItem.Nom }}
      </div>
      <div class="text-caption text-grey">{{ EquipementItem.Description }}</div>
    </q-card-section>
  </q-card>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { EquipementItem } from 'src/domain/Equipement';

export default defineComponent({
  name: 'EquipementCard',
  props: {
    EquipementItem: {
      type: Object as PropType<EquipementItem>,
      required: true,
    },
  },
});
</script>
<style scoped></style>
