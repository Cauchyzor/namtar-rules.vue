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
        :done="SelectedAptTypeName != null"
      >
        <p>
          Une aptitude est une manifestation fluide dans une forme concrète pour
          les creatures habitant la galaxie. L'utilisateur canalyse le fluide a
          partir d'une source de pouvoir avant de le modeler a sa convenance.
        </p>
        <p class="text-center text-overline">Selectionez un type d'aptitude</p>
        <div class="row q-col-gutter-sm justify-center">
          <div
            v-for="typeAptitude in availableAptitudeTypes"
            :key="typeAptitude.Nom"
            class="col-lg-3 col-md-4 col-sm-6 col-12"
          >
            <TypeAptitudeItem
              :Type="typeAptitude"
              @is-selected="changeType(typeAptitude)"
              style="height: 100%"
              :class="
                typeAptitude.Nom === SelectedAptTypeName ? 'bg-accent' : ''
              "
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
        :done="SelectedAptVecteur != null"
      >
        <p>
          Une fois canalysée, l'énergie peut être dirigée vers une cible,
          s'etendre homogènement depuis sa source, être projetée sur une
          cible... Certaines méthodes sont plus complexes que d'autre.
        </p>

        <p class="text-center text-overline">Selectionez un vecteur</p>

        <div class="row q-col-gutter-sm justify-center">
          <div
            v-for="vecteur in availableAptitudeVecteur"
            :key="vecteur.Nom"
            class="col-lg-3 col-md-4 col-sm-6 col-12"
          >
            <VecteurItem
              :Vecteur="vecteur"
              @is-selected="SelectedAptVecteur = vecteur"
              style="height: 100%"
              :class="
                vecteur.Nom === SelectedAptVecteur?.Nom ? 'bg-accent' : ''
              "
            ></VecteurItem>
          </div>
        </div>
        <q-stepper-navigation>
          <q-btn
            @click="step = SelectedAptTypeName == null ? 5 : 3"
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
        :disable="SelectedAptTypeName == null"
        :done="SelectedAptEffets.size > 0"
      >
        <p>
          L'aptitude consume son énergie en appliant des effets à la cible.
          Touts les effets sont appliqués en même temps.
        </p>

        <div class="row q-col-gutter-sm justify-center">
          <div
            v-for="effet in availableEffets"
            :key="effet.Nom"
            class="col-lg-3 col-md-4 col-sm-6 col-12"
          >
            <EffetCard
              style="height: 100%"
              :Effet="effet"
              :Disabled="
                !effet.IsCummulable && SelectedAptEffets.has(effet.Nom)
              "
              :Rank="SelectedAptEffets.get(effet.Nom) || 0"
              :class="SelectedAptEffets.has(effet.Nom) ? 'bg-accent' : ''"
              @rank-increased="increaseEffetRank(effet)"
              @rank-decreased="decreaseEffetRank(effet)"
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
        :disable="SelectedAptTypeName == null"
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
                !extension.IsCummulable &&
                SelectedAptExtensions.has(extension.Nom)
              "
              :Rank="SelectedAptExtensions.get(extension.Nom) || 0"
              :class="
                SelectedAptExtensions.has(extension.Nom) ? 'bg-accent' : ''
              "
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
          <q-btn
            :disable="!isAptValid"
            color="primary"
            label="Creer l'aptitude"
            @click="showAtpCard = true"
          ></q-btn>
          <q-btn
            flat
            @click="step = SelectedAptTypeName == null ? 2 : 4"
            color="primary"
            label="Back"
            class="q-ml-sm"
          ></q-btn>
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
    <q-dialog v-model="showAtpCard">
      <q-card flat>
        <q-card-section horizontal>
          <q-card-section class="col-6" vertical>
            <div class="text-h5 q-mt-sm q-mb-xs">Nouvelle Aptitude</div>
            <div class="text-caption text-grey">
              Type : <strong>{{ SelectedAptTypeName }}</strong>
            </div>
            <div class="text-caption text-grey">
              Vecteur :
              <strong>{{
                SelectedAptVecteur && SelectedAptVecteur.Nom
              }}</strong>
            </div>
            <div class="text-caption text-grey">
              Effet : <strong>{{ getSelectedEffetsWithRank() }}</strong>
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
              <strong>{{
                SelectedAptVecteur && SelectedAptVecteur.Difficulte
              }}</strong>
            </div>
          </q-card-section>
        </q-card-section>
      </q-card>
    </q-dialog>
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
      AptTypes: AptitudeService.getAllTypes(),
      SelectedAptTypeName: ref(),
      SelectedAptVecteur: ref(),
      SelectedAptEffets: ref(new Map()),
      SelectedAptExtensions: ref(new Map()),

      step: ref(1),
      showAtpCard: ref(false),
    };
  },
  computed: {
    /**
     * All type can be selected for the creation form except Mantra
     */
    availableAptitudeTypes(): AptitudeType[] {
      return this.AptTypes.filter((t) => t.Nom !== AptitudeTypeName.MANTRA);
    },

    availableAptitudeVecteur() {
      return this.SelectedAptTypeName
        ? AptitudeService.getAllVecteur().filter((v) =>
            v.TypesCompatibilities.includes(this.SelectedAptTypeName)
          )
        : AptitudeService.getAllVecteur();
    },
    availableEffets(): Effet[] {
      return this.SelectedAptTypeName
        ? AptitudeService.getAllEffect().filter((effect: Effet) =>
            effect.StabiliteParTypeAptitude.has(this.SelectedAptTypeName)
          )
        : AptitudeService.getAllEffect();
    },
    availableExtensions(): ExtensionEffet[] {
      return this.SelectedAptTypeName && this.SelectedAptTypeName
        ? AptitudeService.getAllExtension().filter(
            (extension: ExtensionEffet) =>
              extension.StabiliteParTypeAptitude.has(this.SelectedAptTypeName)
          )
        : AptitudeService.getAllExtension();
    },
    isAptValid() {
      return (
        this.SelectedAptTypeName &&
        this.SelectedAptVecteur &&
        this.SelectedAptEffets.size > 0
      );
    },
  },
  methods: {
    getSelectedEffetsWithRank() {
      return Array.from(this.SelectedAptEffets.entries())
        .map(([name, rank]) => `${name}(${rank})`)
        .join(' - ');
    },
    increaseEffetRank(effect: Effet) {
      if (this.SelectedAptEffets.has(effect.Nom)) {
        const actualRank = this.SelectedAptEffets.get(effect.Nom);
        this.SelectedAptEffets.set(effect.Nom, actualRank + 1);
        return;
      }
      this.SelectedAptEffets.set(effect.Nom, 1);
    },
    decreaseEffetRank(effect: Effet) {
      if (!this.SelectedAptEffets.has(effect.Nom)) {
        return;
      }
      const actualRank = this.SelectedAptEffets.get(effect.Nom);
      if (actualRank === 1) {
        this.SelectedAptEffets.delete(effect.Nom);

        return;
      }
      this.SelectedAptEffets.set(effect.Nom, actualRank - 1);
    },
    increaseExtensionRank(extension: ExtensionEffet) {
      if (this.SelectedAptExtensions.has(extension.Nom)) {
        const actualRank = this.SelectedAptExtensions.get(extension.Nom);
        this.SelectedAptExtensions.set(extension.Nom, actualRank + 1);
        return;
      }
      this.SelectedAptExtensions.set(extension.Nom, 1);
    },
    decreaseExtensionRank(extension: ExtensionEffet) {
      if (!this.SelectedAptExtensions.has(extension.Nom)) {
        return;
      }
      const actualRank = this.SelectedAptExtensions.get(extension.Nom);
      if (actualRank === 1) {
        this.SelectedAptExtensions.delete(extension.Nom);

        return;
      }
      this.SelectedAptExtensions.set(extension.Nom, actualRank - 1);
    },
    getSelectedExtensionWithRank() {
      return Array.from(this.SelectedAptExtensions.entries())
        .map(([name, rank]) => `${name}(${rank})`)
        .join(' - ');
    },
    updateExtensionRank(extension: ExtensionEffet, rank: number) {
      if (rank === 0) {
        this.SelectedAptExtensions.delete(extension.Nom);
        return;
      }
      this.SelectedAptExtensions.set(extension.Nom, rank);
    },
    computeCost() {
      return this.SelectedAptTypeName &&
        Array.from(this.SelectedAptEffets.values()).length
        ? AptitudeService.printAptitudeCost(
            AptitudeService.computeStabilityScore(
              this.SelectedAptTypeName,
              this.SelectedAptEffets,
              this.SelectedAptExtensions
            ),
            this.SelectedAptTypeName
          )
        : 'Incomplet';
    },
    changeType(aptTtype: AptitudeType) {
      this.SelectedAptTypeName = aptTtype.Nom;
      this.SelectedAptVecteur = ref();
      this.SelectedAptEffets.clear();
      this.SelectedAptExtensions.clear();
    },
    getTypeDescription(typeName: AptitudeTypeName) {
      return this.AptTypes.find((t) => t.Nom === typeName)?.Description;
    },
  },
});
</script>
