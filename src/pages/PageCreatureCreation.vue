<template>
  <q-page padding>
    <q-page padding>
      <h3 class="text-center">Creation de creature</h3>
      <div class="row q-gutter-md justify-center">
        <div
          v-for="[caracName, rank] in Creature.Caracteristiques.entries()"
          :key="rank"
          class="col-md-2 col-sm-4"
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
            <q-chip
              color="primary"
              text-color="white"
              :icon="getAttributeIcon(AttributsName.PV)"
              outline
              >{{ AttributsName.PV }} : {{ Creature.computePoolPV() }}</q-chip
            >

            <q-chip
              color="primary"
              text-color="white"
              :icon="getAttributeIcon(AttributsName.RESILIENCE)"
              outline
              >{{ AttributsName.RESILIENCE }} :
              {{ Creature.computePoolResilience() }}</q-chip
            >
            <q-chip
              color="primary"
              text-color="white"
              :icon="getAttributeIcon(AttributsName.REFLEXES)"
              outline
              >{{ AttributsName.REFLEXES }} :
              {{ Creature.computePoolReflexes() }}</q-chip
            >
            <q-chip
              color="primary"
              text-color="white"
              :icon="getAttributeIcon(AttributsName.INITIATIVE)"
              outline
              >{{ AttributsName.INITIATIVE }} :
              {{ Creature.computePoolInitiative() }}</q-chip
            >

            <q-chip
              color="primary"
              text-color="white"
              :icon="getAttributeIcon(AttributsName.STRESS)"
              outline
              >{{ AttributsName.STRESS }} :
              {{ Creature.computePoolStress() }}</q-chip
            >
          </div>
        </div>
        <div class="col">
          <div class="row q-gutter-md q-my-md">
            <q-select
              dense
              outlined
              class="col-8"
              v-model="CompetenceSelected"
              label="Ajouter une compétence"
              :options="availableCompetence"
            ></q-select>
            <q-btn
              class="col-md-3"
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
      <div class="row q-ma-md">
        <q-btn
          outline
          class="col-4"
          @click="OpenDialApt = true"
          label="Ajouter une aptitude"
          icon="add"
        ></q-btn>
        <q-space class="col-8"></q-space>
      </div>
      <div class="row q-col-gutter-sm justify-center items-stretch">
        <div
          v-for="aptitude in creatureAptitudes"
          :key="aptitude.Nom"
          class="col-12 col-md-4 col-xl-3"
        >
          <AptitudeCard
            style="height: 100%"
            :Aptitude="aptitude"
          ></AptitudeCard>
        </div>
      </div>

      <q-dialog v-model="OpenDialApt">
        <q-card style="width: 600px">
          <q-card-section class="row items-center q-pb-none">
            <div class="text-overline">Selectionnez une aptitude</div>
            <q-space></q-space>
            <q-btn icon="close" flat round dense v-close-popup></q-btn>
          </q-card-section>
          <q-card-section>
            <q-input
              dense
              outlined
              :modelValue="AptSearch"
              label="rechercher..."
            ></q-input>
          </q-card-section>
          <q-card-section>
            <q-scroll-area style="height: 500px">
              <AptitudeCard
                v-for="apt in aptFiltered"
                :key="apt.Nom"
                :Aptitude="apt"
                class="q-my-md"
              ></AptitudeCard>
            </q-scroll-area>
          </q-card-section>
        </q-card>
      </q-dialog>
    </q-page>
  </q-page>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

import AptitudeCard from "src/components/AptitudeCard.vue";

import { Creature } from "src/model/Creature";
import { CaracteritiqueName } from "src/model/Caracteristique";
import { CompetenceName, CompetenceService } from "src/model/Competence";
import { AttributsName, AttributService } from "src/model/Attribut";

import { AptitudeService } from "src/data/ServiceAptitude";

export default defineComponent({
  components: {
    AptitudeCard,
  },
  data() {
    return {
      AttributsName,
      Creature: new Creature(),

      CompetenceSelected: ref(),
      OpenDialApt: ref(false),
      AptSearch: ref(""),
      Apt: AptitudeService.findAllAptitudes().filter((_, index) => index < 4),
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
    creatureAptitudes() {
      return AptitudeService.findAptitudesByNames(
        Array.from(this.Creature.Aptitudes.values())
      );
    },
    aptFiltered() {
      return AptitudeService.findAllAptitudes().filter(
        (apt) => !this.Creature.Aptitudes.has(apt.Nom)
      );
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
        (c) => c.Nom === this.CompetenceSelected
      );
      if (!competence) {
        return;
      }
      this.Creature.Competences.set(competence?.Nom, 1);
      this.CompetenceSelected = ref();
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
    getAttributeIcon(name: AttributsName) {
      return AttributService.findAttributeIcon(name);
    },
  },
});
</script>

<style></style>
