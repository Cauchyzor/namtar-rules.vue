<template>
  <q-card flat bordered class="bg-accent">
    <q-card-section vertical>
      <div class="text-h5 q-mt-sm q-mb-xs">{{ Aptitude.Nom }}</div>
      <div class="text-caption q-mt-sm q-mb-xs">
        {{ Aptitude.Description }}
      </div>

      <q-card-section horizontal class="bg-accent">
        <q-card-section>
          <div
            class="text-caption text-grey"
            v-for="ranks in Aptitude.MaîtrisesRequise.entries()"
            :key="ranks[0]"
          >
            <li>
              <strong>{{ ranks[0] }} ({{ ranks[1] }})</strong>
            </li>
          </div>
        </q-card-section>
      </q-card-section>
      <q-card-section>
        <div class="text-caption text-grey">
          <strong>{{ Aptitude.Type.Nom }}</strong>
          {{ Aptitude.Type.Description }}
        </div>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";

import { Aptitude } from "src/model/Aptitude";

export default defineComponent({
  name: "AptitudeCard",
  props: {
    Aptitude: { type: Object as PropType<Aptitude>, required: true },
  },
  data() {
    return {
      openDetail: false,
    };
  },
});
</script>
<style scoped></style>
