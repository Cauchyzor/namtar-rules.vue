<template>
  <q-page padding>
    <NamTitle>Aptitude</NamTitle>
    <q-card bordered>
      <q-card-section horizontal>
        <q-card-section class="col-6" vertical>
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
        <q-card-section class="col-6" vertical>
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
              @is-selected="changeType(typeAptitude)"
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
              @rank-increased="increaseEffectRank(effet)"
              @rank-decreased="decreaseEffectRank(effet)"
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
              @rank-increased="increaseExtentionRank(extension)"
              @rank-decreased="decreaseExtentionRank(extension)"
            ></ExtensionCard>
          </div>
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

import {
  AptitudeService,
  AptitudeType,
  Effet,
  ExtensionEffet,
} from 'src/domain/Aptitude';

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
    increaseEffectRank(effect: Effet) {
      if (this.SelectedEffects.has(effect.Nom)) {
        const actualRank = this.SelectedEffects.get(effect.Nom);
        this.SelectedEffects.set(effect.Nom, actualRank + 1);
        return;
      }
      this.SelectedEffects.set(effect.Nom, 1);
    },
    decreaseEffectRank(effect: Effet) {
      if (!this.SelectedEffects.has(effect.Nom)) {
        return;
      }
      const actualRank = this.SelectedEffects.get(effect.Nom);
      if (actualRank === 1) {
        this.SelectedEffects.delete(effect.Nom);

        return;
      }
      this.SelectedEffects.set(effect.Nom, actualRank - 1);
    },
    increaseExtentionRank(extention: ExtensionEffet) {
      if (this.SelectedExtension.has(extention.Nom)) {
        const actualRank = this.SelectedExtension.get(extention.Nom);
        this.SelectedExtension.set(extention.Nom, actualRank + 1);
        return;
      }
      this.SelectedExtension.set(extention.Nom, 1);
    },
    decreaseExtentionRank(extention: ExtensionEffet) {
      if (!this.SelectedExtension.has(extention.Nom)) {
        return;
      }
      const actualRank = this.SelectedExtension.get(extention.Nom);
      if (actualRank === 1) {
        this.SelectedExtension.delete(extention.Nom);

        return;
      }
      this.SelectedExtension.set(extention.Nom, actualRank - 1);
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
    changeType(type: AptitudeType) {
      this.SelectedType = type;
      this.SelectedEffects.clear();
      this.SelectedExtension.clear();
    },
  },
});
</script>
