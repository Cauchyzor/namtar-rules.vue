<template>
  <q-page padding>
    <q-page padding>
      <h3 class="text-center">Creation de creature</h3>
      <div class="row q-gutter-md justify-center">
        <div
          v-for="[caracName, rank] in Creature.Caracteristiques.entries()"
          :key="rank"
          class="col"
        >
          <q-card style="height: 100%" flat class="bg-accent">
            <q-card-section>
              <p class="text-caption text-grey text-center">
                {{ caracName }}
              </p>
              <q-card-section horizontal class="row justify-center">
                <q-btn
                  class="col-md-3 col-xs-4"
                  flat
                  color="primary"
                  icon="remove"
                  @click="updateCaracRank(caracName, -1)"
                ></q-btn>

                <p class="col-md-6 col-xs-4 text-h6 text-center">
                  {{ rank }}
                </p>
                <q-btn
                  class="col-md-3 col-xs-4"
                  flat
                  color="primary"
                  icon="add"
                  @click="updateCaracRank(caracName, 1)"
                ></q-btn>
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="row justify-center items-baseline q-my-md">
        <div class="col">
          <div class="row justify-center">
            <p class="q-my-xl q-mx-md text-h4 text-overline">
              {{ AttributsName.PV }} : 0
            </p>
            <p class="q-my-xl q-mx-md text-h4 text-overline">
              {{ AttributsName.RESILIENCE }} : 0
            </p>
            <p class="q-my-xl q-mx-md text-h4 text-overline">
              {{ AttributsName.REFLEXES }} : 0
            </p>
            <p class="q-my-xl q-mx-md text-h4 text-overline">
              {{ AttributsName.INITIATIVE }} : 0
            </p>
            <p class="q-my-xl q-mx-md text-h4 text-overline">
              {{ AttributsName.STRESS }} : 0
            </p>
          </div>
        </div>
        <div class="col">
          <div class="row q-my-md">
            <q-select
              class="col-8"
              v-model="competenceSelected"
              label="Ajouter une compétence"
              :options="availableCompetence"
            ></q-select>
            <q-btn
              class="col-md-3 col-xs-4"
              flat
              color="primary"
              icon="add"
              @click="addCompetenceRank1()"
            ></q-btn>
          </div>

          <q-list bordered separator>
            <q-item
              v-for="[compName, rank] in Creature.Competences.entries()"
              :key="compName"
            >
              <q-item-section>
                <q-item-label>{{ compName }} : {{ rank }}</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-item-label>
                  <q-btn
                    flat
                    color="primary"
                    icon="remove"
                    @click="updateCompRank(compName, -1)"
                  ></q-btn>
                  <q-btn
                    flat
                    color="primary"
                    icon="add"
                    @click="updateCompRank(compName, 1)"
                  ></q-btn
                ></q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </q-page>
  </q-page>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

import { Creature } from "src/domain/Creature";
import { CaracteritiqueName } from "src/domain/Caracteristique";
import { CompetenceName, CompetenceService } from "src/domain/Competence";
import { AttributsName } from "src/domain/Attribut";

export default defineComponent({
  data() {
    return {
      AttributsName,
      Creature: new Creature(),
      competenceSelected: ref(),
    };
  },
  computed: {
    availableCompetence() {
      return CompetenceService.getAllCompetences()
        .filter(
          (c) => !Array.from(this.Creature.Competences.keys()).includes(c.Nom)
        )
        .map((c) => c.Nom);
    },
  },
  methods: {
    updateCaracRank(name: CaracteritiqueName, rank: number) {
      const actualRank = this.Creature.Caracteristiques.get(name);
      if (actualRank === undefined) {
        return;
      }
      this.Creature.Caracteristiques.set(name, actualRank + rank);
    },
    addCompetenceRank1() {
      const competence = CompetenceService.getAllCompetences().find(
        (c) => c.Nom === this.competenceSelected
      );
      if (!competence) {
        return;
      }
      this.Creature.Competences.set(competence?.Nom, 1);
      this.competenceSelected = ref();
    },
    updateCompRank(name: CompetenceName, rank: number) {
      const actualRank = this.Creature.Competences.get(name);
      if (actualRank === undefined) {
        return;
      }
      if (actualRank + rank == 0) {
        this.Creature.Competences.delete(name);
        return;
      }
      this.Creature.Competences.set(name, actualRank + rank);
    },
  },
});
</script>

<style></style>
