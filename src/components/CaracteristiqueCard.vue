<template>
  <q-card flat class="bg-secondary">
    <q-card-section>
      <p class="text-caption text-grey">{{ Caracteristique.Description }}</p>
      <p class="text-h5">{{ Caracteristique.Nom }}</p>
    </q-card-section>
    <q-card-actions align="right">
      <q-chip
        v-for="(attribut, index) in Caracteristique.Attributs"
        clickable
        :key="index"
        color="primary"
        text-color="white"
        :icon="attribut.Icon"
        outline
        @click="showAttributeDetail(attribut)"
        >{{ attribut.Nom }}</q-chip
      >
    </q-card-actions>
    <q-card-section v-if="ShowAttribute">
      <p>{{ selectedAttributDetail }}</p>
    </q-card-section>
  </q-card>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';

import type { Caracteristique } from 'src/domain/Caracteristique';
import { Attribut } from 'src/domain/Attribut';

export default defineComponent({
  props: {
    Caracteristique: {
      type: Object as PropType<Caracteristique>,
      required: true,
    },
  },
  mounted() {
    this.Caracteristique;
  },
  data() {
    return {
      ShowAttribute: false,
      selectedAttributDetail: '',
    };
  },
  methods: {
    showAttributeDetail(attribut: Attribut) {
      this.ShowAttribute = this.selectedAttributDetail !== attribut.Description;
      this.selectedAttributDetail = this.ShowAttribute
        ? attribut.Description
        : '';
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
