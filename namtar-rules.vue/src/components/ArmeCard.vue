<template>
  <q-card>
    <q-card-section vertical>
      <div class="text-overline">
        Encombrement : {{ Arme.Encombrement }} - Prix :
        {{ Arme.Prix }}
      </div>
      <div class="text-h5 q-mt-sm q-mb-xs">
        {{ Arme.Nom }}
      </div>
      <div class="text-caption text-grey">{{ Arme.Description }}</div>
    </q-card-section>
  </q-card>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { ArmeItem } from 'src/domain/Armes';

export default defineComponent({
  name: 'EquipementCard',

  props: {
    Arme: { type: Object as PropType<ArmeItem>, required: true },
  },
});
</script>
<style scoped></style>
