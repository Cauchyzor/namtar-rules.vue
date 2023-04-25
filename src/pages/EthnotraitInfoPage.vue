<template>
  <q-page padding>
    <h3 class="text-center">Ethnotraits</h3>
    <q-list separator>
      <q-item v-for="ethnotrait of EthnotraitsList" :key="ethnotrait">
        <q-item-section>
          <q-item-label class="text-overline">
            {{ ethnotrait.Nom }}</q-item-label
          >
          <q-item-label caption>{{ ethnotrait.Description }}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>{{ ethnotrait.Coherence }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import { EthnotraitService } from 'src/domain/Ethnotrait';

export default defineComponent({
  name: 'EthnotraitInfoPage',
  data() {
    return {
      EthnotraitsList: EthnotraitService.getAllEthnotraits(),
    };
  },
});
</script>
<style scoped></style>
