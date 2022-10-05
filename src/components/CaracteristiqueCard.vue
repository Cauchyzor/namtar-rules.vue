<template>
  <div
    class="my-4 py-4 px-4 max-w-sm mx-auto bg-gray-800 rounded-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
    <div class="text-center space-y-2 sm:text-left">
      <div class="space-y-0.5">
        <p class="text-lg">
          {{ Caracteristique.Nom }}
        </p>
        <p class="text-slate-500 font-medium">
          {{ Caracteristique.Description }}
        </p>
      </div>
        <button  :key="index" v-for="(item, index) in Caracteristique.Attributs"
          class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">{{ item.Description}}</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";

import type { Caracteristique } from "@/domain/Caracteristique";

export default defineComponent({
  components: {},
  props: {
    ShowAttribute: Boolean,
    Caracteristique: {
      type: Object as PropType<Caracteristique>,
      required: true,
    },
  },
  mounted() {
    this.ShowAttribute;
    this.Caracteristique;
  },
});
</script>
<style scoped>
@import '@/theme/tailwind.css';

ion-card-subtitle {
  font-size: smaller;
}
</style>
