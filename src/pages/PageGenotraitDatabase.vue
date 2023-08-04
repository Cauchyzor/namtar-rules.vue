<template>
  <q-page padding>
    <h4 class="text-center">Ethnotraits</h4>
    <q-list separator>
      <q-item v-for="genotraits of GenotraitList" :key="genotraits.Nom">
        <q-item-section>
          <q-item-label class="text-overline">
            {{ genotraits.Nom }}</q-item-label
          >
          <q-item-label caption>{{ genotraits.Description }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { GenotraitService } from "src/model/Genotrait";

export default defineComponent({
  name: "PageGenotraitDatabase",
  data() {
    return {
      GenotraitList: GenotraitService.findAllGenotraits(),
    };
  },
});
</script>
