<template>
  <q-page padding>
    <h4 class="text-center">Création d'aptitude</h4>
    <div class="q-my-xl">
      <p>
        Les aptitudes représentent les talents ou les différentes techniques
        qu'utiliseront les personnages et les créatures dans tous les recoins de
        la galaxie. Certaines sont innées, d'autres acquises après de longues
        heures de pratiques. Les plus courantes sont les techniques apprises
        part l'expérience, d'autre plus rare sont intimement liée à
        l'utilisation du 'Fluide'.
      </p>
      <p>
        Depuis l'apparition du fluide, les créatures sensibles à sa présence ont
        accès à l'énergie sombre qui constitue une part importante de l'univers.
        Il existe deux grandes écoles dans l'utilisation du fluide. La première
        consiste à devenir un catalyseur pour permettre à l'énergie sombre de
        produire ses effets. Cette méthode est la plus directe et la plus
        puissante. Elle demande une grande discipline de corps et d'esprit. La
        seconde joue sur l'empreinte au sein du fluide que toute créature
        possède. En perturbant cette empreinte, l'utilisateur peut manifester
        des effets sur sa cible. Plus polyvalente, cette école manipule des
        effets plus subtils.
      </p>
    </div>
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
          Détermine comment l'utilisateur canalise l'énergie sombre avec le
          fluide. En fonction de la méthode, l'utilisateur produit un certain
          nombre de points de "stabilité" qui lui sera utile pour choisir les
          effets de l'aptitude.
        </p>
        <p class="text-center text-overline">Sélectionnez un type d'aptitude</p>
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
          Une fois canalisée, l'énergie peut être dirigée vers un point,
          s'étendre depuis sa source, être projetée sur une cible... Certaines
          méthodes sont plus complexes que d'autre.
        </p>

        <p class="text-center text-overline">Sélectionnez un vecteur</p>

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
          Chaque effet à un coût en stabilité. Une fois que le coût établit, le
          type d'aptitude (choisi précédemment) détermine ce que le lanceur doit
          investir pour réussir son aptitude. Tous les effets sont appliqués en
          même temps lorsque l'aptitude touche sa cible.
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
        title="Extension"
        caption="Des conditions optionnelles de matérialisation"
        icon="add_comment"
        :disable="SelectedAptTypeName == null"
        :done="step > 4"
      >
        <p>
          Les extensions permettent de gagner en stabilité sous certaines
          contraintes. Elles peuvent aussi, à l'inverse, décupler les effets
          d'un sort au prix de points de stabilité.
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
        <div class="q-gutter-md">
          <p>
            Décrivez précisément comment utiliser l'aptitude et ses effets. Vous
            devez restez cohérent avec les différentes caractéristiques choisies
            tout au long de sa création.
          </p>
          <q-input
            outlined
            v-model="aptName"
            label="Nom de l'aptitude"
          ></q-input>
          <q-input
            outlined
            v-model="aptDesc"
            label="Description libre des effets..."
          ></q-input>
        </div>
        <q-stepper-navigation>
          <q-btn
            :disable="!isAptValid"
            color="primary"
            label="Créer l'aptitude"
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
      <q-card flat bordered class="bg-accent">
        <q-card-section vertical>
          <div class="text-h5 q-mt-sm q-mb-xs">
            {{ createdAptitude?.Nom }}
          </div>
          <div class="text-caption q-mt-sm q-mb-xs">
            {{ createdAptitude?.Description }}
          </div>

          <q-card-section horizontal class="bg-accent">
            <q-card-section class="col-6" vertical>
              <div class="text-caption text-grey">
                Type : <strong>{{ createdAptitude?.Type.Nom }}</strong>
              </div>
              <div class="text-caption text-grey">
                Vecteur : <strong>{{ createdAptitude?.Vecteur.Nom }}</strong>
              </div>
            </q-card-section>
            <q-separator vertical inset></q-separator>
            <q-card-section class="col-6" vertical>
              <div class="text-caption text-grey">
                Coût :
                <strong>{{ createdAptitude?.computeStabilityScore() }}</strong>
              </div>
            </q-card-section>
          </q-card-section>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>
<script lang="ts">
// TODO Finir refacto aptitude : creation d'aptitude avec le q-dialog et utilisation des methodes d'aptitude plutot que du service Aptitudes
import { defineComponent, ref } from "vue";

import { ServiceAptitude, AptitudeTypeName } from "src/data/ServiceAptitude";
import {
  AptitudeCreated,
  AptitudeType,
  Effet,
  ExtensionEffet,
} from "src/model/Aptitude";

import EffetCard from "src/components/EffetCard.vue";
import TypeAptitudeItem from "src/components/TypeAptitudeCard.vue";
import VecteurItem from "src/components/VecteurCard.vue";
import ExtensionCard from "src/components/ExtensionCard.vue";

export default defineComponent({
  name: "PageAptitudeCreation",
  components: {
    EffetCard,
    ExtensionCard,
    VecteurItem,
    TypeAptitudeItem,
  },
  data() {
    return {
      AptTypes: ServiceAptitude.findAllTypes(),
      SelectedAptTypeName: ref(),
      SelectedAptVecteur: ref(),
      SelectedAptEffets: ref(new Map()),
      SelectedAptExtensions: ref(new Map()),
      aptName: ref(""),
      aptDesc: ref(""),

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
        ? ServiceAptitude.findAllVecteur().filter((v) =>
            v.TypesCompatibilities.includes(this.SelectedAptTypeName)
          )
        : ServiceAptitude.findAllVecteur();
    },
    availableEffets(): Effet[] {
      return this.SelectedAptTypeName
        ? ServiceAptitude.findAllEffets().filter((effet: Effet) =>
            effet.StabiliteParTypeAptitude.has(this.SelectedAptTypeName)
          )
        : ServiceAptitude.findAllEffets();
    },
    availableExtensions(): ExtensionEffet[] {
      return this.SelectedAptTypeName && this.SelectedAptTypeName
        ? ServiceAptitude.findAllExtensions().filter(
            (extension: ExtensionEffet) =>
              extension.StabiliteParTypeAptitude.has(this.SelectedAptTypeName)
          )
        : ServiceAptitude.findAllExtensions();
    },
    isAptValid(): boolean {
      return (
        this.SelectedAptTypeName &&
        this.SelectedAptVecteur &&
        this.SelectedAptEffets.size > 0 &&
        this.aptName &&
        this.aptName !== ""
      );
    },
    createdAptitude(): AptitudeCreated {
      return new AptitudeCreated(
        this.aptName,
        this.aptDesc,
        this.SelectedAptTypeName,
        this.SelectedAptVecteur.Nom,
        this.SelectedAptEffets,
        this.SelectedAptExtensions
      );
    },
  },
  methods: {
    getSelectedEffetsWithRank() {
      return Array.from(this.SelectedAptEffets.entries())
        .map(([name, rank]) => `${name}(${rank})`)
        .join(" - ");
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
        .join(" - ");
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
