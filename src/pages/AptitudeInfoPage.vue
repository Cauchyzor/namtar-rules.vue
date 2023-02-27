<template>
  <q-page padding>
    <NamTitle>Aptitude</NamTitle>
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
              @is-selected="selectType(typeAptitude)"
            ></TypeAptitudeItem>
          </div>
        </div>
      </q-tab-panel>

      <q-tab-panel name="Vecteur">
        <div class="row q-col-gutter-sm justify-center">
          <div v-for="vecteur in Vecteurs" :key="vecteur.Nom" class="col-12">
            <VecteurItem
              :Vecteur="vecteur"
              @is-selected="selectVecteur(vecteur)"
            ></VecteurItem>
          </div>
        </div>
      </q-tab-panel>

      <q-tab-panel name="Effet">
        <div class="row q-col-gutter-sm justify-center">
          <div v-for="effet in Effets" :key="effet.Nom" class="col-12">
            <EffetItem :Effet="effet"></EffetItem>
          </div>
        </div>
      </q-tab-panel>

      <q-tab-panel name="Extension">
        <div class="row q-col-gutter-sm justify-center">
          <div
            v-for="extension in ExtentionsEffet"
            :key="extension.Nom"
            class="col-12"
          >
            <ExtensionCard :Extension="extension"></ExtensionCard>
          </div>
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

import { AptitudeService, AptitudeType, Vecteur } from 'src/domain/Aptitude';
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
      Effets: AptitudeService.getAllEffect(),
      ExtentionsEffet: AptitudeService.getAllExtension(),
    };
  },
  methods: {
    selectType(type: AptitudeType) {
      console.log(type);
    },
    selectVecteur(v: Vecteur) {
      console.log(v);
    },
  },
});
</script>
