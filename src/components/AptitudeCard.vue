<template>
  <q-card flat class="fit bg-accent">
    <q-card-section vertical>
      <div class="text-overline">
        {{ Aptitude.Type.Nom }}
      </div>
      <div class="text-h5 q-mt-sm q-mb-xs">
        {{ Aptitude.Nom }}
      </div>
      <div class="text-overline">
        {{ Aptitude.Vecteur.Nom }}
      </div>
      <div class="ellipsis-3-lines text-caption text-grey">
        {{ Aptitude.UsageDescription }}
      </div>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn
        outline
        color="primary"
        label="Detail"
        @click="openDetail = true"
      ></q-btn>
    </q-card-actions>
  </q-card>

  <q-dialog v-model="openDetail" position="bottom">
    <q-card flat bordered class="bg-accent">
      <q-card-section vertical>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ Aptitude.Nom }}</div>
        <div class="text-caption q-mt-sm q-mb-xs">
          {{ Aptitude.UsageDescription }}
        </div>

        <q-card-section horizontal class="bg-accent">
          <q-card-section class="col-6" vertical>
            <div class="text-caption text-grey">
              Type : <strong>{{ Aptitude.Type.Nom }}</strong>
            </div>
            <div class="text-caption text-grey">
              Vecteur : <strong>{{ Aptitude.Vecteur.Nom }}</strong>
            </div>
          </q-card-section>
          <q-separator vertical inset></q-separator>
          <q-card-section class="col-6" vertical>
            <div class="text-caption text-grey">
              Cout : <strong>{{ Aptitude.computeStabilityScore() }}</strong>
            </div>
          </q-card-section>
        </q-card-section>
      </q-card-section>
    </q-card>
  </q-dialog>
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
