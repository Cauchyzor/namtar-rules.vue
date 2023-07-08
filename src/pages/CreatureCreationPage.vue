<template>
  <q-page padding>
    <q-page padding>
      <h3 class="text-center">Creation de creature</h3>
      <q-stepper
        v-model="step"
        vertical
        header-nav
        animated
        class="bg-secondary"
        flat
      >
        <q-step :name="1" title="Caractéristiques" icon="settings">
          <p>Selectionnez des valeurs de caracteristique</p>

          <div class="row">
            <q-input v-model.number="Vigueur" type="number" filled></q-input>
            <q-input v-model.number="Agilite" type="number" filled></q-input>
            <q-input
              v-model.number="Intelligence"
              type="number"
              filled
            ></q-input>
            <q-input v-model.number="Charisme" type="number" filled></q-input>
          </div>
          <q-stepper-navigation>
            <q-btn @click="step = 2" color="primary" label="Continue"></q-btn>
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="2"
          title="Genotraits"
          caption="Description de l'espèce"
          icon="add_comment"
        >
          <div class="row q-col-gutter-sm justify-center">
            <div
              v-for="genotrait in AllGenotraits"
              :key="genotrait.Nom"
              class="col-lg-3 col-md-4 col-sm-6 col-12"
            >
              <GenotraitCard
                style="height: 100%"
                :Genotrait="genotrait"
                :Disabled="SelectedGenotraits.has(genotrait.Nom)"
                :class="
                  SelectedGenotraits.has(genotrait.Nom) ? 'bg-accent' : ''
                "
              ></GenotraitCard>
            </div>
          </div>
          <q-stepper-navigation>
            <q-btn @click="step = 3" color="primary" label="Continue"></q-btn>
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="3"
          title="Finalisation"
          caption="Baptisez votre creature"
          icon="add_comment"
        >
          <div class="q-gutter-md">
            <q-input
              outlined
              v-model="Name"
              label="Nom de la creature"
            ></q-input>
            <q-input
              outlined
              v-model="Description"
              label="Description libre"
            ></q-input>
          </div>
          <q-stepper-navigation>
            <q-btn color="primary" label="Creer la creature"></q-btn>
            <q-btn flat color="primary" label="Back" class="q-ml-sm"></q-btn>
          </q-stepper-navigation>
        </q-step>
      </q-stepper>
    </q-page>
  </q-page>
</template>
<script lang="ts">
import { GenotraitService } from 'src/domain/Genotrait';
import { defineComponent, ref } from 'vue';

import GenotraitCard from 'src/components/GenotraitCard.vue';

export default defineComponent({
  components: {
    GenotraitCard,
  },
  data() {
    return {
      Vigueur: ref(0),
      Agilite: ref(0),
      Intelligence: ref(0),
      Charisme: ref(0),

      Name: '',
      Description: '',

      AllGenotraits: GenotraitService.findAllGenotraits(),
      SelectedGenotraits: ref(new Map()),

      step: ref(1),
    };
  },
});
</script>

<style></style>
