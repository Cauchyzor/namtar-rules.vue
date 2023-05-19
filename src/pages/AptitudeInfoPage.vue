<template>
  <q-page padding>
    <h3 class="text-center">Création d'aptitude</h3>
    <q-stepper
      v-model="step"
      vertical
      header-nav
      animated
      class="bg-secondary"
      flat
    >
      <q-step
        :name="1"
        title="Type"
        caption="La source de l'aptitude"
        icon="settings"
        :done="SelectedType != null"
      >
        <p>
          Une aptitude est une manifestation fluide dans une forme concrète pour
          les creatures habitant la galaxie. L'utilisateur canalyse le fluide a
          partir d'une source de pouvoir avant de le modeler a sa convenance.
        </p>
        <p class="text-center text-overline">Selectionez un type d'aptitude</p>
        <div class="row q-col-gutter-sm justify-center">
          <div
            v-for="typeAptitude in TypesAptitude"
            :key="typeAptitude.Nom"
            class="col-lg-3 col-md-4 col-sm-6 col-12"
          >
            <TypeAptitudeItem
              :Type="typeAptitude"
              @is-selected="changeType(typeAptitude)"
              style="height: 100%"
              :class="typeAptitude.Nom === SelectedType ? 'bg-accent' : ''"
            ></TypeAptitudeItem>
          </div>
        </div>
        <q-stepper-navigation>
          <q-btn @click="step = 2" color="primary" label="Continue"></q-btn>
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="Vecteur"
        caption="La cible de l'aptitude"
        icon="create_new_folder"
        :done="SelectedVecteur != null"
      >
        <p>
          Une fois canalysée, l'énergie peut être dirigée vers une cible,
          s'etendre homogènement depuis sa source, être projetée sur une
          cible... Certaines méthodes sont plus complexes que d'autre.
        </p>

        <p class="text-center text-overline">Selectionez un vecteur</p>

        <div class="row q-col-gutter-sm justify-center">
          <div
            v-for="vecteur in Vecteurs"
            :key="vecteur.Nom"
            class="col-lg-3 col-md-4 col-sm-6 col-12"
          >
            <VecteurItem
              :Vecteur="vecteur"
              @is-selected="SelectedVecteur = vecteur"
              style="height: 100%"
              :class="vecteur.Nom === SelectedVecteur?.Nom ? 'bg-accent' : ''"
            ></VecteurItem>
          </div>
        </div>
        <q-stepper-navigation>
          <q-btn
            @click="step = SelectedType == null ? 5 : 3"
            color="primary"
            label="Continue"
          ></q-btn>
          <q-btn
            flat
            @click="step = 1"
            color="primary"
            label="Back"
            class="q-ml-sm"
          ></q-btn>
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        title="Effets"
        caption="Ce que l'aptitude applique"
        icon="assignment"
        :disable="SelectedType == null"
        :done="SelectedEffects.size > 0"
      >
        <p>
          L'aptitude consume son énergie en appliant des effets à la cible.
          Touts les effets sont appliqués en même temps.
        </p>

        <div class="row q-col-gutter-sm justify-center">
          <div
            v-for="effet in availableEffects"
            :key="effet.Nom"
            class="col-lg-3 col-md-4 col-sm-6 col-12"
          >
            <EffetCard
              style="height: 100%"
              :Effet="effet"
              :Disabled="!effet.IsCummulable && SelectedEffects.has(effet.Nom)"
              :Rank="SelectedEffects.get(effet.Nom) || 0"
              :class="SelectedEffects.has(effet.Nom) ? 'bg-accent' : ''"
              @rank-increased="increaseEffectRank(effet)"
              @rank-decreased="decreaseEffectRank(effet)"
            ></EffetCard>
          </div>
        </div>

        <q-stepper-navigation>
          <q-btn @click="step = 4" color="primary" label="Continue"></q-btn>
          <q-btn
            flat
            @click="step = 2"
            color="primary"
            label="Back"
            class="q-ml-sm"
          ></q-btn>
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="4"
        title="Extention"
        caption="Les conditions de réussites"
        icon="add_comment"
        :disable="SelectedType == null"
        :done="step > 4"
      >
        <p>
          Pour canalyser et materialiser les formes les plus puissantes du
          fluide, les utilisateurs peuvent accepter certaines contraintes...
        </p>
        <div class="row q-col-gutter-sm justify-center">
          <div
            v-for="extension in availableExtensions"
            :key="extension.Nom"
            class="col-lg-3 col-md-4 col-sm-6 col-12"
          >
            <ExtensionCard
              style="height: 100%"
              :Extension="extension"
              :Disabled="
                !extension.IsCummulable && SelectedExtension.has(extension.Nom)
              "
              :Rank="SelectedExtension.get(extension.Nom) || 0"
              :class="SelectedExtension.has(extension.Nom) ? 'bg-accent' : ''"
              @rank-increased="increaseExtensionRank(extension)"
              @rank-decreased="decreaseExtensionRank(extension)"
            ></ExtensionCard>
          </div>
        </div>
        <q-stepper-navigation>
          <q-btn @click="step = 5" color="primary" label="Continue"></q-btn>
          <q-btn
            flat
            @click="step = 3"
            color="primary"
            label="Back"
            class="q-ml-sm"
          ></q-btn>
        </q-stepper-navigation>
      </q-step>
      <q-step
        :name="5"
        title="Finalisation"
        caption="Baptisez votre nouvelle aptitude"
        icon="add_comment"
      >
        Decrivez précisement l'aptitude quand elle est utilisée.
        <q-stepper-navigation>
          <q-btn color="primary" label="Creer l'aptitude"></q-btn>
          <q-btn
            flat
            @click="step = SelectedType == null ? 2 : 4"
            color="primary"
            label="Back"
            class="q-ml-sm"
          ></q-btn>
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
    <q-card class="bg-accent" flat>
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
  </q-page>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

import {
  AptitudeService,
  AptitudeType,
  AptitudeTypeName,
  Effet,
  ExtensionEffet,
} from 'src/domain/Aptitude';

import EffetCard from 'src/components/EffetCard.vue';
import TypeAptitudeItem from 'src/components/TypeAptitudeCard.vue';
import VecteurItem from 'src/components/VecteurCard.vue';
import ExtensionCard from 'src/components/ExtensionCard.vue';

export default defineComponent({
  name: 'AptitudeInfoPage',
  components: {
    EffetCard,
    ExtensionCard,
    VecteurItem,
    TypeAptitudeItem,
  },
  data() {
    return {
      TypesAptitude: AptitudeService.getAllTypes(),
      Vecteurs: AptitudeService.getAllVecteur(),
      SelectedType: ref(),
      SelectedVecteur: ref(),
      SelectedEffects: ref(new Map()),
      SelectedExtension: ref(new Map()),

      step: ref(1),
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
    getTypeDescription(typeName: AptitudeTypeName) {
      return this.TypesAptitude.find((t) => t.Nom === typeName)?.Description;
    },
  },
});
</script>
