<template>
  <q-tab-panel name="quotidien">
    <h4 class="text-center">Équipement quotidien</h4>
    <div class="row q-col-gutter-sm justify-center items-stretch">
      <div
        v-for="equipementItem in EquipementItemsList"
        :key="equipementItem.Nom"
        class="col-12 col-md-4 col-xl-3"
      >
        <EquipementCard
          style="height: 100%"
          :key="equipementItem.Nom"
          :EquipementItem="equipementItem"
        ></EquipementCard>
      </div>
    </div>
  </q-tab-panel>
</template>
<script>
import { defineComponent } from "@vue/runtime-core";

import EquipementCard from "src/components/EquipementCard.vue";

import { EquipementService } from "src/model/Equipement";

export default defineComponent({
  components: {
    EquipementCard,
  },
  data() {
    return {
      EquipementItemsList: EquipementService.getAllEquipementItems(),
    };
  },
});
</script>
