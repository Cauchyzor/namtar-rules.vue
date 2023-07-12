<template>
  <q-tab-panel name="armures">
    <h4>Armures</h4>
    <div class="row q-col-gutter-sm justify-center items-stretch">
      <div
        v-for="armure in ArmureItemsList"
        :key="armure.Nom"
        class="col-12 col-md-4 col-xl-3"
      >
        <ArmureCard
          style="height: 100%"
          :key="armure.Nom"
          :Armure="armure"
        ></ArmureCard>
      </div>
    </div>
  </q-tab-panel>
</template>
<script>
import { defineComponent } from "@vue/runtime-core";

import ArmureCard from "src/components/ArmureCard.vue";

import { ArmureService } from "src/domain/Armures";

export default defineComponent({
  components: {
    ArmureCard,
  },
  data() {
    return {
      ArmureItemsList: ArmureService.getAllArmureItems(),
    };
  },
});
</script>
