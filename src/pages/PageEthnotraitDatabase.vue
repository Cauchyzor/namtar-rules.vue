<template>
  <q-page padding>
    <h4 class="text-center">Ethnotraits</h4>
    <q-list separator>
      <q-item v-for="ethnotrait of EthnotraitsList" :key="ethnotrait.Nom">
        <q-item-section>
          <q-item-label class="text-overline">
            {{ ethnotrait.Nom }}</q-item-label
          >
          <q-item-label caption>{{ ethnotrait.Description }}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>{{
            ethnotrait.CoherenceGénétiques
          }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import { EthnotraitService } from "src/model/Ethnotrait";

export default defineComponent({
  name: "EthnotraitInfoPage",
  data() {
    return {
      EthnotraitsList: EthnotraitService.getAllEthnotraits(),
    };
  },
});
</script>
<style scoped></style>
