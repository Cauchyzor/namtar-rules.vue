<template>
  <ion-card button="true">
    <div class="text-centered">
      <ion-text>{{ Competence.Nom }}</ion-text>
    </div>
  </ion-card>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";

import { IonCard, IonText } from "@ionic/vue";

import type { Competence } from "@/domain/Competence";

export default defineComponent({
  components: {
    IonCard,
    IonText,
  },
  props: {
    showAttribute: Boolean,
    Competence: { type: Object as PropType<Competence>, required: true },
  },
  data() {
    const MARGIN_GUTTER_PX = 2;
    const SCREEN_SIZE = window.innerWidth;
    return {
      CardWidth: (SCREEN_SIZE - 5 * MARGIN_GUTTER_PX) / 4,
    };
  },
  mounted() {
    this.showAttribute;
    this.Competence;
  },
});
</script>
<style scoped>
ion-card {
  width: 100px;
  height: 83px;
  padding: 8px;
  margin: 2px;
  display: flex;
}

.text-centered {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

ion-text {
  font-size: 12px;
}
</style>
