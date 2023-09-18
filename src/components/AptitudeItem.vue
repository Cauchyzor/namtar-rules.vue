<template>
  <q-item class="fit bg-accent" clickable v-ripple @click="openDetail = true">
    <q-item-section>
      <q-item-label class="text-overline"> {{ Aptitude.Nom }}</q-item-label>
      <q-item-label caption class="ellipsis-3-lines text-grey">{{
        Aptitude.Description
      }}</q-item-label>
    </q-item-section>

    <q-item-section side top>
      <q-item-label caption>{{ Aptitude.Type.Nom }}</q-item-label>
    </q-item-section>
  </q-item>

  <q-dialog position="bottom" v-model="openDetail">
    <AptitudeCard :Aptitude="Aptitude"></AptitudeCard>
  </q-dialog>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";

import AptitudeCard from "src/components/AptitudeCard.vue";

import { Aptitude } from "src/model/Aptitude";

export default defineComponent({
  components: {
    AptitudeCard,
  },
  props: {
    Aptitude: { type: Object as PropType<Aptitude>, required: true },
  },
  data() {
    return { openDetail: false };
  },
});
</script>
<style scoped></style>
