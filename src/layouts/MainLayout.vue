<template>
  <q-layout view="hHh Lpr lFf">
    <!-- TODO : Fix drawer en mode PC, laisser comme ça pour tablette en smartphone-->
    <!-- TODO : Faire le suivi des sections en right drawer-->
    <!-- TODO : Recherche de sections-->
    <q-header class="bg-secondary">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-uppercase" shrink
          >Namtar rules</q-toolbar-title
        >
        <p class="no-margin text-right">v{{ version }}</p>
        <q-space></q-space>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above class="bg-secondary">
      <q-list>
        <q-expansion-item icon="school" label="Règles" :content-inset-level="1">
          <q-item clickable to="/regles/dice-system" exact>
            <q-item-section>
              <q-item-label>Règles : Système de Dé</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable to="/regles/combat" exact>
            <q-item-section>
              <q-item-label>Règles : Combats</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable to="/regles/soin" exact>
            <q-item-section>
              <q-item-label>Règles : Soins</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable to="/regles/aventure" exact>
            <q-item-section>
              <q-item-label>Règles : Aventure</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>

        <q-item clickable to="/equipement" exact>
          <q-item-section avatar>
            <q-icon name="backpack" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Équipement</q-item-label>
          </q-item-section>
        </q-item>

        <q-expansion-item
          icon="settings"
          label="Personnage"
          :content-inset-level="1"
        >
          <q-item clickable to="/character/sheet" exact>
            <q-item-section>
              <q-item-label>Fiche personnage</q-item-label>
            </q-item-section>
          </q-item>

          <!-- TODO : Déclarer des éthnotraits/origine raciales
            <q-item clickable to="/character/ethnotrait" exact>
            <q-item-section>
              <q-item-label>Ethnotrait</q-item-label>
            </q-item-section>
          </q-item> -->

          <q-item clickable to="/character/niveau" exact>
            <q-item-section>
              <q-item-label>Gain de niveau</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>

        <q-item clickable to="/apt/list" exact>
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Aptitudes</q-item-label>
          </q-item-section>
        </q-item>

        <q-expansion-item icon="explore" label="Lore" :content-inset-level="1">
          <q-item clickable to="/lore" exact>
            <q-item-section>
              <q-item-label>Introduction</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="/lore/vehicule" exact>
            <q-item-section>
              <q-item-label>Véhicules</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>

        <!-- TODO : Feature : Creatures
            <q-expansion-item label="Creatures" :content-inset-level="1">
            <q-item clickable to="/creature/genotrait" exact>
              <q-item-section>
                <q-item-label>Génotraits</q-item-label>
              </q-item-section>
            </q-item>
          </q-expansion-item> -->
      </q-list>
    </q-drawer>

    <q-page-container class="q-ma-xl">
      <router-view v-slot="{ Component }">
        <transition mode="out-in" :duration="{ enter: 100, leave: 50 }">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import packageInfo from "../../package.json";

export default defineComponent({
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: false,
      version: packageInfo.version,
    };
  },

  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
  },
});
</script>
<style scoped>
.q-header {
  background-color: #1a1c23;
}
.q-toolbar__title {
  font-family: "Anurati";
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
