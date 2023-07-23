<template>
  <q-page padding>
    <q-page padding>
      <h3 class="text-center">Creation de creature</h3>
      <div class="row q-gutter-md justify-center">
        <div
          v-for="caracEntrie in Creature.Caracteristiques.entries()"
          :key="caracEntrie[0]"
          class="col"
        >
          <q-card style="height: 100%" flat class="bg-accent">
            <q-card-section>
              <p class="text-caption text-grey text-center">
                {{ caracEntrie[0] }}
              </p>
              <q-card-section horizontal class="row justify-center">
                <q-btn
                  class="col-md-3 col-xs-4"
                  flat
                  color="primary"
                  icon="remove"
                  @click="updateCaracRank(caracEntrie[0], -1)"
                ></q-btn>

                <p class="col-md-6 col-xs-4 text-h6 text-center">
                  {{ caracEntrie[1] }}
                </p>
                <q-btn
                  class="col-md-3 col-xs-4"
                  flat
                  color="primary"
                  icon="add"
                  @click="updateCaracRank(caracEntrie[0], 1)"
                ></q-btn>
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-page>
  </q-page>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import { Creature } from "src/domain/Creature";
import { CaracteritiqueName } from "src/domain/Caracteristique";

export default defineComponent({
  data() {
    return {
      Creature: new Creature(),
    };
  },
  methods: {
    updateCaracRank(name: CaracteritiqueName, rank: number) {
      const actualRank = this.Creature.Caracteristiques.get(name);
      if (actualRank === undefined) {
        return;
      }
      this.Creature.Caracteristiques.set(name, actualRank + rank);
    },
  },
});
</script>

<style></style>
