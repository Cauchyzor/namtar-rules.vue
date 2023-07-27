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

        <q-toolbar-title class="text-uppercase" style="max-width: 600px"
          >Namtar rules</q-toolbar-title
        >
        <q-space></q-space>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above class="bg-secondary">
      <q-list>
        <q-expansion-item icon="school" label="Règles" :content-inset-level="1">
          <q-item clickable to="/regles/dice-system" exact>
            <q-item-section>
              <q-item-label>Règles : Systeme de Dé</q-item-label>
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
            <q-item-label>Equipement</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable to="/vehicule" exact>
          <q-item-section avatar>
            <q-icon name="rocket_launch" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Véhicules</q-item-label>
          </q-item-section>
        </q-item>

        <q-expansion-item
          icon="settings"
          label="Personnage"
          :content-inset-level="1"
        >
          <q-item clickable to="/pj" exact>
            <q-item-section>
              <q-item-label>Fiche personnage</q-item-label>
            </q-item-section>
          </q-item>

          <q-expansion-item label="Aptitudes" :content-inset-level="1">
            <q-item clickable to="/apt-create" exact>
              <q-item-section>
                <q-item-label>Création d'aptitude</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable to="/apt-mantra" exact>
              <q-item-section>
                <q-item-label>Catalogue des mantras</q-item-label>
              </q-item-section>
            </q-item>
          </q-expansion-item>

          <q-item clickable to="/ethnotrait" exact>
            <q-item-section>
              <q-item-label>Ethnotrait</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable to="/niveau" exact>
            <q-item-section>
              <q-item-label>Gain de niveau</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>

        <q-expansion-item icon="explore" label="Lore" :content-inset-level="1">
          <q-item clickable to="/lore" exact>
            <q-item-section>
              <q-item-label>Introduction</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="/creature" exact>
            <q-item-section>
              <q-item-label>Créatures</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <q-page-container class="">
      <Transition>
        <router-view />
      </Transition>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: false,
      text: "",
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
