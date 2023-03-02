<template>
  <q-page padding>
    <NamTitle>Aptitude</NamTitle>
    <q-card bordered>
      <q-card-section horizontal>
        <q-card-section class="col-6" vertical>
          <div class="text-h5 q-mt-sm q-mb-xs">Nouvelle Aptitude</div>
          <div class="text-caption text-grey">
            Type : <strong>{{ SelectedType }}</strong>
          </div>
          <div class="text-caption text-grey">
            Vecteur :
            <strong>{{ SelectedVecteur && SelectedVecteur.Nom }}</strong>
          </div>
          <div class="text-caption text-grey">
            Effet : <strong>{{ getSelectedEffectsWithRank() }}</strong>
          </div>
          <div class="text-caption text-grey">
            Extension : <strong>{{ getSelectedExtensionWithRank() }}</strong>
          </div>
        </q-card-section>
        <q-card-section class="col-6" vertical>
          <div class="text-caption text-grey">
            Cout : <strong>{{ computeCost() }}</strong>
          </div>
          <div class="text-caption text-grey">
            Test à réaliser :
            <strong>{{ SelectedVecteur && SelectedVecteur.Difficulte }}</strong>
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
              :Disabled="!effet.IsCummulable && SelectedEffects.has(effet.Nom)"
            ></EffetItem>
          </div>
        </div>
      </q-tab-panel>

      <q-tab-panel name="Extension">
        <div class="row q-col-gutter-sm justify-center">
          <div
            v-for="extension in availableExtensions"
            :key="extension.Nom"
            class="col-12"
          >
            <ExtensionCard
              :Extension="extension"
              @rank-increased="increaseExtensionRank(extension)"
              @rank-decreased="decreaseExtensionRank(extension)"
              :Disabled="
                !extension.IsCummulable && SelectedExtension.has(extension.Nom)
              "
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
import ExtensionCard from 'src/components/ExtensionCard.vue';

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
      return this.SelectedType
        ? AptitudeService.getAllEffect().filter((effect: Effet) =>
            effect.StabiliteParTypeAptitude.has(this.SelectedType)
          )
        : AptitudeService.getAllEffect();
    },
    availableExtensions(): ExtensionEffet[] {
      return this.SelectedType && this.SelectedType
        ? AptitudeService.getAllExtension().filter(
            (extension: ExtensionEffet) =>
              extension.StabiliteParTypeAptitude.has(this.SelectedType)
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
    increaseExtensionRank(extension: ExtensionEffet) {
      if (this.SelectedExtension.has(extension.Nom)) {
        const actualRank = this.SelectedExtension.get(extension.Nom);
        this.SelectedExtension.set(extension.Nom, actualRank + 1);
        return;
      }
      this.SelectedExtension.set(extension.Nom, 1);
    },
    decreaseExtensionRank(extension: ExtensionEffet) {
      if (!this.SelectedExtension.has(extension.Nom)) {
        return;
      }
      const actualRank = this.SelectedExtension.get(extension.Nom);
      if (actualRank === 1) {
        this.SelectedExtension.delete(extension.Nom);

        return;
      }
      this.SelectedExtension.set(extension.Nom, actualRank - 1);
    },
    getSelectedExtensionWithRank() {
      return Array.from(this.SelectedExtension.entries())
        .map(([name, rank]) => `${name}(${rank})`)
        .join(' - ');
    },
    updateExtensionRank(extension: ExtensionEffet, rank: number) {
      if (rank === 0) {
        this.SelectedExtension.delete(extension.Nom);
        return;
      }
      this.SelectedExtension.set(extension.Nom, rank);
    },
    computeCost() {
      return this.SelectedType &&
        Array.from(this.SelectedEffects.values()).length
        ? AptitudeService.printAptitudeCost(
            AptitudeService.computeStabilityScore(
              this.SelectedType,
              this.SelectedEffects,
              this.SelectedExtension
            ),
            this.SelectedType
          )
        : 'Incomplet';
    },
    changeType(type: AptitudeType) {
      this.SelectedType = type.Nom;
      this.SelectedEffects.clear();
      this.SelectedExtension.clear();
    },
  },
});
</script>
