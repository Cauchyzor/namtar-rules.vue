<template>
  <q-page padding>
    <NamTitle>Aptitude</NamTitle>
    <q-card bordered>
      <q-card-section horizontal>
        <q-card-section class="col-8" vertical>
          <div class="text-h5 q-mt-sm q-mb-xs">Nouvelle Aptitude</div>
          <div class="text-caption text-grey">
            Type : {{ SelectedType && SelectedType.Nom }}
          </div>
          <div class="text-caption text-grey">
            Vecteur : {{ SelectedVecteur && SelectedVecteur.Nom }}
          </div>
          <div class="text-caption text-grey">
            Effet : {{ getSelectedEffectsWithRank() }}
          </div>
          <div class="text-caption text-grey">
            Extension : {{ getSelectedExtentionWithRank() }}
          </div>
        </q-card-section>
        <q-card-section class="col-4" vertical>
          <div class="text-caption text-grey">Cout : {{ computeCost() }}</div>
          <div class="text-caption text-grey">
            Test à réaliser :
            {{ SelectedVecteur && SelectedVecteur.Difficulte }}
          </div>
        </q-card-section>
      </q-card-section>
    </q-card>
    <q-tabs v-model="SelectedTab">
      <q-tab name="Type" label="Types" />
      <q-tab name="Vecteur" label="Vecteur" />
      <q-tab name="Effet" label="Effets" />
      <q-tab name="Extension" label="Extension d'effet" />
    </q-tabs>

    <q-tab-panels class="bg-transparent" v-model="SelectedTab">
      <q-tab-panel name="Type">
        <div class="row q-col-gutter-sm justify-center">
          <div
            v-for="typeAptitude in TypesAptitude"
            :key="typeAptitude.Nom"
            class="col-12"
          >
            <TypeAptitudeItem
              :Type="typeAptitude"
              @is-selected="SelectedType = typeAptitude"
            ></TypeAptitudeItem>
          </div>
        </div>
      </q-tab-panel>

      <q-tab-panel name="Vecteur">
        <div class="row q-col-gutter-sm justify-center">
          <div v-for="vecteur in Vecteurs" :key="vecteur.Nom" class="col-12">
            <VecteurItem
              :Vecteur="vecteur"
              @is-selected="SelectedVecteur = vecteur"
            ></VecteurItem>
          </div>
        </div>
      </q-tab-panel>

      <q-tab-panel name="Effet">
        <div class="row q-col-gutter-sm justify-center">
          <div
            v-for="effet in availableEffects"
            :key="effet.Nom"
            class="col-12"
          >
            <EffetItem
              :Effet="effet"
              @rank-updated="(r) => updateEffectRank(effet, r)"
            ></EffetItem>
          </div>
        </div>
      </q-tab-panel>

      <q-tab-panel name="Extension">
        <div class="row q-col-gutter-sm justify-center">
          <div
            v-for="extension in availableExtentions"
            :key="extension.Nom"
            class="col-12"
          >
            <ExtensionCard
              :Extension="extension"
              @rank-updated="(r) => updateExtentionRank(extension, r)"
            ></ExtensionCard>
          </div>
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

import { AptitudeService, Effet, ExtensionEffet } from 'src/domain/Aptitude';

import EffetItem from 'src/components/EffetItem.vue';
import NamTitle from 'src/components/NamTitle.vue';
import TypeAptitudeItem from 'src/components/TypeAptitudeCard.vue';
import VecteurItem from 'src/components/VecteurCard.vue';
import ExtensionCard from 'src/components/ExtentionCard.vue';

export default defineComponent({
  name: 'AptitudeInfoPage',
  components: {
    NamTitle,
    TypeAptitudeItem,
    VecteurItem,
    EffetItem,
    ExtensionCard,
  },
  data() {
    return {
      SelectedTab: ref('Type'),
      TypesAptitude: AptitudeService.getAllTypes(),
      Vecteurs: AptitudeService.getAllVecteur(),
      SelectedType: ref(),
      SelectedVecteur: ref(),
      SelectedEffects: ref(new Map()),
      SelectedExtension: ref(new Map()),
    };
  },
  computed: {
    availableEffects(): Effet[] {
      return this.SelectedType && this.SelectedType.Nom
        ? AptitudeService.getAllEffect().filter((effect: Effet) =>
            effect.StabiliteParTypeAptitude.has(this.SelectedType.Nom)
          )
        : AptitudeService.getAllEffect();
    },
    availableExtentions(): ExtensionEffet[] {
      return this.SelectedType && this.SelectedType.Nom
        ? AptitudeService.getAllExtension().filter(
            (extension: ExtensionEffet) =>
              extension.StabiliteParTypeAptitude.has(this.SelectedType.Nom)
          )
        : AptitudeService.getAllExtension();
    },
  },
  methods: {
    getSelectedEffectsWithRank() {
      return Array.from(this.SelectedEffects.entries())
        .map(([name, rank]) => `${name}(${rank})`)
        .join(' - ');
    },
    updateEffectRank(effect: Effet, rank: number) {
      if (rank === 0) {
        this.SelectedEffects.delete(effect.Nom);
        return;
      }
      this.SelectedEffects.set(effect.Nom, rank);
    },
    getSelectedExtentionWithRank() {
      return Array.from(this.SelectedExtension.entries())
        .map(([name, rank]) => `${name}(${rank})`)
        .join(' - ');
    },
    updateExtentionRank(extention: ExtensionEffet, rank: number) {
      if (rank === 0) {
        this.SelectedExtension.delete(extention.Nom);
        return;
      }
      this.SelectedExtension.set(extention.Nom, rank);
    },
    computeCost() {
      return this.SelectedType &&
        this.SelectedVecteur &&
        Array.from(this.SelectedEffects.values()).length
        ? 'WIP'
        : 'Incomplet';
    },
  },
});
</script>
